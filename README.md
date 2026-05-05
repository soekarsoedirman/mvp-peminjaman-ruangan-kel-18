# MVP Peminjaman Ruangan

Aplikasi Next.js untuk menampilkan daftar ruangan, detail jadwal, pengajuan peminjaman, history, dan profil sederhana dengan backend Supabase.

## 1) Setup Environment

Buat file `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://uwtvgztpoxhlaolbzhex.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
```

Catatan: gunakan base URL Supabase (`https://<project-ref>.supabase.co`), bukan endpoint `.../rest/v1`.

## 2) Setup Database

Di Supabase SQL Editor, jalankan isi:

1. `supabase/migrations/20260430074723_create_table.sql`
2. `supabase/seed.sql`

Script tersebut membuat tabel:

- `building`
- `users`
- `ruangan`
- `schedule`
- `peminjaman`

Sekaligus membuat bucket storage publik `foto`.

## 3) Jalankan Aplikasi

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## 4) Verifikasi

```bash
npm run lint
npm run build
```
