import { Profile } from "@/types/profile";
import { assetPath } from "@/lib/assetPath";

const services = (exposure: string, contact: string): Profile["services"] => ({
  title: "專業服務，為每個細節把關",
  cards: [
    { title: "專業諮詢", description: "先理解需求，再給出清楚建議。", icon: "✦" },
    { title: exposure, description: "聚焦重點內容，提升被看見的機會。", icon: "◈" },
    { title: "影音整合", description: "以一致的視覺，讓內容更有記憶點。", icon: "▷" },
    { title: contact, description: "縮短等待時間，保留每次重要互動。", icon: "●" },
  ],
});

export const profiles: Record<Profile["type"], Profile> = {
  realty: {
    type: "realty", label: "房仲業", eyebrow: "Personal Brand Website", isDemo: true,
    nav: ["首頁", "精選物件", "區域找房", "房貸試算", "關於我", "聯絡"],
    hero: {
      title: ["打造專屬個人的", "房仲品牌頁"], subtitle: "個人品牌 × 物件展示 × 專業服務",
      description: "建立專屬數位名片，整合物件展示、房貸試算與快速聯絡，讓客戶更快認識專業服務。",
      primaryCta: "立即諮詢", secondaryCta: "查看物件", visualTitle: "精選好宅", visualBody: "為您找到理想的家",
    },
    person: { name: "Ernest 周先生", role: "房地產顧問 / 不動產服務", area: "台北市・新北市・桃園市", line: "@ex.realtor", phone: "0912-345-678", email: "ernest@exrealtor.com", note: "值得信賴・用心服務", image: assetPath("/images/profile/demo-agent.jpg") },
    showcase: {
      title: "精選物件", allLabel: "查看全部物件", bookingLabel: "預約看屋", cards: [
        { title: "明亮景觀兩房", location: "新北市・捷運步行約 8 分鐘", layout: "2房 1廳 1衛", area: "28.6坪", description: "採光通透的舒適兩房，兼具生活機能與安靜視野。", price: "1,680 萬", imagePosition: "0% 0%", tags: ["採光佳", "近捷運", "高樓景觀"] },
        { title: "捷運三房", location: "台北市・成熟生活圈", layout: "3房 2廳 2衛", area: "42.3坪", description: "格局方正、動線流暢，為家庭生活保留更多彈性。", price: "2,680 萬", imagePosition: "50% 0%", tags: ["三房", "機能佳", "電梯大樓"] },
        { title: "市區景觀宅", location: "桃園市・市心景觀", layout: "3房 2廳 2衛", area: "45.7坪", description: "以寬闊客餐廳迎接日常，收藏城市天際線。", price: "2,350 萬", imagePosition: "100% 0%", tags: ["市中心", "景觀", "大客廳"] },
      ],
    },
    services: services("物件曝光", "LINE 聯繫"),
    modules: ["區域找房", "實價登錄", "社區地圖", "預約看屋", "生活機能", "影音", "更多功能"],
  },
  generic: {
    type: "generic", label: "通用行業", eyebrow: "Food & Lifestyle Demo", isDemo: true,
    nav: ["首頁", "精選推薦", "服務", "關於我", "聯絡"],
    hero: {
      title: ["打造專屬個人的", "行銷品牌頁"], subtitle: "個人品牌 × 商品展示 × 專業服務",
      description: "將品牌、商品與服務集中呈現，建立更完整、更容易被記住的個人數位門面。",
      primaryCta: "立即諮詢", secondaryCta: "查看展示", visualTitle: "精選美味", visualBody: "為您打造難忘體驗",
    },
    person: { name: "Ernest 周先生", role: "品牌顧問 / 行銷服務", area: "高雄市・新北市・台中市", line: "@ex.marketing", phone: "0912-345-678", email: "ernest@exmarketing.com", note: "品牌策略・用心服務", image: assetPath("/images/profile/demo-agent.jpg") },
    showcase: {
      title: "精選推薦", allLabel: "查看全部展示", bookingLabel: "立即訂位", cards: [
        { title: "炙燒頂級肋眼牛排", description: "嚴選熟成、香煎醬汁，肉質鮮嫩。", price: "NT$1,680", imagePosition: "0% 0%", tags: ["主廚推薦", "熟成牛排", "晚餐限定"] },
        { title: "松露干貝燉飯", description: "義大利米、松露香氣，濃郁滑順。", price: "NT$980", imagePosition: "50% 0%", tags: ["松露", "海鮮", "人氣推薦"] },
        { title: "法式熔岩巧克力", description: "濃郁巧克力，外酥內濃，甜而不膩。", price: "NT$480", imagePosition: "100% 0%", tags: ["甜點", "手工製作", "招牌"] },
      ],
    },
    services: services("品牌曝光", "快速聯繫"),
    modules: ["預約系統", "車貸試算", "商品管理", "LINE 串接", "影音", "更多功能"],
  },
};
