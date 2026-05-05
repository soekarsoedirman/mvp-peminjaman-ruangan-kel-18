import { supabase } from './supabase';
import { Ruangan as Room } from '../types/ruangan';

const roomFields = `
  room_id,
  building_id,
  floor,
  room_number,
  foto,
  kapasitas,
  deskripsi,
  building:building_id (
    building_id,
    building_name
  )
`;

export const getRoomImageUrl = (fileName?: string | null) => {
  if (!fileName) return '/window.svg';
  const { data } = supabase.storage.from('foto').getPublicUrl(fileName);
  return data.publicUrl;
};

export const getRoomsLimit15 = async (): Promise<Room[]> => {
  const { data, error } = await supabase
    .from('ruangan')
    .select(roomFields)
    .order('room_id', { ascending: true })
    .limit(15);
  
  if (error) {
    console.error('Error fetching rooms:', error);
    throw new Error(error.message);
  }

  const normalizedRooms = (data ?? []).map((room) => ({
    ...room,
    building: Array.isArray(room.building) ? room.building[0] ?? null : room.building ?? null,
  }));

  return normalizedRooms as Room[];
};

export const getRoomDetail = async (roomId: string): Promise<Room> => {
  const { data: room, error: roomError } = await supabase
    .from('ruangan')
    .select(roomFields)
    .eq('room_id', roomId)
    .single();

  if (roomError) {
    console.error('Error fetching room:', roomError);
    throw new Error(roomError.message);
  }

  return {
    ...room,
    building: Array.isArray(room.building) ? room.building[0] ?? null : room.building ?? null,
  } as Room;
};
