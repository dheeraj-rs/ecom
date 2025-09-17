import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductDetail } from '@/components/ProductDetail';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}