// Test Supabase connection
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jyobsibvopamncibepsz.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key-here'

console.log('Testing Supabase connection...')
console.log('URL:', supabaseUrl)
console.log('Key:', supabaseKey ? `${supabaseKey.substring(0, 20)}...` : 'NOT SET')

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  try {
    // Test connection by trying to query appointments table
    const { data, error } = await supabase
      .from('appointments')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('❌ Error connecting to Supabase:', error.message)
      console.log('\nPossible issues:')
      console.log('1. Check if NEXT_PUBLIC_SUPABASE_ANON_KEY is correct')
      console.log('2. Make sure appointments table exists in Supabase')
      console.log('3. Verify Row Level Security policies are set')
      return false
    }
    
    console.log('✅ Successfully connected to Supabase!')
    console.log('✅ Appointments table is accessible')
    return true
  } catch (err) {
    console.error('❌ Connection failed:', err.message)
    return false
  }
}

testConnection()
