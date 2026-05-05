export interface Schedule {
  schedule_id: number;
  room_id: string;
  user_id: string;
  schedule_name: string;
  tanggal_dimulai: string;
  tanggal_selesai: string;
  created_at?: string;
}
