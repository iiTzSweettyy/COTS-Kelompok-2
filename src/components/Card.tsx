import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(product)}
      className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
    >
      <div>
        <div className="relative h-48 bg-gray-50 p-4 flex items-center justify-center overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {product.discountPercentage > 0 && (
            <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              -{Math.round(product.discountPercentage)}%
            </span>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="uppercase font-semibold tracking-wider text-indigo-600">
              {product.category}
            </span>
            <span className="text-amber-500 font-semibold">
              ★ {product.rating.toFixed(1)}
            </span>
          </div>

          <h3 className="text-base font-bold text-gray-800 line-clamp-1 group-hover:text-indigo-600 transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>

      <div className="p-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
          Lihat Detail
        </span>
      </div>
    </div>
  );
};