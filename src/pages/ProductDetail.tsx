import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface ProductDetailProps {
  onNavigate: (page: string) => void;
}

export default function ProductDetail({ onNavigate }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = ['/images/1.png', '/images/2.png', '/images/3.png'];

  const product = {
    id: 'aboriginal-pouch',
    title: '太魯閣族編織束口包',
    series: '伊蔣藝術工作室',
    artist: '高雪亮',
    description:
      '伊蔣藝術工作室由太魯閣族工藝師高雪亮老師創立，長年扎根宜蘭，以族群圖騰與傳統拼布工藝為底蘊。老師用雙手縫出對土地與文化的情感，讓每件作品都成為一段被生活擁抱的故事。',
    story: {
      title: '祖靈之眼',
      description:
        '包身的菱格紋，是太魯閣族最具代表性的圖騰——「祖靈之眼」，象徵祖先的眼睛持續守護著族人，提醒人們誠實、端正。',
    },
    details: [
      {
        title: '工藝技法',
        description: '手工縫製，採用傳統太魯閣族拼布工藝',
      },
      {
        title: '材質',
        description: '100% 天然棉布，環保永續',
      },
      {
        title: '設計',
        description: '融合族群圖騰與現代審美，每件獨特',
      },
      {
        title: '故事',
        description: '每件作品都承載太魯閣族的歷史與智慧',
      },
    ],
  };

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
