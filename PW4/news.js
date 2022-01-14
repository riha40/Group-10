const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=4a90e53c4797486787e87a8d09819412";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
