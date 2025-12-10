import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';

interface ProductsProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-gradient-to-br from-[#8B6F47] via-[#B8674E] to-[#2C5F7C] text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">文化商品系列</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            每件作品都是文化的對話，每次購買都是對傳統工藝的支持
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onClick={() => onNavigate('product', product.id)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 h-96">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="space-y-3">
                  <div className="text-sm font-medium text-[#8B6F47]">{product.series}</div>
                  <h2 className="text-3xl font-bold text-[#3A3A3A] group-hover:text-[#8B6F47] transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center text-[#8B6F47] font-medium pt-4 group-hover:translate-x-2 transition-transform">
                    查看商品故事 <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    {product.story.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
