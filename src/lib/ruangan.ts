import { supabase } from './supabase';
import { Ruangan as Room } from '../types/ruangan';

export const getRoomsLimit15 = async (): Promise<Room[]> => {
  const { data, error } = await supabase
    .from('ruangan')
    .select('*')
    .limit(15);
  
  if (error) {
    console.error('Error fetching rooms:', error);
    throw new Error(error.message);
  }
  
  return data as Room[];
};