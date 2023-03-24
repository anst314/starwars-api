
export async function getAllStarships() {

 const response =  await fetch("https://swapi.dev/api/starships/");
 return response;
}