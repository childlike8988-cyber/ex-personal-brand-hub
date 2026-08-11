import { assetPath } from "@/lib/assetPath";
import { ShowcaseItem } from "@/types/profile";

export const districtOptions = ["全部區域", "鼓山區", "左營區", "三民區", "苓雅區", "鳳山區"] as const;
export type District = typeof districtOptions[number];
export type AreaSearchProperty = ShowcaseItem & {
  id: string;
  district: Exclude<District, "全部區域">;
  lifestyle: string;
  rooms: number;
  livingRooms: number;
  bathrooms: number;
  ping: number;
  demoPosition: { x: number; y: number };
  image: string;
};

const realtyImage = assetPath("/images/realty/contact-sheet.png");

export const areaProperties: AreaSearchProperty[] = [
  { id: "gushan-art", title: "美術館景觀宅", district: "鼓山區", area: "美術館生活圈", lifestyle: "美術館生活圈", price: "2,880 萬", rooms: 3, livingRooms: 2, bathrooms: 2, ping: 45.62, layout: "3房 2廳 2衛", description: "高樓景觀與雙面採光，步行串連美術館綠意生活。", image: realtyImage, imagePosition: "0% 0%", tags: ["高樓景觀", "雙面採光", "近美術館"], demoPosition: { x: 34, y: 51 } },
  { id: "gushan-farm16", title: "農十六三房", district: "鼓山區", area: "農十六生活圈", lifestyle: "農十六生活圈", price: "1,980 萬", rooms: 3, livingRooms: 2, bathrooms: 2, ping: 38.25, layout: "3房 2廳 2衛", description: "成熟商圈與公園綠帶相伴，適合重視便利性的家庭。", image: realtyImage, imagePosition: "50% 0%", tags: ["明星學區", "生活機能佳", "屋況佳"], demoPosition: { x: 45, y: 38 } },
  { id: "zuoying-rail", title: "高鐵生活圈三房", district: "左營區", area: "高鐵特區", lifestyle: "高鐵特區", price: "2,360 萬", rooms: 3, livingRooms: 2, bathrooms: 2, ping: 41.8, layout: "3房 2廳 2衛", description: "高鐵、捷運與商場集結，提供靈活的城市移動節奏。", image: realtyImage, imagePosition: "100% 0%", tags: ["高鐵特區", "近捷運", "三房"], demoPosition: { x: 67, y: 25 } },
  { id: "zuoying-arena", title: "巨蛋捷運宅", district: "左營區", area: "巨蛋商圈", lifestyle: "巨蛋商圈", price: "1,760 萬", rooms: 2, livingRooms: 2, bathrooms: 1, ping: 29.4, layout: "2房 2廳 1衛", description: "商場、餐飲與捷運日常皆在步行範圍，生活便利完整。", image: realtyImage, imagePosition: "0% 50%", tags: ["巨蛋商圈", "捷運宅", "收租自住"], demoPosition: { x: 72, y: 42 } },
  { id: "sanmin-river", title: "河堤景觀兩房", district: "三民區", area: "河堤社區", lifestyle: "河堤生活圈", price: "1,280 萬", rooms: 2, livingRooms: 1, bathrooms: 1, ping: 26.7, layout: "2房 1廳 1衛", description: "面河景觀與舒適尺度，適合初次置產與簡約生活。", image: realtyImage, imagePosition: "50% 50%", tags: ["河堤景觀", "兩房", "管理佳"], demoPosition: { x: 57, y: 58 } },
  { id: "lingya-culture", title: "文化中心三房", district: "苓雅區", area: "文化中心生活圈", lifestyle: "文化中心生活圈", price: "1,680 萬", rooms: 3, livingRooms: 2, bathrooms: 1, ping: 31.6, layout: "3房 2廳 1衛", description: "文化綠廊與成熟機能交織，享受靜謐而便利的市區日常。", image: realtyImage, imagePosition: "100% 50%", tags: ["文化中心", "三房", "近百貨商圈"], demoPosition: { x: 67, y: 67 } },
  { id: "fengshan-mrt", title: "鳳山捷運宅", district: "鳳山區", area: "鳳山車站生活圈", lifestyle: "鳳山車站生活圈", price: "1,180 萬", rooms: 2, livingRooms: 2, bathrooms: 1, ping: 27.35, layout: "2房 2廳 1衛", description: "捷運與在地生活圈兼備，保有便利交通與溫暖社區感。", image: realtyImage, imagePosition: "0% 0%", tags: ["捷運宅", "近車站", "自住首選"], demoPosition: { x: 78, y: 75 } },
];
