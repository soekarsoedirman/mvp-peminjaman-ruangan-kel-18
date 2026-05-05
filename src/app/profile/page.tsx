import { getUsers } from '@/lib/user';

export const revalidate = 0;

export default async function ProfilePage() {
  const users = await getUsers();
  const activeUser = users[0];

  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-8 pb-28">
      <h1 className="mb-4 text-2xl font-bold text-zinc-900">Profil</h1>
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        {activeUser ? (
          <div className="grid gap-2 text-sm text-zinc-700">
            <p>
              Nama: <span className="font-semibold text-zinc-900">{activeUser.user_name}</span>
            </p>
            <p>
              User ID: <span className="font-semibold text-zinc-900">{activeUser.user_id}</span>
            </p>
            <p>
              Jurusan: <span className="font-semibold text-zinc-900">{activeUser.jurusan}</span>
            </p>
            <p>
              Angkatan: <span className="font-semibold text-zinc-900">{activeUser.angkatan}</span>
            </p>
          </div>
        ) : (
          <p className="text-sm text-zinc-600">
            Data user belum ada. Tambahkan data awal lewat `supabase/seed.sql`.
          </p>
        )}
      </div>
    </section>
  );
}
