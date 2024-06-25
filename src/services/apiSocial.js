import supabase from "./supabase";

export async function getSocial() {
  let { data, error } = await supabase.from("social").select("*");
  if (error) {
    console.error(error);
    throw new Error("Social images could not loaded");
  }
  return data;
}
