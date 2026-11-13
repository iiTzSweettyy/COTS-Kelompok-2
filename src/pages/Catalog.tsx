import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Product } from '../types/product';
import { fetchProductsApi } from '../service/productService';
import { useDebounce } from '../hooks/useDebounce';
import { ProductCard } from '../components/Card';
import { ProductDetailModal } from '../components/DetailModal';
import { ProductSkeleton } from '../components/Skeleton';

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(searchQuery.trim(), 400);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProductsApi(debouncedQuery);
      setProducts(data.products);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.message || 'Gagal terhubung ke server API.');
      } else {
        setError('Terjadi kesalahan yang tidak diketahui.');
      }
    } finally {
      setLoading(false);
    }
  }, [debouncedQuery]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Katalog Produk
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Temukan berbagai produk terbaik dari DummyJSON API
            </p>
          </div>

          <div className="relative w-full sm:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari produk (misal: phone, laptop)..."
              className="w-full pl-4 pr-10 py-2.5 text-sm bg-gray-100 border border-transparent focus:bg-white focus:border-indigo-500 rounded-xl outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {loading && <ProductSkeleton count={8} />}

        {!loading && error && (
          <div className="max-w-md mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-2xl text-center">
            <p className="text-red-700 font-bold text-lg">Oops! Terjadi Kesalahan</p>
            <p className="text-red-600 text-sm mt-1">{error}</p>
            <button
              onClick={loadProducts}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="max-w-md mx-auto my-16 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-xl font-bold text-gray-800">Produk Tidak Ditemukan</h2>
            <p className="text-gray-500 text-sm mt-1">
              Tidak ada hasil yang cocok untuk pencarian{' '}
              <span className="font-semibold">"{debouncedQuery}"</span>.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-semibold underline cursor-pointer"
            >
              Reset Pencarian
            </button>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <>
            <p className="text-sm text-gray-500 mb-4">
              Menampilkan{' '}
              <span className="font-semibold text-gray-800">{products.length}</span>{' '}
              produk
              {debouncedQuery && (
                <>
                  {' '}
                  untuk hasil pencarian{' '}
                  <span className="font-semibold text-indigo-600">
                    "{debouncedQuery}"
                  </span>
                </>
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  onSelect={(prod) => setSelectedProduct(prod)}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}