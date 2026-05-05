import { supabase } from './supabase';
import { User } from '../types/user';

export const getUsers = async (): Promise<User[]> => {
  const { data, error } = await supabase
    .from('users')
    .select('user_id, user_name, jurusan, angkatan, created_at')
    .order('user_name', { ascending: true });

  if (error) {
    console.error('Error fetching users:', error);
    throw new Error(error.message);
  }

  return (data ?? []) as User[];
};
