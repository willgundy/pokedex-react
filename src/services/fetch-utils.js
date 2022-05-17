export async function getPokemon(filter) {
  const response = await fetch(`/.netlify/functions/pokemon?filter=${filter}`);
  const data = await response.json();

  return data;
}