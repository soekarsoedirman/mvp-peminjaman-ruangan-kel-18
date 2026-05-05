import type { NextConfig } from "next";

const rawSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const normalizedSupabaseUrl = rawSupabaseUrl.replace(/\/rest\/v1\/?$/, "").replace(/\/$/, "");
let supabaseHostname: string | null = null;

if (normalizedSupabaseUrl) {
  try {
    supabaseHostname = new URL(normalizedSupabaseUrl).hostname;
  } catch {
    supabaseHostname = null;
  }
}

const remoteHostnames = new Set<string>([
  "uwtvgztpoxhlaolbzhex.supabase.co",
  "mylbjyipnqulcgnrcyvd.supabase.co",
]);

if (supabaseHostname) {
  remoteHostnames.add(supabaseHostname);
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: Array.from(remoteHostnames).map((hostname) => ({
      protocol: "https",
      hostname,
      port: "",
      pathname: "/storage/v1/object/public/**",
    })),
  },
};

export default nextConfig;
