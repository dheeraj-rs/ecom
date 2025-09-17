import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductListing } from '@/components/ProductListing';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Collection</h1>
            <p className="text-lg text-gray-600">Discover our full range of handcrafted furniture and woodwork pieces</p>
          </div>
          <ProductListing />
        </div>
      </main>
      <Footer />
    </div>
  );
}