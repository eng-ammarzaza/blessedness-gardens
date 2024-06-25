import supabase from "./supabase";

export async function createGuest(newGuest) {
  const id = Math.floor(Math.random() * (3000 - 100 + 1));
  console.log(id);
  const { error } = await supabase.from("guests").insert([{ ...newGuest, id }]);
  if (error) {
    console.error(error);
    throw new Error("Failed to add guest");
  }
}
