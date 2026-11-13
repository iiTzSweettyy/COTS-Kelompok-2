import axios from 'axios';
import type { ProductsResponse } from '../../types/product';

const BASE_URL = 'https://dummyjson.com/products';

export const fetchProductsApi = async (searchQuery?: string): Promise<ProductsResponse> => {
  const endpoint = searchQuery
    ? `${BASE_URL}/search?q=${encodeURIComponent(searchQuery)}`
    : `${BASE_URL}?limit=12`;

  const response = await axios.get<ProductsResponse>(endpoint);
  return response.data;
};