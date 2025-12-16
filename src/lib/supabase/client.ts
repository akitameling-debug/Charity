import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // NOTE: We intentionally leave the client untyped here.
  // The generated `Database` types in this repo don't include relationship metadata expected by
  // recent `@supabase/*` packages, which can cause query/update generics to collapse to `never`
  // and break `next build` type-checking. Call sites can still use `.returns<T>()` when needed.
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
