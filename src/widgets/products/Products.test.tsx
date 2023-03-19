import getProducts from './api/ProductsApi';

describe('test api', () => {
  it('should return first item', async () => {
    const mockResponse = new Response(
      JSON.stringify({
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 },
      })
    );

    const mockFetchPromise = Promise.resolve(mockResponse);
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const result = await getProducts('https://fakestoreapi.com/products/1');

    expect(result).toEqual({
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: { rate: 3.9, count: 120 },
    });
  });
});
