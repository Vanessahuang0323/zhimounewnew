export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  partner: string;
  tags: string[];
  timeline: string;
  heroImage: string;
  description: string;
}

export interface ProductData {
  id: string;
  name: string;
  category: string;
  culturalStory: string;
  price: string;
  images: string[];
  status: 'available' | 'coming-soon';
}

export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  image: string;
}
