import { createClient } from '@supabase/supabase-js';

const rawSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!rawSupabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase env belum diset. Isi NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_ANON_KEY di .env.local'
  );
}

const supabaseUrl = rawSupabaseUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/$/, '');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
