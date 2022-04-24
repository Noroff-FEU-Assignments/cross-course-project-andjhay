const url = "https://andrewhay.no/Noroff/rainydays/wp-json/wc/store/products/";

async function getProducts() {
  // fetch
  const response = await fetch(url);
  const results = await response.json();
  return results;
}

export const products = await getProducts();
