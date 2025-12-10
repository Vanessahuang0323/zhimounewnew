import { ArrowRight, Heart, Users, Sparkles, TrendingUp, Award, Globe } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#2C5F7C] via-[#8B6F47] to-[#B8674E]"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            織脈傳承,共創文化新生
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto whitespace-nowrap">
            我們是文化與市場之間的橋樑,讓每一個故事都能被看見、被理解、被喜愛
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 bg-white text-[#8B6F47] font-medium rounded-lg hover:bg-[#F5F3EF] transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>探索我們的理念</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#8B6F47] transition-all hover:scale-105"
            >
              查看合作專案
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3A3A3A] mb-4">品牌精神</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們不只是行銷公司,更是文化價值的翻譯者與共創夥伴
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-[#F5F3EF] hover:bg-[#8B6F47] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="text-[#8B6F47]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#3A3A3A] group-hover:text-white transition-colors">
                理解者
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                深入文化脈絡,尊重每個創作的起源。我們相信真正的理解是共創的起點。
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-[#F5F3EF] hover:bg-[#2C5F7C] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-[#2C5F7C]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#3A3A3A] group-hover:text-white transition-colors">
                協作者
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                與創作者共同設計,實踐價值共創。每個專案都是平等對話的成果。
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-[#F5F3EF] hover:bg-[#B8674E] transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="text-[#B8674E]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#3A3A3A] group-hover:text-white transition-colors">
                翻譯者
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                將文化精神轉化為市場語言,讓價值在生活中自然發生。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#F5F3EF] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3A3A3A] mb-4">專案精選</h2>
            <p className="text-lg text-gray-600">深入文化,創造價值</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <button
              onClick={() => onNavigate('projects')}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="伊蔣藝術工作室"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#F5F3EF] text-[#8B6F47] text-sm rounded-full">
                    原民文化
                  </span>
                  <span className="px-3 py-1 bg-[#F5F3EF] text-[#2C5F7C] text-sm rounded-full">
                    商品設計
                  </span>
                  <span className="px-3 py-1 bg-[#F5F3EF] text-[#B8674E] text-sm rounded-full">
                    社群推廣
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#3A3A3A] group-hover:text-[#8B6F47] transition-colors">
                  織脈傳承:伊蔣藝術工作室再生計畫
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  太魯閣族文化的當代重生,透過品牌重塑與商品設計,讓傳統圖騰走入現代生活
                </p>
                <div className="flex items-center text-[#8B6F47] font-medium">
                  <span>了解更多</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
            </button>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#8B6F47] to-[#B8674E] text-white p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">與我們共創下一個專案</h3>
              <p className="text-white/90 leading-relaxed mb-8 text-lg">
                我們正在尋找更多原住民創作者、地方品牌與文化工作者。如果你有故事想說,我們願意成為最好的聆聽者與共創夥伴。
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="self-start px-8 py-4 bg-white text-[#8B6F47] font-medium rounded-lg hover:bg-[#F5F3EF] transition-all hover:scale-105 flex items-center space-x-2"
              >
                <span>開始對話</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#3A3A3A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">我們的成果</h2>
            <p className="text-white/70 text-lg">用數據說話,以價值為本</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#8B6F47] rounded-xl flex items-center justify-center">
                <Users size={32} />
              </div>
              <div className="text-4xl font-bold mb-2 text-[#D97B4A]">5+</div>
              <div className="text-white/70">合作品牌</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#2C5F7C] rounded-xl flex items-center justify-center">
                <TrendingUp size={32} />
              </div>
              <div className="text-4xl font-bold mb-2 text-[#D97B4A]">50K+</div>
              <div className="text-white/70">社群觸及</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#B8674E] rounded-xl flex items-center justify-center">
                <Award size={32} />
              </div>
              <div className="text-4xl font-bold mb-2 text-[#D97B4A]">12+</div>
              <div className="text-white/70">商品系列</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#8B6F47] rounded-xl flex items-center justify-center">
                <Globe size={32} />
              </div>
              <div className="text-4xl font-bold mb-2 text-[#D97B4A]">8+</div>
              <div className="text-white/70">文化活動</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-[#8B6F47] rounded-lg flex items-center justify-center text-white text-2xl font-bold">
              8
            </div>
            <div className="w-16 h-16 bg-[#B8674E] rounded-lg flex items-center justify-center text-white text-2xl font-bold">
              11
            </div>
          </div>
          <h2 className="text-3xl font-bold text-[#3A3A3A] mb-4">永續發展承諾</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            我們的每個專案都致力於促進包容且永續的經濟成長(SDG 8),
            打造永續城鄉與文化保存(SDG 11)。文化不應只存在於博物館,
            而應在生活中持續創造價值。
          </p>
        </div>
      </section>
    </div>
  );
}
