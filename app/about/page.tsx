import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Royalwood Industry</h1>
            <p className="text-xl text-gray-600">Crafting Excellence Since 1985</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/5974257/pexels-photo-5974257.jpeg" 
                alt="Craftsman working on furniture" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                For nearly four decades, Royalwood Industry has been synonymous with exceptional craftsmanship and timeless design. 
                What began as a small family workshop has grown into a renowned furniture manufacturer, yet we've never lost sight of our core values.
              </p>
              <p className="text-gray-600">
                Each piece we create tells a story of dedication, skill, and passion for the craft. We source only the finest materials and employ time-honored techniques passed down through generations of master craftsmen.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Quality</h3>
                <p className="text-gray-600">We never compromise on materials or craftsmanship</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Sustainability</h3>
                <p className="text-gray-600">Responsibly sourced materials and eco-friendly practices</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Heritage</h3>
                <p className="text-gray-600">Preserving traditional techniques while embracing innovation</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience Our Craftsmanship?</h2>
            <p className="text-gray-600 mb-8">Explore our collection and discover furniture that will last for generations.</p>
            <Link href="/products">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                View Our Collection
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}