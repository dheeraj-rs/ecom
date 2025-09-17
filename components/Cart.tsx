'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Trash2, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function Cart() {
  const { items, total, removeItem, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15.5M7 13h10m0 0v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6z" />
          </svg>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 text-base sm:text-lg mb-6">Add some beautiful furniture to get started</p>
        <Link href="/products">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.product.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6">
            <img
              src={item.product.images[0]}
              alt={item.product.name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md flex-shrink-0"
            />
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{item.product.name}</h3>
              <p className="text-gray-600">₹{item.product.price.toLocaleString()}</p>
            </div>

            <div className="flex items-center space-x-2 order-2 sm:order-none">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 sm:w-12 text-center font-medium">{item.quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-lg font-semibold order-1 sm:order-none sm:ml-auto">
              ₹{(item.product.price * item.quantity).toLocaleString()}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeItem(item.product.id)}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="p-4 sm:p-6 bg-gray-50 rounded-b-lg">
        <div className="flex justify-between items-center text-lg sm:text-xl font-bold mb-4 sm:mb-6">
          <span>Total: ₹{total.toLocaleString()}</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link href="/products" className="flex-1">
            <Button variant="outline" className="w-full order-2 sm:order-1">
              Continue Shopping
            </Button>
          </Link>
          <Link href="/checkout" className="flex-1">
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white order-1 sm:order-2">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}