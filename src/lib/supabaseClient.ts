
import { createClient } from "@supabase/supabase-js";

// These env vars should be configured in Lovable's Supabase integration.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string || "";

// Check if Supabase URL and key are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Missing Supabase environment variables. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your environment or Supabase integration settings."
  );
}

// This client will be used wherever we access Supabase
// Using empty strings as fallbacks prevents the app from crashing
// Note: Authentication and database operations will fail gracefully
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

// Check if the connection is valid
supabase.auth.getSession().then(({ error }) => {
  if (error && !window.location.href.includes("localhost")) {
    console.warn("Supabase connection issue:", error.message);
    // The app will still load, but Supabase features won't work
  }
});
