import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://omlgwwixpsrcgrpuspwf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tbGd3d2l4cHNyY2dycHVzcHdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxMzI2ODUsImV4cCI6MjA4NDcwODY4NX0.62-8n_gv3ylRyeGQemHamfVpJGzFEV4_7tyfe7mC8OM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
