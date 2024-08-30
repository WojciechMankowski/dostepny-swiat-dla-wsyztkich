import { Place, Comment, Rating } from "../types/database_type";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_DATABASE_URL,
  import.meta.env.VITE_DATABASE_KEY
);

export const fetchPlaces = async (): Promise<Place[]> => {
  const { data: places, error } = await supabase.from("places").select("*");

  if (error) {
    throw new Error(`Error fetching places: ${error.message}`);
  }

  return places ?? [];
};

export const fetchRatingWithId = async (
  id: number
): Promise<Rating | null> => {
  const { data, error } = await supabase
    .from("ratings")
    .select("*")
    .eq("place_id", id);

  if (error) {
    throw new Error(`Error fetching rating for place ID ${id}: ${error.message}`);
  }

  return data?.[0];
};

export const fetchCommendWithId = async (
  id: number
): Promise<Comment[]> => {
  const { data, error } = await supabase
    .from("optionchoices")
    .select("*")
    .eq("place_id", id);

  if (error) {
    throw new Error(`Error fetching comments for place ID ${id}: ${error.message}`);
  }

  return data ?? []; 
};