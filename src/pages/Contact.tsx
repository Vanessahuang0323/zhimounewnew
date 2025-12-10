import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    type: 'general',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mjkjqrkd';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const botField = (target.querySelector('input[name="bot-field"]') as HTMLInputElement | null)?.value;

    if (botField) {
      return;
    }

    if (!formspreeEndpoint) {
      setStatus('error');
      setErrorMessage('尚未設定 Formspree endpoint, 請先於 .env 填入 VITE_FORMSPREE_ENDPOINT。');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('type', formData.type);
    payload.append('message', formData.message);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Formspree submission failed');
      }

      setStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      setStatus('error');
      setErrorMessage('訊息送出失敗,請稍後再試或直接來信 yutingh88@gmail.com。');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 bg-gradient-to-br from-[#8B6F47] via-[#B8674E] to-[#2C5F7C] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-96 h-96 border-2 border-white rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">聯絡我們</h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            準備好開始你的文化共創之旅了嗎?讓我們一起對話
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#3A3A3A] mb-6">與我們開始對話</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                無論你是原住民創作者、地方品牌經營者,或是對文化行銷有興趣的夥伴,
                我們都很樂意與你交流。請填寫表單,我們會在 2 個工作天內回覆。
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F5F3EF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#8B6F47]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3A3A3A] mb-1">Email</h3>
                    <a
                      href="mailto:contact@weaving-studio.com"
                      className="text-gray-600 hover:text-[#8B6F47] transition-colors"
                    >
                      contact@weaving-studio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F5F3EF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#8B6F47]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3A3A3A] mb-1">電話</h3>
                    <a
                      href="tel:+886912345678"
                      className="text-gray-600 hover:text-[#8B6F47] transition-colors"
                    >
                      +886 912-345-678
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F5F3EF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#8B6F47]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#3A3A3A] mb-1">工作室</h3>
                    <p className="text-gray-600">台北市大安區文化創意園區</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F3EF] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#3A3A3A] mb-4">追蹤我們的社群</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  想更了解我們的日常工作與文化觀察?歡迎在社群媒體上與我們互動
                </p>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/kuxul_select?igsh=OTZkYXZtc294czZs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <Instagram className="text-[#8B6F47]" size={24} />
                      <div>
                        <div className="font-medium text-[#3A3A3A] group-hover:text-[#8B6F47] transition-colors">
                          Instagram
                        </div>
                        <div className="text-xs text-gray-500">品牌內容與視覺分享</div>
                      </div>
                    </div>
                    <span className="text-[#8B6F47] text-sm font-medium">關注</span>
                  </a>

                  <a
                    href="https://www.threads.com/@kuxul_select?igshid=NTc4MTIwNjQ2YQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="text-[#2C5F7C]" size={24} />
                      <div>
                        <div className="font-medium text-[#3A3A3A] group-hover:text-[#2C5F7C] transition-colors">
                          Threads
                        </div>
                        <div className="text-xs text-gray-500">文化對話與社群互動</div>
                      </div>
                    </div>
                    <span className="text-[#2C5F7C] text-sm font-medium">關注</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F3EF] rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-[#3A3A3A] mb-6">聯絡表單</h3>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-[#8B6F47] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-white" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#3A3A3A] mb-3">訊息已送出!</h4>
                  <p className="text-gray-600">
                    感謝你的來信,我們會盡快回覆你
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} name="contact" className="space-y-6">
                  <div className="hidden" aria-hidden="true">
                    <label>
                      請勿填寫此欄位
                      <input type="text" name="bot-field" />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#3A3A3A] mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
                      placeholder="請輸入你的姓名"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#3A3A3A] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#3A3A3A] mb-2">
                      電話
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
                      placeholder="0912-345-678"
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-[#3A3A3A] mb-2">
                      訊息類型 *
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all"
                    >
                      <option value="general">一般諮詢</option>
                      <option value="collaboration">品牌合作洽詢</option>
                      <option value="product">商品購買諮詢</option>
                      <option value="media">媒體採訪</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#3A3A3A] mb-2">
                      訊息內容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent transition-all resize-none"
                      placeholder="請告訴我們你想了解或合作的內容..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-[#8B6F47] text-white font-medium rounded-lg hover:bg-[#B8674E] transition-all hover:scale-[1.02] flex items-center justify-center space-x-2 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    <span>{status === 'submitting' ? '送出中...' : '送出訊息'}</span>
                    <Send size={20} />
                  </button>
                  {status === 'error' && (
                    <p className="text-center text-sm text-red-600">{errorMessage}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#F5F3EF] to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#8B6F47] to-[#B8674E] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">誠徵合作夥伴</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              我們正在尋找更多原住民創作者、地方品牌與文化工作者。
              如果你有故事想說,我們願意成為最好的聆聽者與共創夥伴。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
                原住民創作者
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
                地方品牌經營者
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
                文化工作者
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
