import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create client only if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Types for our database tables
export interface Appointment {
  id?: string
  name: string
  phone: string
  email?: string
  department: string
  doctor?: string
  date: string
  message?: string
  status?: 'pending' | 'confirmed' | 'cancelled'
  created_at?: string
}

export interface ContactMessage {
  id?: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status?: 'new' | 'read' | 'replied'
  created_at?: string
}
