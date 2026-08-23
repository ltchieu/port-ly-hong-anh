// Dynamically import all images under assets/image/V_Lotus using Vite import.meta.glob
const vLotusImagesGlob = import.meta.glob<string>(
  '../../assets/image/V_Lotus/*.webp',
  { eager: true, import: 'default' }
);

export const getVLotusImage = (filename: string): string => {
  const matchKey = Object.keys(vLotusImagesGlob).find(key => key.endsWith(filename));
  return matchKey ? vLotusImagesGlob[matchKey] : '';
};

export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
  icon: string;
}

export interface SEOArticle {
  id: string;
  title: string;
  category: string;
  rankingKeyword: string;
  image: string;
  excerpt: string;
  tags: string[];
}

export interface BrandFanpage {
  id: string;
  brandName: string;
  cuisineType: string;
  badge: string;
  description: string;
  coverImage: string;
  posts: {
    id: string;
    title: string;
    image: string;
    category: string;
    description: string;
    tags: string[];
  }[];
}

export interface VideoProductionItem {
  id: string;
  brandName: string;
  title: string;
  role: string;
  stats: {
    views: string;
    likes: string;
    shares: string;
  };
  highlight: string;
  description: string;
  image: string;
  tags: string[];
}

export interface VLotusData {
  companyName: string;
  parentGroup: string;
  roleTitle: string;
  period: string;
  overview: {
    description: string;
    scale: string;
    brands: string[];
    focus: string;
  };
  keyMetrics: MetricItem[];
  seoPillar: {
    title: string;
    overview: string;
    articleCount: string;
    topKeywords: string[];
    articles: SEOArticle[];
  };
  fanpagePillar: {
    title: string;
    overview: string;
    growthStats: {
      reach: string;
      facebook: string;
      instagram: string;
      tiktok: string;
    };
    brands: BrandFanpage[];
  };
  videoPillar: {
    title: string;
    overview: string;
    videos: VideoProductionItem[];
  };
}

