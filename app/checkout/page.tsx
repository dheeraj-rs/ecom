import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Checkout } from '@/components/Checkout';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
          <Checkout />
        </div>
      </main>
      <Footer />
    </div>
  );
}