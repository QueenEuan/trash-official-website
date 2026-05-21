export type Member = {
  slug: string;
  name: string;
  englishName: string;
  role: string;
  intro: string;
  bio: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
  imageTodo: string;
  instruments: string[];
  highlights: string[];
  notes: string[];
};

export const members: Member[] = [
  {
    slug: "marz23",
    name: "阿夜",
    englishName: "Marz23",
    role: "Vocal / Guitar",
    intro: "阿夜 / Marz23 stands at the center of TRASH as vocalist, guitarist, and a key creative voice.",
    bio: "阿夜 / Marz23 stands at the center of TRASH as vocalist, guitarist, and a key creative voice. His performance connects the band’s emotional directness with the force of its live shows.",
    image: "/images/members/marz.jpg",
    fallbackImage: "/images/members/aye.svg",
    imageAlt: "阿夜 / Marz23 official TRASH member portrait",
    imageTodo: "Official first-batch portrait integrated. TODO: confirm final usage credit and crop approval.",
    instruments: ["Vocal", "Guitar"],
    highlights: ["Current member of TRASH", "Role draft: Vocal / Guitar", "TODO: confirm official source for full member bio, personal credits, and social links."],
    notes: ["TODO: confirm official source for full member bio, preferred role text, personal credits, and social links."],
  },
  {
    slug: "euan",
    name: "頤原",
    englishName: "Euan",
    role: "Guitar",
    intro: "頤原 / Euan shapes the guitar architecture of TRASH, giving the band its melodic edge and atmospheric lift.",
    bio: "頤原 / Euan shapes the guitar architecture of TRASH, giving the band its melodic edge, atmospheric lift, and live-stage pressure.",
    image: "/images/members/euan.jpg",
    fallbackImage: "/images/members/lin.svg",
    imageAlt: "頤原 / Euan official TRASH member portrait",
    imageTodo: "Official first-batch portrait integrated. TODO: confirm final usage credit and crop approval.",
    instruments: ["Guitar"],
    highlights: ["Current member of TRASH", "Role draft: Guitar", "TODO: confirm official source for full member bio, personal credits, and social links."],
    notes: ["TODO: confirm official source for full member bio, preferred role text, personal credits, and social links."],
  },
  {
    slug: "tteng",
    name: "博文",
    englishName: "TTeng",
    role: "Bass",
    intro: "博文 / TTeng anchors TRASH with bass lines that hold the band’s weight, movement, and rhythm-section impact.",
    bio: "博文 / TTeng anchors TRASH with bass lines that hold the band’s weight, movement, and rhythm-section impact.",
    image: "/images/members/tteng.jpg",
    fallbackImage: "/images/members/bo.svg",
    imageAlt: "博文 / TTeng official TRASH member portrait",
    imageTodo: "Official first-batch portrait integrated. TODO: confirm final usage credit and crop approval.",
    instruments: ["Bass"],
    highlights: ["Current member of TRASH", "Role draft: Bass", "TODO: confirm official source for full member bio, personal credits, and social links."],
    notes: ["TODO: confirm official source for full member bio, preferred role text, personal credits, and social links."],
  },
  {
    slug: "kuei-gun",
    name: "魁剛",
    englishName: "Kuei gun",
    role: "Drums",
    intro: "魁剛 / Kuei gun drives TRASH from the drums, giving the songs their physical push and live momentum.",
    bio: "魁剛 / Kuei gun drives TRASH from the drums, giving the songs their physical push, live momentum, and dynamic escalation.",
    image: "/images/members/kuei-gun.jpg",
    fallbackImage: "/images/members/keng.svg",
    imageAlt: "魁剛 / Kuei gun official TRASH member portrait",
    imageTodo: "Official first-batch portrait integrated. TODO: confirm final usage credit and crop approval.",
    instruments: ["Drums"],
    highlights: ["Current member of TRASH", "Role draft: Drums", "TODO: confirm official source for full member bio, personal credits, and social links."],
    notes: ["TODO: confirm official source for full member bio, preferred role text, personal credits, and social links."],
  },
];
