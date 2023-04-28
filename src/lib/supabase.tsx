import { createClient } from '@supabase/supabase-js'

export  const supabase = createClient('https://vipxmosbzuviyfvcsiip.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpcHhtb3NienV2aXlmdmNzaWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4ODQ1OTUsImV4cCI6MTk5NzQ2MDU5NX0.RtXWsT70epRZiF-WjQfmbX0JZtImxZkf0O4cli_zVUI')