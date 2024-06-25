import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dcnlzbuaupfuarbhxgqe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbmx6YnVhdXBmdWFyYmh4Z3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MDcxMzUsImV4cCI6MjAyNTI4MzEzNX0.DA0hEiTjbgy9szxOx7pDU6sRGeUiaZldCWd7RZvxShc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
