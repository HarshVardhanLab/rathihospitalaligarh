import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendAppointmentNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.phone || !body.department || !body.date) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if Supabase is configured
    if (!supabase) {
      console.error('Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      )
    }

    // Insert appointment into Supabase
    const { data, error } = await supabase
      .from('appointments')
      .insert([
        {
          name: body.name,
          phone: body.phone,
          email: body.email || null,
          department: body.department,
          doctor: body.doctor || null,
          date: body.date,
          message: body.message || null,
          status: 'pending'
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to book appointment' },
        { status: 500 }
      )
    }

    // Send email notification
    const emailResult = await sendAppointmentNotification({
      patientName: body.name,
      patientPhone: body.phone,
      patientEmail: body.email,
      department: body.department,
      doctor: body.doctor,
      date: body.date,
      message: body.message
    })

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error)
      // Don't fail the request if email fails, appointment is still saved
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Appointment booked successfully',
        data: data[0],
        emailSent: emailResult.success
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error booking appointment:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check if Supabase is configured
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      )
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const date = searchParams.get('date')

    let query = supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false })

    if (status) {
      query = query.eq('status', status)
    }

    if (date) {
      query = query.eq('date', date)
    }

    const { data, error } = await query

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch appointments' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
