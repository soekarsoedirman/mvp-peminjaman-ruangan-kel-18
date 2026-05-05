import { supabase } from './supabase';
import { Building } from '../types/building';

export const getBuildings = async (): Promise<Building[]> => {
  const { data, error } = await supabase
    .from('building')
    .select('building_id, building_name, floor_total, created_at')
    .order('building_name', { ascending: true });

  if (error) {
    console.error('Error fetching buildings:', error);
    throw new Error(error.message);
  }

  return (data ?? []) as Building[];
};
