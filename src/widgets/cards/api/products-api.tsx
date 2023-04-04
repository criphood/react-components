async function getProducts(url: string) {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export default getProducts;
