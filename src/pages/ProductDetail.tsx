import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getProductById } from '../data/products';

interface ProductDetailProps {
  onNavigate: (page: string) => void;
  productId?: string | null;
}

export default function ProductDetail({ onNavigate, productId }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  // 从 URL 或 props 获取 productId
  const id = productId || 'aboriginal-pouch';
  const product = getProductById(id);

  useEffect(() => {
    if (product) {
      setSelectedImage(0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#3A3A3A] mb-4">商品未找到</h2>
          <button
            onClick={() => onNavigate('products')}
            className="px-6 py-3 bg-[#8B6F47] text-white rounded-lg hover:bg-[#B8674E] transition-colors"
          >
            返回商品系列
          </button>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => onNavigate('products')}
            className="flex items-center text-[#8B6F47] hover:text-[#B8674E] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回商品系列
          </button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-6">
              <div className="bg-[#F5F3EF] rounded-2xl overflow-hidden">
                <img
                  src={images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? 'border-[#8B6F47] scale-95'
                        : 'border-transparent hover:border-[#B8674E]'
                    }`}
                  >
                    <img src={img} alt={`view-${idx}`} className="w-full h-24 object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-sm font-medium text-[#8B6F47] mb-2">{product.series}</div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mb-4">
                  {product.title}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  工藝師：<span className="font-medium text-[#3A3A3A]">{product.artist}</span>
                </p>
              </div>

              <div className="bg-[#F5F3EF] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#3A3A3A] mb-4">{product.story.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.story.description}
                </p>
              </div>

              <div className="space-y-4 pt-8 border-t">
                {product.details.slice(0, 2).map((detail, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-[#3A3A3A] mb-1">{detail.title}</h4>
                    <p className="text-gray-600">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 py-24 border-t">
            <div>
              <h2 className="text-3xl font-bold text-[#3A3A3A] mb-8">完整故事</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>{product.description}</p>
                <p>
                  每一條編織線，都是文化的延續。每一個圖騰，都是祖先的聲音。當您持有伊蔣的作品時，您不僅擁有一件精美的工藝品，更成為了文化傳承的參與者。
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#3A3A3A] mb-8">工藝細節</h2>
              <div className="space-y-6">
                {product.details.map((detail, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 border-l-4 border-[#8B6F47]">
                    <h4 className="font-bold text-[#3A3A3A] mb-2">{detail.title}</h4>
                    <p className="text-gray-600">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F3EF] border-t">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3A3A3A] mb-4">支持原住民文化</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              購買伊蔣作品，就是直接支持原住民工藝師，讓傳統工藝在現代市場中綻放光芒。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#8B6F47] mb-2">100%</div>
              <p className="text-gray-600">手工製作</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#8B6F47] mb-2">30+</div>
              <p className="text-gray-600">年工藝經驗</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#8B6F47] mb-2">永續</div>
              <p className="text-gray-600">環保材質</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
