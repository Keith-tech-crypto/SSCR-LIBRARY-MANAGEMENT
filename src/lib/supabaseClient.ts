
import { createClient } from "@supabase/supabase-js";

// These env vars should be configured in Lovable's Supabase integration.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Check if Supabase URL and key are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Missing Supabase environment variables. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your Supabase integration settings."
  );
}

// This client will be used wherever we access Supabase
export const supabase = createClient(
  supabaseUrl || "https://your-project.supabase.co", // Fallback URL (will trigger error but prevents blank screen)
  supabaseAnonKey || "public-anon-key-placeholder" // Fallback key (will trigger auth error but prevents blank screen)
);
