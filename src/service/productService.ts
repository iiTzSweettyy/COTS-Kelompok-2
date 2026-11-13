import axios from 'axios';
import type { ProductsResponse } from '../../types/product';

const BASE_URL = 'https://dummyjson.com/products';

//fetching api from dummyjson
export const fetchProductsApi = async (searchQuery?: string): Promise<ProductsResponse> => {
  const endpoint = searchQuery
    ? ${BASE_URL}/search?q=${encodeURIComponent(searchQuery)}
    : ${BASE_URL}?limit=13;

  const response = await axios.get<ProductsResponse>(endpoint);
  return response.data;
};