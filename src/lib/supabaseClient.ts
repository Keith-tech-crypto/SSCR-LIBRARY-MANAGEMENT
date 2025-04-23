
import { createClient } from "@supabase/supabase-js";

// These env vars should be configured in Lovable's Supabase integration.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// This client will be used wherever we access Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
