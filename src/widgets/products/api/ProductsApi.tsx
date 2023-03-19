async function getProducts<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch {
    throw new Error();
  }
}

export default getProducts;