export const vLotusData: VLotusData = {
  companyName: "V Lotus Holdings JSC",
  parentGroup: "Lotus Group (F&B Division)",
  roleTitle: "Marketing Executive / Content & SEO Specialist",
  period: "Project 2",
  overview: {
    description: "V Lotus Holdings JSC (F&B Division) is a prominent member of Lotus Group, specializing in the culinary, dining, and lifestyle sectors. To date, the enterprise operates over 35 premium restaurants across Vietnam, featuring leading Japanese franchise and specialty brands including Marukame Udon, Coco Ichibanya, Yoshinoya, Ussina Snow Aging Beef, Ushi Mania, Conservo Bakery, and Tenku – Japanese Modern Kaiseki & Bar.",
    scale: "35+ Restaurants Nationwide",
    brands: [
      "Conservo Bakery & Cafe",
      "Yoshinoya Beef Bowl",
      "Ussina Snow Aging Beef",
      "Tenku Modern Kaiseki",
      "Marukame Udon",
      "Coco Ichibanya Curry",
      "Ushi Mania",
    ],
    focus: "Japanese Franchise Hospitality & F&B Marketing",
  },
  keyMetrics: [
    {
      label: "SEO Optimized Articles",
      value: "35+",
      subtext: "Top Google Rankings on High-Intent Keywords",
      icon: "fa-solid fa-magnifying-glass",
    },
    {
      label: "Top Campaign Organic Reach",
      value: "425,000+",
      subtext: "1,500+ Likes & 52 Shares on Single Post",
      icon: "fa-solid fa-fire",
    },
    {
      label: "Video Views (Conservo & Yoshinoya)",
      value: "225,000+",
      subtext: "120K+ (Conservo) + 105K+ (Yoshinoya)",
      icon: "fa-solid fa-play",
    },
    {
      label: "6-Month Social Growth",
      value: "+2,050",
      subtext: "1.3K+ FB, 250+ IG, 500+ TikTok across brands",
      icon: "fa-solid fa-arrow-trend-up",
    },
  ],
  seoPillar: {
    title: "2.1. SEO Content & Digital Research",
    overview: "Established over 35 SEO-optimized Vietnamese website articles covering signature dining products, culinary trends, and Japanese culinary insights. Conducted deep visual and informational research ensuring culinary authenticity, earning top search positions for competitive keywords.",
    articleCount: "35+ In-Depth Articles",
    topKeywords: ["nhà hàng bò Wagyu", "bò Wagyu ủ tuyết", "ẩm thực Nhật Bản cao cấp", "bánh mì Nhật Bản Conservo"],
    articles: [
      {
        id: "seo-art-1",
        title: "The Art of Snow-Aged Wagyu Beef (Bò Wagyu Ủ Tuyết Niigata)",
        category: "Culinary Heritage & Science",
        rankingKeyword: "Top 1: Bò Wagyu ủ tuyết",
        image: getVLotusImage("v_lotus_img_05.webp"),
        excerpt: "Exploring the traditional 200-year-old Yukimuro snow preservation method from Niigata prefecture that transforms Wagyu beef into unmatched melt-in-mouth tenderness.",
        tags: ["SEO Top 1", "Wagyu Research", "Ussina", "Culinary Culture"],
      },
      {
        id: "seo-art-2",
        title: "Guide to Premium Japanese Wagyu Dining Experiences in HCMC",
        category: "Restaurant Guide & Lifestyle",
        rankingKeyword: "Top 3: Nhà hàng bò Wagyu",
        image: getVLotusImage("v_lotus_img_06.webp"),
        excerpt: "Curated gastronomic guide highlighting sensory marbling scores, table-side grilling etiquette, and pairing notes at Landmark 81.",
        tags: ["SEO Guide", "Fine Dining", "Google Ranking", "Brand Authority"],
      },
      {
        id: "seo-art-3",
        title: "Artisanal Japanese Baking Craftsmanship at Conservo Bakery",
        category: "Bakery & Cafe Spotlight",
        rankingKeyword: "Top Search: Bánh mì Nhật Conservo",
        image: getVLotusImage("v_lotus_img_07.webp"),
        excerpt: "Behind-the-scenes look at authentic Kobe dough fermentation techniques, natural leaven, and freshly baked sweet & savory pastries.",
        tags: ["Conservo", "Bakery Craft", "Product Storytelling", "SEO Content"],
      },
    ],
  },
  fanpagePillar: {
    title: "2.2. Multi-Brand Social Media Content Strategy",
    overview: "Monthly content planning and execution across Facebook, TikTok, and Websites for Conservo, Ussina, and Yoshinoya. Gained 1,300+ Facebook followers, 250+ Instagram followers, and 500+ TikTok followers within 6 months. Highest-performing post reached 425K+ reach, 1,500+ likes, 52 shares, and 35 comments.",
    growthStats: {
      reach: "425,000+ Peak Reach",
      facebook: "+1,300 Followers",
      instagram: "+250 Followers",
      tiktok: "+500 Followers",
    },
    brands: [
      {
        id: "fanpage-conservo",
        brandName: "Conservo Bakery & Cafe",
        cuisineType: "Japanese Artisan Bakery (Kobe Heritage)",
        badge: "Bakery & Lifestyle",
        description: "Crafted aesthetic daily bakery posts, morning breakfast combos, seasonal pastry releases, and cozy lifestyle imagery capturing Japanese minimalism.",
        coverImage: getVLotusImage("v_lotus_img_13.webp"),
        posts: [
          {
            id: "con-1",
            title: "Fresh Baked Croissants & Signature Shokupan Bread Daily",
            image: getVLotusImage("v_lotus_img_14.webp"),
            category: "Product Spotlight",
            description: "Highlighting buttery layers and soft cloud-like crumb texture baked fresh every 2 hours.",
            tags: ["Artisan Bread", "Morning Habit", "Kobe Bakery"],
          },
          {
            id: "con-2",
            title: "Afternoon Tea Combo: Matcha Pastries & Cold Brew",
            image: getVLotusImage("v_lotus_img_15.webp"),
            category: "Combo Offer",
            description: "Promoting dine-in afternoon relaxation moments for office workers and young couples.",
            tags: ["Afternoon Tea", "Special Combo", "Cozy Vibes"],
          },
          {
            id: "con-3",
            title: "Seasonal Fruit Danish Collection & Sweet Delights",
            image: getVLotusImage("v_lotus_img_16.webp"),
            category: "Seasonal Menu",
            description: "Vibrant visual layout highlighting fresh seasonal berries on crisp pastry crust.",
            tags: ["Seasonal", "Fruit Danish", "Dessert Lovers"],
          },
          {
            id: "con-4",
            title: "Conservo Cafe Aesthetic Ambience & Takeaway Experience",
            image: getVLotusImage("v_lotus_img_17.webp"),
            category: "Space & Experience",
            description: "Inviting coffee lovers to enjoy peaceful workspace seating and grab-and-go convenience.",
            tags: ["Cafe Ambience", "Workspace", "Japanese Style"],
          },
        ],
      },
      {
        id: "fanpage-yoshinoya",
        brandName: "Yoshinoya Vietnam",
        cuisineType: "Original Japanese Beef Bowl (Gyudon Since 1899)",
        badge: "Fast Casual Dining",
        description: "Fast-paced dynamic visual content, student discount campaigns, lunchtime value sets, and authentic Japanese flavor heritage storytelling.",
        coverImage: getVLotusImage("v_lotus_img_20.webp"),
        posts: [
          {
            id: "yosh-1",
            title: "Authentic Tokyo Gyudon Beef Bowl: 120-Year Secret Recipe",
            image: getVLotusImage("v_lotus_img_22.webp"),
            category: "Heritage & Flavor",
            description: "Showcasing tender simmered beef and sweet onions served over steaming Japanese rice.",
            tags: ["Gyudon", "Tokyo Heritage", "1899 Recipe"],
          },
          {
            id: "yosh-2",
            title: "Mega Lunch Combos & Student Special Discount Days",
            image: getVLotusImage("v_lotus_img_23.webp"),
            category: "Promotional Activation",
            description: "Budget-friendly meal deals with side dishes, miso soup, and refillable green tea.",
            tags: ["Lunch Deal", "Student Discount", "Value Meal"],
          },
          {
            id: "yosh-3",
            title: "Crispy Chicken Karaage & Japanese Curry Rice Bowls",
            image: getVLotusImage("v_lotus_img_24.webp"),
            category: "Menu Expansion",
            description: "Appetizing food photography promoting deep-fried delights and aromatic curry sauces.",
            tags: ["Karaage", "Japanese Curry", "Crispy & Juicy"],
          },
        ],
      },
      {
        id: "fanpage-ussina",
        brandName: "Ussina Snow Aging Beef",
        cuisineType: "Sky Dining & Snow-Aged Wagyu at Landmark 81",
        badge: "Luxury Sky Dining",
        description: "Upscale editorial photography, romantic anniversary dining packages, wine pairings, and panoramic Ho Chi Minh City skyline views from the 77th floor.",
        coverImage: getVLotusImage("v_lotus_img_29.webp"),
        posts: [
          {
            id: "uss-1",
            title: "Exclusive Snow-Aging Technique: Taste the Difference",
            image: getVLotusImage("v_lotus_img_31.webp"),
            category: "Gourmet Story",
            description: "Educating discerning diners on amino acid concentration and enhanced umami richness.",
            tags: ["Snow-Aging", "Wagyu", "Fine Dining"],
          },
          {
            id: "uss-2",
            title: "Romantic Dinner Packages with Skyline View from Floor 77",
            image: getVLotusImage("v_lotus_img_32.webp"),
            category: "Event & Celebration",
            description: "Table-side rose petal decor, custom celebration menus, and romantic sunset vistas.",
            tags: ["Anniversary", "Landmark 81", "Sky Dining"],
          },
          {
            id: "uss-3",
            title: "Chef's Tasting Course: Harmonizing Japanese & Western Fusion",
            image: getVLotusImage("v_lotus_img_33.webp"),
            category: "Chef Signature",
            description: "Multi-course gastronomic voyage curated by Japanese culinary masters.",
            tags: ["Tasting Menu", "Gastronomy", "Fusion"],
          },
        ],
      },
    ],
  },
  videoPillar: {
    title: "2.3. Video Editor & Restaurant Media Production",
    overview: "Ideated, staged, and participated in professional photoshoots and video shoots at restaurant venues. Filmed and edited engaging TikTok reels and short-form videos tailored to F&B trends.",
    videos: [
      {
        id: "vid-conservo",
        brandName: "Conservo Bakery",
        title: "Artisan Bread Baking & ASMR Crunchy Pastry Reel",
        role: "Concept, Food Staging & Video Editor",
        stats: {
          views: "120,000+",
          likes: "68",
          shares: "3",
        },
        highlight: "120K+ Views for Bakery Showcase",
        description: "Captured tantalizing oven-baking sequences, golden crust crunches, and pastry filling textures. Applied upbeat rhythmic editing and ASMR sound design to boost organic food cravings.",
        image: getVLotusImage("v_lotus_img_34.webp"),
        tags: ["Food ASMR", "TikTok Reel", "Bakery Viral", "CapCut / Premiere"],
      },
      {
        id: "vid-yoshinoya",
        brandName: "Yoshinoya Vietnam",
        title: "Sizzling Gyudon Simmering & Fast Dining Experience",
        role: "Shooting Coordinator, On-site Host & Editor",
        stats: {
          views: "105,000+",
          likes: "205",
          shares: "11",
        },
        highlight: "105K+ Views & 205 Likes on Yoshinoya Short",
        description: "Produced high-energy dining vlog showing juicy beef slices dipped in onsen egg with mouth-watering close-up angles, generating strong comment interactions and store traffic.",
        image: getVLotusImage("v_lotus_img_27.webp"),
        tags: ["Dining Vlog", "Onsen Egg Dip", "Viral Food Reel", "105K Views"],
      },
    ],
  },
};
