import { Building } from './building';

export interface Ruangan {
  room_id: string;
  building_id: number;
  floor: number;
  room_number: number;
  foto: string | null;
  kapasitas: number;
  deskripsi: string | null;
  building?: Pick<Building, 'building_id' | 'building_name'> | null;
  created_at?: string;
}
