import { Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3A3A3A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#8B6F47] to-[#B8674E] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">織</span>
              </div>
              <span className="text-xl font-bold">織某行銷工作室</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              文化價值的翻譯與共創者
              <br />
              讓每個故事都能被看見、被理解、被喜愛
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[#D97B4A]">快速連結</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  關於我們
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  合作專案
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  服務項目
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  聯絡我們
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[#D97B4A]">追蹤我們</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.instagram.com/kuxul_select?igsh=OTZkYXZtc294czZs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#8B6F47] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#8B6F47] transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#8B6F47] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-white/70 text-sm">
              <span className="block mb-1">Instagram: 品牌內容與視覺</span>
              <span className="block">Threads: 文化對話與互動</span>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>© 2024 織某行銷工作室 Weaving Marketing Studio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              隱私權政策
            </a>
            <a href="#" className="hover:text-white transition-colors">
              使用條款
            </a>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center space-x-4">
          <span className="text-white/50 text-xs">促進永續發展目標</span>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-[#8B6F47] rounded flex items-center justify-center text-xs font-bold">
              8
            </div>
            <div className="w-8 h-8 bg-[#B8674E] rounded flex items-center justify-center text-xs font-bold">
              11
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
