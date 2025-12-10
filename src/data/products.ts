export interface Product {
  id: string;
  title: string;
  series: string;
  artist: string;
  image: string;
  images: string[];
  description: string;
  story: {
    title: string;
    description: string;
  };
  details: {
    title: string;
    description: string;
  }[];
}

export const products: Product[] = [
  {
    id: 'aboriginal-pouch',
    title: '太魯閣族編織束口包',
    series: '伊蔣藝術工作室',
    artist: '高雪亮',
    image: '/images/伊蔣7409612.jpg',
    images: ['/images/伊蔣7409612.jpg', '/images/伊蔣7409619.jpg', '/images/1.png'],
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
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

