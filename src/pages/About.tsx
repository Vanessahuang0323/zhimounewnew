import { Target, Link2, Repeat, TrendingUp, CheckCircle, Compass, Smartphone, MessageSquare, Briefcase } from 'lucide-react';

export default function About() {
  const vccSteps = [
    {
      icon: Target,
      title: '探察痛點',
      description: '深入理解創作者與市場的真實需求,找出核心價值與挑戰',
      color: 'from-[#8B6F47] to-[#B8674E]',
    },
    {
      icon: Link2,
      title: '串聯需求',
      description: '連結創作者的文化價值與消費者的生活需求,找到共鳴點',
      color: 'from-[#2C5F7C] to-[#8B6F47]',
    },
    {
      icon: Repeat,
      title: '促成互動',
      description: '透過品牌設計與行銷策略,創造有意義的對話與交流',
      color: 'from-[#B8674E] to-[#D97B4A]',
    },
    {
      icon: TrendingUp,
      title: '持續調適',
      description: '根據市場反饋與數據分析,持續優化策略與執行方向',
      color: 'from-[#8B6F47] to-[#2C5F7C]',
    },
    {
      icon: CheckCircle,
      title: '達成共榮',
      description: '實現創作者、消費者與我們三方的價值共創與永續發展',
      color: 'from-[#2C5F7C] to-[#B8674E]',
    },
  ];

  const teamMembers = [
    {
      name: '張瑀軒',
      role: '品牌內容總監',
      expertise: '文化敘事 × 內容策略',
      image: '/images/team-zhangyuxuan.jpg',
    },
    {
      name: '莊閔媃',
      role: '企劃總召',
      expertise: '專案管理 × 策略規劃',
      image: '/images/zhuangminrou.jpg',
    },
    {
      name: '田蕾',
      role: '設計溝通總監',
      expertise: '視覺設計 × 品牌識別',
      image: '/images/tianlei.jpg',
    },
    {
      name: '黃毓庭',
      role: '技術總監',
      expertise: '網站建置 × 數位整合',
      image: '/images/huangyuting.jpg',
    },
    {
      name: '秦愷辰',
      role: '合作開發總監',
      expertise: '商業開發 × 夥伴關係',
      image: '/images/qinkaichen.jpg',
    },
    {
      name: '陳琮翰',
      role: '影像視覺總監',
      expertise: '攝影 × 視覺敘事',
      image: '/images/chenconghan.jpg',
    },
  ];

  const services = [
    {
      title: '品牌定位與重塑',
      description: '深入文化脈絡,提煉品牌核心價值,建立獨特的市場定位與識別系統',
      icon: Compass,
      color: 'from-[#8B6F47] to-[#B8674E]',
    },
    {
      title: '數位行銷策略',
      description: '整合社群媒體、內容行銷與數據分析,制定精準的數位推廣策略',
      icon: Smartphone,
      color: 'from-[#2C5F7C] to-[#8B6F47]',
    },
    {
      title: '社群內容經營',
      description: '創造有溫度的內容,建立品牌與消費者之間的真實連結與對話',
      icon: MessageSquare,
      color: 'from-[#B8674E] to-[#D97B4A]',
    },
    {
      title: '專案企劃執行',
      description: '從概念發想到落地執行,提供全方位的專案管理與整合服務',
      icon: Briefcase,
      color: 'from-[#8B6F47] to-[#2C5F7C]',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-[#8B6F47] via-[#B8674E] to-[#2C5F7C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-white rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">關於我們</h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white/90">
            我們相信,行銷不僅是銷售工具,更是價值的翻譯過程
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#3A3A3A] mb-6">品牌起源</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  織某行銷工作室成立的初衷,源自於我們看見了原住民文化與地方微型品牌在市場上面臨的困境。
                </p>
                <p>
                  許多充滿故事與價值的創作,因為缺乏行銷資源與市場理解,而無法被更多人看見。
                  更令人擔憂的是,文化常被簡化為符號,失去了其深層的意義與脈絡。
                </p>
                <p>
                  我們認為,<span className="text-[#8B6F47] font-medium">真正的行銷不是包裝,而是翻譯</span>
                  — 將文化的精神翻譯成市場能理解的語言,同時保持其本質與尊嚴。
                </p>
                <p>
                  透過<span className="text-[#8B6F47] font-medium">價值共創理論(VCC)</span>的實踐,
                  我們與創作者並肩而行,共同探索文化如何在當代生活中綻放新生。
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="團隊工作照"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#8B6F47] rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#B8674E] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3A3A3A] mb-4">價值共創理論</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們的核心方法論,五個步驟實現文化與市場的真實對話
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {vccSteps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#F5F3EF] rounded-full flex items-center justify-center text-[#8B6F47] font-bold text-sm">
                  {index + 1}
                </div>
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <step.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#3A3A3A] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-md">
              <Repeat className="text-[#8B6F47]" size={20} />
              <span className="text-sm text-gray-600">持續循環,共創價值</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3A3A3A] mb-4">我們的團隊</h2>
            <p className="text-lg text-gray-600">跨領域專業,一致的文化理念</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-[#F5F3EF] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#3A3A3A] mb-2">{member.name}</h3>
                  <p className="text-[#8B6F47] font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#F5F3EF] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3A3A3A] mb-4">我們的服務</h2>
            <p className="text-lg text-gray-600">從策略到執行,全方位的品牌支持</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#8B6F47]"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#3A3A3A] mb-3 group-hover:text-[#8B6F47] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#3A3A3A] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">我們看見的問題</h2>
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>原住民文化創作者常被視為「需要幫助的弱勢」,而非專業的創作者與企業家。</p>
            <p>文化商品被簡化為「紀念品」,缺乏品牌價值與市場定位。</p>
            <p>創作者缺乏行銷資源與市場理解,難以找到目標受眾。</p>
          </div>
          <div className="mt-12 pt-12 border-t border-white/20">
            <h3 className="text-3xl font-bold mb-4 text-[#D97B4A]">我們的解決方案</h3>
            <p className="text-xl text-white/90">
              不是「幫助」,而是「共創」。我們相信每位創作者都是自己文化的專家,
              我們的角色是成為橋樑,讓文化價值在市場中被正確理解與欣賞。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
