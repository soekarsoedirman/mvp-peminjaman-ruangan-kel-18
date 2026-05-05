insert into public.building (building_id, building_name, floor_total)
values
  (1, 'Gedung Aula', 3),
  (2, 'Gedung Rektorat', 6)
on conflict (building_id) do update
set
  building_name = excluded.building_name,
  floor_total = excluded.floor_total;

insert into public.users (user_id, user_name, jurusan, angkatan)
values
  ('u001', 'Admin Kampus', 'Sistem Informasi', 2022),
  ('u002', 'BEM UNTIRTA', 'Manajemen', 2021)
on conflict (user_id) do update
set
  user_name = excluded.user_name,
  jurusan = excluded.jurusan,
  angkatan = excluded.angkatan;

insert into public.ruangan (room_id, building_id, floor, room_number, foto, kapasitas, deskripsi)
values
  ('A101', 1, 1, 101, null, 80, 'Ruang serbaguna untuk rapat dan seminar kecil.'),
  ('A202', 1, 2, 202, null, 40, 'Ruang kelas dengan fasilitas proyektor.'),
  ('R601', 2, 6, 601, null, 20, 'Ruang meeting internal rektorat.')
on conflict (room_id) do update
set
  building_id = excluded.building_id,
  floor = excluded.floor,
  room_number = excluded.room_number,
  foto = excluded.foto,
  kapasitas = excluded.kapasitas,
  deskripsi = excluded.deskripsi;

insert into public.schedule (room_id, user_id, schedule_name, tanggal_dimulai, tanggal_selesai)
values
  ('A101', 'u001', 'Rapat Koordinasi Fakultas', now() + interval '1 day', now() + interval '1 day 2 hours'),
  ('A202', 'u002', 'Pelatihan Organisasi Mahasiswa', now() + interval '2 days', now() + interval '2 days 3 hours')
on conflict do nothing;

insert into public.peminjaman (room_id, user_id, nama_kegiatan, tanggal_dimulai, tanggal_selesai, deskripsi, jumlah_peserta, dokumen, status)
values
  ('R601', 'u001', 'Briefing Panitia Wisuda', now() + interval '3 days', now() + interval '3 days 1 hour', 'Persiapan teknis acara wisuda.', 15, '', 'menunggu')
on conflict do nothing;
