import supabase from "./supabase";

export async function getHero() {
  const { data, error } = await supabase
    .from("backgrounds")
    .select()
    .eq("name", "herovid");

  if (error) throw new Error(error?.message);
  return data;
}
export async function getAround() {
  const { data, error } = await supabase
    .from("backgrounds")
    .select()
    .neq("name", "herovid");

  if (error) throw new Error(error?.message);
  return data;
}
