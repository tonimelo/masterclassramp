import { createClient } from '@supabase/supabase-js';

const EXTERNAL_SUPABASE_URL = 'https://pqkqftqvrbjbdftilwip.supabase.co';
const EXTERNAL_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxa3FmdHF2cmJqYmRmdGlsd2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNzIwMjUsImV4cCI6MjA5MDY0ODAyNX0.1oB7gAmF-_Tn3B1Svh320d6SLN-l-hGdOnXOYUb5ehs';

export const externalSupabase = createClient(EXTERNAL_SUPABASE_URL, EXTERNAL_SUPABASE_ANON_KEY);
