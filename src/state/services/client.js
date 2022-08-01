/* eslint-disable max-len */
import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL =
  'https://iycbxfblwhlxswmwdxiu.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5Y2J4ZmJsd2hseHN3bXdkeGl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkzOTAyNTcsImV4cCI6MTk3NDk2NjI1N30.DCULyKoHdj7s8suyGTpnBAGrmL2vt5PC8AZ0HkVwez4';

export const client = createClient(SUPABASE_URL, SUPABASE_KEY);
