import {
  Calendar,
  Users,
  Target,
  TrendingUp,
  ShoppingBag,
  Instagram,
  Star,
  Award,
  Heart,
} from 'lucide-react';

export default function Projects() {
  const products = [
    {
      id: 1,
      name: '太魯閣圖騰杯套系列',
      image: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: '讓文化隨身攜帶',
      description: '將太魯閣族傳統圖騰融入日常使用的環保杯套,每個圖騰都有其獨特的文化意涵',
      price: 'NT$ 280-350',
      status: 'available',
    },
    {
      id: 2,
      name: '原民聯名餐具包',
      image: 'https://images.pexels.com/photos/4226774/pexels-photo-4226774.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: '環保與文化的結合',
      description: '攜帶式環保餐具組,結合太魯閣族與其他原民族群的圖騰設計,實用又具文化意義',
      price: 'NT$ 450-580',
      status: 'available',
    },
    {
      id: 3,
      name: '文創相機包系列',
      image: 'https://images.pexels.com/photos/4226878/pexels-photo-4226878.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: '為攝影師設計的文化配件',
      description: '專為攝影愛好者設計,結合功能性與文化美學的相機收納包',
      price: 'NT$ 880-1,280',
      status: 'coming-soon',
    },
    {
      id: 4,
      name: '節慶禮盒企劃',
      image: 'https://images.pexels.com/photos/4226903/pexels-photo-4226903.jpeg?auto=compress&cs=tinysrgb&w=800',
      story: '文化傳承的最佳禮物',
      description: '精心策劃的節慶禮盒,適合新年、婚禮等場合,提供客製化服務',
      price: 'NT$ 1,200 起',
      status: 'coming-soon',
    },
  ];

  const achievements = [
    { icon: TrendingUp, label: '社群觸及', value: '50,000+', color: 'bg-[#8B6F47]' },
    { icon: Users, label: '互動人次', value: '12,000+', color: 'bg-[#2C5F7C]' },
    { icon: ShoppingBag, label: '商品銷售', value: '800+', color: 'bg-[#B8674E]' },
    { icon: Award, label: '市集參展', value: '15+', color: 'bg-[#D97B4A]' },
  ];

  const testimonials = [
    {
      name: '陳小姐',
      role: '文創愛好者',
      content: '杯套的質感很好,圖騰設計很精緻,每次使用都會被問這是哪裡買的!',
      rating: 5,
    },
    {
      name: '李先生',
      role: '攝影師',
      content: '相機包不僅實用,更重要的是帶有文化故事,讓我在拍攝時有更多話題可以分享。',
      rating: 5,
    },
    {
      name: '張小姐',
      role: '企業採購',
      content: '我們公司選擇伊蔣的禮盒作為年節贈禮,客戶反應非常好,很有心意。',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-[#2C5F7C] via-[#8B6F47] to-[#B8674E] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-lg rotate-12" />
          <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-white rounded-lg -rotate-12" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <Star className="text-[#D97B4A]" size={20} />
                <span className="text-sm font-medium">精選專案</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                織脈傳承
                <br />
                伊蔣藝術工作室再生計畫
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                太魯閣族文化的當代重生,讓傳統圖騰走入現代生活
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  原民文化
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  商品設計
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  社群推廣
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/gaoxueliang-hero.jpg"
                alt="高雪亮老師在伊蔣藝術工作室"
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-[#8B6F47]" />
              <div className="text-sm text-gray-500 mb-1">專案時程</div>
              <div className="font-bold text-[#3A3A3A]">2024.08 - 2025.04</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-[#2C5F7C]" />
              <div className="text-sm text-gray-500 mb-1">合作夥伴</div>
              <div className="font-bold text-[#3A3A3A]">伊蔣藝術工作室</div>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 mx-auto mb-2 text-[#B8674E]" />
              <div className="text-sm text-gray-500 mb-1">專案類型</div>
              <div className="font-bold text-[#3A3A3A]">品牌再生 × 商品開發</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-[#D97B4A]" />
              <div className="text-sm text-gray-500 mb-1">成長率</div>
              <div className="font-bold text-[#3A3A3A]">+240%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F3EF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <img
                src="/images/image.png"
                alt="伊蔣藝術工作室"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-[#3A3A3A] mb-6">關於伊蔣藝術工作室</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <span className="text-[#8B6F47] font-medium">「伊蔣」</span>
                  在太魯閣族語中意為「陽光」,象徵著希望與生命力。
                </p>
                <p>
                  創辦人高雪亮老師來自花蓮太魯閣族,深耕原住民傳統工藝超過 30 年。
                  她的創作不僅是藝術品,更是文化的載體與傳承。
                </p>
                <p>
                  工作室專注於太魯閣族傳統編織與圖騰創作,每件作品都承載著族群的歷史、
                  神話與生活智慧。然而,如同許多原民創作者,伊蔣面臨著如何讓傳統工藝
                  走入現代市場的挑戰。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-[#3A3A3A] mb-8 text-center">專案背景與目標</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-[#8B6F47] mb-4 flex items-center">
                  <div className="w-8 h-8 bg-[#8B6F47] rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                    !
                  </div>
                  我們看見的問題
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#8B6F47] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>品牌形象模糊,缺乏市場定位</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#8B6F47] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>商品類型單一,難以觸及年輕族群</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#8B6F47] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>行銷資源有限,社群經營不足</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C5F7C] mb-4 flex items-center">
                  <div className="w-8 h-8 bg-[#2C5F7C] rounded-lg flex items-center justify-center text-white text-sm font-bold mr-3">
                    ✓
                  </div>
                  我們的介入策略
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2C5F7C] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>品牌重塑:建立清晰的品牌識別與故事</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2C5F7C] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>商品開發:設計符合現代生活的文化商品</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2C5F7C] rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>通路拓展:整合線上線下的推廣策略</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3A3A3A] mb-4">商品系列展示</h2>
            <p className="text-lg text-gray-600">讓文化在生活中自然發生</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-[#F5F3EF] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.status === 'coming-soon' && (
                    <div className="absolute top-4 right-4 px-4 py-2 bg-[#D97B4A] text-white text-sm font-medium rounded-full">
                      即將推出
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="text-[#8B6F47] font-medium mb-2 text-sm">{product.story}</div>
                  <h3 className="text-2xl font-bold text-[#3A3A3A] mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#8B6F47]">{product.price}</span>
                    <button className="px-6 py-2 bg-[#8B6F47] text-white rounded-lg hover:bg-[#B8674E] transition-colors">
                      {product.status === 'available' ? '了解更多' : '敬請期待'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#3A3A3A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">執行成果</h2>
            <p className="text-white/70 text-lg">數據說話,價值為本</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon size={32} />
                </div>
                <div className="text-3xl font-bold mb-2 text-[#D97B4A]">{item.value}</div>
                <div className="text-white/70">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-center">行銷策略亮點</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Instagram className="w-10 h-10 mb-4 text-[#D97B4A]" />
                <h4 className="font-bold mb-2">社群內容經營</h4>
                <p className="text-white/70 text-sm">
                  每週發布 3-4 則深度內容,結合圖騰故事與商品應用,提升品牌認知度
                </p>
              </div>
              <div>
                <ShoppingBag className="w-10 h-10 mb-4 text-[#D97B4A]" />
                <h4 className="font-bold mb-2">市集活動推廣</h4>
                <p className="text-white/70 text-sm">
                  參與 15+ 場文創市集,直接與消費者互動,收集第一手市場反饋
                </p>
              </div>
              <div>
                <Heart className="w-10 h-10 mb-4 text-[#D97B4A]" />
                <h4 className="font-bold mb-2">品牌故事行銷</h4>
                <p className="text-white/70 text-sm">
                  透過影像與文字,傳遞文化價值與創作理念,建立情感連結
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3A3A3A] mb-4">消費者見證</h2>
            <p className="text-lg text-gray-600">真實的聲音,最好的證明</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#F5F3EF] rounded-2xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D97B4A] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-[#3A3A3A]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#8B6F47] to-[#B8674E] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">文化影響力</h2>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            這不只是一個商業專案,更是文化永續與包容性成長的實踐。
            透過伊蔣專案,我們證明了原住民文化可以在保持真實性的同時,
            成功走入當代市場,創造經濟價值並促進文化理解。
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-2xl font-bold">
              8
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-2xl font-bold">
              11
            </div>
          </div>
          <p className="text-white/80">
            促進包容且永續的經濟成長(SDG 8)× 建構永續城鄉與文化保存(SDG 11)
          </p>
        </div>
      </section>
    </div>
  );
}
