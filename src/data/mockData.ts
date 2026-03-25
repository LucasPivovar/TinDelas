export interface Profile {
  id: string;
  name: string;
  age: number;
  occupation: string;
  bio: string;
  interests: string[];
  photos: string[];
  distance: number;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
}

export interface Conversation {
  id: string;
  profile: Profile;
  messages: Message[];
  lastMessage: string;
  lastMessageTime: Date;
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "Sofia",
    age: 26,
    occupation: "Fotógrafa",
    bio: "Capturo momentos que contam histórias. Amo café, gatos e pôr do sol na praia.",
    interests: ["Fotografia", "Viagens", "Café", "Arte", "Yoga"],
    photos: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1200&fit=crop",
    ],
    distance: 3,
  },
  {
    id: "2",
    name: "Luna",
    age: 24,
    occupation: "Designer",
    bio: "Criando interfaces que fazem as pessoas sorrirem. Viciada em matcha e livros de ficção científica.",
    interests: ["Design", "Tecnologia", "Matcha", "Sci-Fi", "Música"],
    photos: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop",
    ],
    distance: 5,
  },
  {
    id: "3",
    name: "Marina",
    age: 28,
    occupation: "Arquiteta",
    bio: "Desenhando espaços que inspiram. Adoro trilhas, vinho tinto e conversas profundas.",
    interests: ["Arquitetura", "Trilhas", "Vinho", "Leitura", "Cinema"],
    photos: [
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1200&fit=crop",
    ],
    distance: 8,
  },
  {
    id: "4",
    name: "Valentina",
    age: 25,
    occupation: "Chef de Cozinha",
    bio: "A vida é curta demais para comida ruim. Exploradora gastronômica e amante de mercados locais.",
    interests: ["Gastronomia", "Viagens", "Mercados", "Dança", "Natureza"],
    photos: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&h=1200&fit=crop",
    ],
    distance: 2,
  },
  {
    id: "5",
    name: "Aurora",
    age: 27,
    occupation: "Psicóloga",
    bio: "Entender pessoas é minha paixão. Meditação matinal, chá verde e caminhadas ao amanhecer.",
    interests: ["Psicologia", "Meditação", "Natureza", "Podcasts", "Culinária"],
    photos: [
      "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&h=1200&fit=crop",
    ],
    distance: 12,
  },
];

export const conversations: Conversation[] = [
  {
    id: "c1",
    profile: profiles[0],
    messages: [
      { id: "m1", senderId: "1", text: "Oi! Vi que você também ama café ☕", timestamp: new Date(Date.now() - 3600000) },
      { id: "m2", senderId: "me", text: "Sim! Qual seu tipo favorito?", timestamp: new Date(Date.now() - 3500000) },
      { id: "m3", senderId: "1", text: "Tem um café incrível no centro, precisamos ir juntas!", timestamp: new Date(Date.now() - 3400000) },
    ],
    lastMessage: "Tem um café incrível no centro, precisamos ir juntos!",
    lastMessageTime: new Date(Date.now() - 3400000),
  },
  {
    id: "c2",
    profile: profiles[1],
    messages: [
      { id: "m4", senderId: "2", text: "Adorei seu perfil! Também sou apaixonada por design 🎨", timestamp: new Date(Date.now() - 86400000) },
      { id: "m5", senderId: "me", text: "Obrigado! O que você tá projetando agora?", timestamp: new Date(Date.now() - 86300000) },
    ],
    lastMessage: "Obrigado! O que você tá projetando agora?",
    lastMessageTime: new Date(Date.now() - 86300000),
  },
  {
    id: "c3",
    profile: profiles[2],
    messages: [
      { id: "m6", senderId: "3", text: "Qual foi a última trilha que você fez?", timestamp: new Date(Date.now() - 172800000) },
    ],
    lastMessage: "Qual foi a última trilha que você fez?",
    lastMessageTime: new Date(Date.now() - 172800000),
  },
];

export const myProfile: Profile = {
  id: "me",
  name: "Bia",
  age: 26,
  occupation: "Arquiteta",
  bio: "Apaixonada por design, café e boas conversas. Sempre em busca de novas conexões e aventuras ✨",
  interests: ["Tecnologia", "Café", "Trilhas", "Música", "Cinema"],
  photos: [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1200&fit=crop",
  ],
  distance: 0,
};
