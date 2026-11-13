import React from 'react';

interface ProductSkeletonProps {
  count?: number;
}

export const ProductSkeleton: React.FC<ProductSkeletonProps> = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 border border-gray-100 animate-pulse"
        >
          <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
          <div className="h-8 bg-gray-200 rounded w-full mt-4"></div>
        </div>
      ))}
    </div>
  );
};