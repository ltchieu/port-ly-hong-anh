// Dynamically import all images under assets/image/Benelifts_Asia using Vite import.meta.glob
const beneliftsImagesGlob = import.meta.glob<string>(
  '../../assets/image/Benelifts_Asia/**/*.{webp,jpg,jpeg,png,JPG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

export const getBeneliftsImage = (filename: string): string => {
  const matchKey = Object.keys(beneliftsImagesGlob).find(key => key.endsWith(filename));
  return matchKey ? beneliftsImagesGlob[matchKey] : '';
};

export const getBeneliftsMuc1Images = (): string[] => {
  const muc1Keys = Object.keys(beneliftsImagesGlob).filter(key => {
    const nfc = key.normalize('NFC');
    const nfd = key.normalize('NFD');
    return nfc.includes('Mục 1') || nfd.includes('Mục 1') || key.includes('Mục 1') || key.includes('Muc 1');
  });
  return muc1Keys
    .sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)\.(jpg|png|webp)/i)?.[1] || '0', 10);
      const numB = parseInt(b.match(/(\d+)\.(jpg|png|webp)/i)?.[1] || '0', 10);
      return numA - numB;
    })
    .map(key => beneliftsImagesGlob[key]);
};

export const getBeneliftsMuc2Images = (): string[] => {
  const muc2Keys = Object.keys(beneliftsImagesGlob).filter(key => {
    const nfc = key.normalize('NFC');
    const nfd = key.normalize('NFD');
    return nfc.includes('Mục 2') || nfd.includes('Mục 2') || key.includes('Mục 2') || key.includes('Muc 2');
  });
  return muc2Keys
    .sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)\.(jpg|png|webp)/i)?.[1] || '0', 10);
      const numB = parseInt(b.match(/(\d+)\.(jpg|png|webp)/i)?.[1] || '0', 10);
      return numA - numB;
    })
    .map(key => beneliftsImagesGlob[key]);
};

export const getBeneliftsDesignImages = (): string[] => {
  const designKeys = Object.keys(beneliftsImagesGlob).filter(key => {
    const nfc = key.normalize('NFC');
    const nfd = key.normalize('NFD');
    return (
      nfc.includes('Ảnh design') ||
      nfd.includes('Ảnh design') ||
      key.includes('Ảnh design') ||
      key.includes('Anh design') ||
      key.includes('Ảnh_design') ||
      key.includes('Anh_design')
    );
  });
  return designKeys
    .sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)\.(jpg|png|webp)/i)?.[1] || '0', 10);
      const numB = parseInt(b.match(/(\d+)\.(jpg|png|webp)/i)?.[1] || '0', 10);
      return numA - numB;
    })
    .map(key => beneliftsImagesGlob[key]);
};

import type {
  MetricItem,
  BeneliftsSEOArticle,
  BeneliftsFanpage,
  BeneliftsEvent,
  BeneliftsVideoItem,
  FacebookHighlightPost,
  BeneliftsHighlightPostsSection,
  BeneliftsWebsiteArticle,
  BeneliftsWebsiteArticlesSection,
  BeneliftsEventCollage,
  BeneliftsData,
} from '../models/benelifts';

export type {
  MetricItem,
  BeneliftsSEOArticle,
  BeneliftsFanpage,
  BeneliftsEvent,
  BeneliftsVideoItem,
  FacebookHighlightPost,
  BeneliftsHighlightPostsSection,
  BeneliftsWebsiteArticle,
  BeneliftsWebsiteArticlesSection,
  BeneliftsEventCollage,
  BeneliftsData,
};

export const beneliftsData: BeneliftsData = {
  companyName: "Benelifts Asia Co., Ltd.",
  headquarters: "Official Representative of Benelifts S.r.l (Milan, Italy)",
  roleTitle: "Marketing Executive & Communications Coordinator",
  period: "Project 3",
  overview: {
    description: "Benelifts Asia Co., Ltd. was established in 2019 as the official representative of Benelifts S.r.l in Asia, with global headquarters in Milan, Italy. The company specializes in supplying premium European elevator equipment, genuine spare parts, and fully custom-imported luxury Italian home elevators.",
    established: "Established in 2019",
    specialization: "European Elevator Systems, Custom Italian Elevators & Spare Parts",
    brands: ["Benelifts Asia", "Benelifts S.r.l (Milan)", "Casanova Luxury Line"],
  },
  keyMetrics: [
    {
      label: "Inbound Customer Leads",
      value: "20 / month",
      subtext: "Generated directly via SEO Website Articles",
      icon: "fa-solid fa-bullseye",
    },
    {
      label: "VietBuild 2024 Trade Leads",
      value: "120+",
      subtext: "High-value architect & homeowner prospects",
      icon: "fa-solid fa-handshake",
    },
    {
      label: "Bilingual SEO Articles",
      value: "45+",
      subtext: "Technical guides & luxury design showcases",
      icon: "fa-solid fa-pen-nib",
    },
    {
      label: "Fanpage Month 1 Growth",
      value: "+600",
      subtext: "Organic Targeted Industry Followers",
      icon: "fa-solid fa-users-line",
    },
  ],
  seoPillar: {
    title: "Technical SEO & Inbound Demand Generation",
    overview: "Created over 45 SEO-optimized (English-Vietnamese) website articles focusing on elevator technology, safety regulations, architectural integration, and European design standards. Conducted thorough technical research, crafted engaging thumbnails, and established an inbound acquisition channel generating up to 20 customer inquiries per month.",
    articleCount: "45+ Bilingual Articles",
    leadGeneration: "Peak 20 qualified homeowner & villa leads / month",
    articles: [
      {
        id: "bene-seo-1",
        title: "Italian Hydraulic vs. Traction Home Elevators: Complete Selection Guide",
        category: "Technical Guide & Comparison",
        image: getBeneliftsImage("benelifts_img_03.webp"),
        impact: "Top Organic Traffic Driver & Inbound Conversion",
        excerpt: "Analyzing shaft dimensions, machine-room-less (MRL) design, power consumption, and smoothness for premium residential villas.",
        tags: ["Bilingual SEO", "Technical Spec", "Italian Engineering", "Villa Design"],
      },
      {
        id: "bene-seo-2",
        title: "Custom Panoramic Glass Elevators for Modern Luxury Architecture",
        category: "Architectural Integration",
        image: getBeneliftsImage("benelifts_img_04.webp"),
        impact: "High Architecture & Design Firm Engagement",
        excerpt: "Showcasing curved glass cabins, bespoke LED lighting trims, and structural shaft calculations for high-end penthouses and estates.",
        tags: ["Glass Cabin", "Architecture", "Luxury Homes", "Design Specs"],
      },
      {
        id: "bene-seo-3",
        title: "European Safety Standards & Preventive Elevator Maintenance Protocols",
        category: "Safety & Standards",
        image: getBeneliftsImage("benelifts_img_05.webp"),
        impact: "Customer Trust & After-Sales Authority",
        excerpt: "Detailed breakdown of EN 81-20/50 safety regulations, emergency battery rescue systems, and genuine spare part longevity.",
        tags: ["Safety Standards", "EN 81-20", "Milan Engineering", "Maintenance"],
      },
    ],
  },
  fanpagePillar: {
    title: "Multi-Brand Social Content & Visual Design",
    overview: "Monthly content planning and visual design across 3 distinct brand entities: Benelifts Asia (Corporate & Sales), Benelifts S.r.l (European Engineering), and Casanova (Luxury Aesthetics). Achieved over 600 new followers within the first month and 4.7K reach on key product releases.",
    monthOneGrowth: "+600 New Followers in Month 1",
    fanpages: [
      {
        id: "fp-benelifts-asia",
        name: "Fanpage Benelifts Asia",
        subtitle: "Corporate Brand & Asian Regional Presence",
        badge: "Main Corporate Fanpage",
        description: "Engaging commercial posts, product catalogs, technical infographics, customer installation showcases, and promotional trade show announcements.",
        coverImage: getBeneliftsImage("benelifts_img_10.webp"),
        posts: [
          {
            id: "ba-p1",
            title: "Compact Home Elevator Solutions for Limited Shaft Spaces",
            image: getBeneliftsImage("benelifts_img_11.webp"),
            category: "Product Solution",
            description: "Highlighting smart pit depth requirements starting at just 150mm for urban shophouses.",
            tags: ["Smart Pit", "Urban Homes", "Space Saving"],
          },
          {
            id: "ba-p2",
            title: "Italian Craftsmanship: Cabin Materials, Italian Leather & Wood Accents",
            image: getBeneliftsImage("benelifts_img_12.webp"),
            category: "Material Palette",
            description: "Detailed tactile catalog showcasing brushed bronze stainless steel and fine Italian leather finishes.",
            tags: ["Italian Leather", "Custom Interior", "Luxury Finish"],
          },
          {
            id: "ba-p3",
            title: "Client Installation Showcase: Private Villa in Thao Dien, District 2",
            image: getBeneliftsImage("benelifts_img_13.webp"),
            category: "Case Study",
            description: "Completed installation walkthrough featuring 4-stop panoramic glass elevator integration.",
            tags: ["Case Study", "Thao Dien Villa", "Real Project"],
          },
          {
            id: "ba-p4",
            title: "Energy Efficiency: Gearless Eco-Drive Motors with 40% Power Savings",
            image: getBeneliftsImage("benelifts_img_14.webp"),
            category: "Green Tech",
            description: "Educating architects on low-noise operation and single-phase 220V residential compatibility.",
            tags: ["Eco-Drive", "220V Power", "Green Tech"],
          },
        ],
      },
      {
        id: "fp-benelifts-srl",
        name: "Fanpage Benelifts S.r.l (Milan, Italy)",
        subtitle: "European Engineering & Global Standards",
        badge: "Italian Brand Heritage",
        description: "Focus on European technical design catalogs, CAD integration diagrams, Milan factory manufacturing reels, and international certifications.",
        coverImage: getBeneliftsImage("benelifts_img_18.webp"),
        posts: [
          {
            id: "srl-p1",
            title: "Precision Engineering: Milanese Craftsmanship Since Founding",
            image: getBeneliftsImage("benelifts_img_19.webp"),
            category: "Factory Heritage",
            description: "Visual journey through component manufacturing in Lombardy, Italy with strict quality testing.",
            tags: ["Milan Factory", "Lombardy", "Precision QC"],
          },
          {
            id: "srl-p2",
            title: "CAD & BIM Elevator Planning Files for Architects & Builders",
            image: getBeneliftsImage("benelifts_img_20.webp"),
            category: "Architect Resources",
            description: "Downloadable 3D files and dimension templates streamlining luxury villa blueprints.",
            tags: ["BIM / CAD", "Architect Support", "Technical Assets"],
          },
        ],
      },
      {
        id: "fp-casanova",
        name: "Fanpage Casanova",
        subtitle: "Bespoke Italian Luxury Elevator Aesthetics",
        badge: "Luxury Lifestyle Line",
        description: "Editorial photography, lifestyle styling, lighting design, and artistic elevator interiors for high-net-worth homeowners.",
        coverImage: getBeneliftsImage("benelifts_img_21.webp"),
        posts: [
          {
            id: "casa-p1",
            title: "Casanova Bespoke Cabin Series: Where Engineering Meets High Fashion",
            image: getBeneliftsImage("benelifts_img_22.webp"),
            category: "Luxury Aesthetic",
            description: "Highlighting artistic ceiling LED patterns, marble flooring inlays, and gold-leaf details.",
            tags: ["Bespoke Interior", "Marble Inlay", "High Fashion"],
          },
        ],
      },
    ],
  },
  videoPillar: {
    title: "Video Production & Technical Short-Form Content",
    overview: "Generated video concepts, developed technical scripts, arranged background staging, and coordinated participants for company video production. Filmed and edited informative short-form TikTok/Reels videos.",
    stats: {
      views: "1.2K+",
      likes: "53",
      shares: "11",
      comments: "11",
    },
    description: "Produced engaging educational reels showing how home elevators operate safely during power outages, how smart control panels work, and elevator design aesthetics for villa owners.",
    image: getBeneliftsImage("benelifts_img_26.webp"),
    tags: ["Video Scripting", "TikTok / Reels", "Technical Demo", "CapCut / Premiere"],
    videos: [
      {
        id: "bene-vid-1",
        platform: "facebook",
        brandName: "Benelifts Asia (Bsmartlifts)",
        title: "Benelifts Asia — Compact Elevator Showcase & Installation",
        role: "Video Creator & Editor",
        videoUrl: "https://www.facebook.com/reel/475428742045251/",
        highlight: "Facebook Reel",
        description: "Engaging showcase featuring compact Italian home elevator installations, smart pit requirements, and premium residential design.",
        tags: ["Facebook Reel", "Benelifts Asia", "Bsmartlifts", "Italian Elevator"],
      },
      {
        id: "bene-vid-2",
        platform: "facebook",
        brandName: "Casanova Building",
        title: "Casanova Building — Meeting Room & Modern Office Spaces",
        role: "Video Creator & Editor",
        videoUrl: "https://www.facebook.com/reel/9029206577131919/",
        highlight: "Facebook Reel",
        description: "Modern short-form video presenting professional hourly meeting room rentals, luxury amenities, and flexible workspace solutions at Casanova Building.",
        tags: ["Facebook Reel", "Casanova Building", "Hourly Meeting Room", "Office Space"],
      },
      {
        id: "bene-vid-3",
        platform: "facebook",
        brandName: "Benelifts S.r.l",
        title: "Benelifts S.r.l — Italian Engineering & Quality Standards",
        role: "Video Creator & Editor",
        videoUrl: "https://www.facebook.com/reel/349224678250474/",
        highlight: "Facebook Video",
        description: "European engineering precision, Milanese craftsmanship, and international safety compliance for luxury residential and commercial elevator systems.",
        tags: ["Facebook Video", "Benelifts S.r.l", "Milan Engineering", "European Safety"],
      },
      {
        id: "bene-vid-4",
        platform: "facebook",
        brandName: "Benelifts Asia (Bsmartlifts)",
        title: "Benelifts Asia — Luxury Home Elevator Operation & Aesthetics",
        role: "Video Creator & Editor",
        videoUrl: "https://www.facebook.com/reel/330936076752192/",
        highlight: "Facebook Reel",
        description: "Dynamic reel showcasing smooth elevator movement, bespoke cabin aesthetics, LED lighting integration, and luxury villa architecture.",
        tags: ["Facebook Reel", "Benelifts Asia", "Bsmartlifts", "Luxury Villa"],
      },
    ],
  },
  highlightPostsSection: {
    title: "Highlight Facebook Posts & Copywriting Showcase",
    sectionTitle: "Multi-Brand Social Copywriting & Brand Storytelling",
    instruction: "Explore multi-brand social media copywriting across Benelifts Asia, Benelifts S.r.l, and Casanova Building.",
    description: "Curated top-performing social posts and engagement campaigns across elevator engineering, luxury interior design, and corporate services.",
    beneliftsDriveUrl: "https://drive.google.com/drive/folders/1jnMdulePboRumEjfO2bCKCE4KR9dNvi6?usp=sharing",
    casanovaDriveUrl: "https://drive.google.com/drive/folders/1u4qizEZYfOJIsdFtDs4ZBF9Rzj-wt__N?usp=sharing",
    posts: [
      {
        id: "bene-fb-post-1",
        postNumber: "Family & Luxury Living",
        brandName: "Benelifts Asia (Bsmartlifts)",
        title: "CÙNG BENELIFTS - TRÂN TRỌNG TỪNG KHOẢNH KHẮC SUM VẦY",
        category: "Family & Luxury Living",
        postUrl: "https://www.facebook.com/share/p/19DHHtqkQw/",
        content: `🏠 Đã bao lâu rồi bạn chưa về thăm nhà?
🏠 Đã bao lâu rồi cả gia đình không quây quần với nhau hàn huyên sum họp trong những bữa cơm?
💟 Cuối năm chính là thời điểm những trái tim đều hướng về gia đình nên mỗi phút giây đều có giá trị nếu ta biết trân trọng. Dù đó có là khoảng thời gian ngắn ngủi khi cùng làm việc nhà hay cùng di chuyển trong thang máy cũng có thể gắn kết để tình cảm gia đình thêm khăng khít 💑
💞 Thang máy Benelifts đồng hành cùng những hành động nhỏ nhưng mang ý nghĩa lớn để hoàn thành sứ mệnh “đem mọi người đến gần nhau hơn” với:
▶️ Thang máy gia đình nhập khẩu nguyên chiếc, tiêu chuẩn Châu Âu an toàn tối ưu hiện nay: đem lại sự an tâm cho cả gia đình.
▶️ Phong cách thiết kế tinh tế mà đẳng cấp: tạo không gian đẹp, thư giãn
▶️ Hỗ trợ di chuyển tối ưu: giúp các thành viên trong gia đình có nhiều thời gian hơn cho bản thân và gắn kết tình cảm.`,
        tags: ["Benelifts Asia", "Thang Máy Gia Đình", "Sum Vầy", "European Standard"],
      },
      {
        id: "bene-fb-post-2",
        postNumber: "Office & Meeting Services",
        brandName: "Casanova Building",
        title: "PHÒNG HỌP THEO GIỜ, KHÔNG LỠ VIỆC GẤP",
        category: "Office & Meeting Room Services",
        postUrl: "https://www.facebook.com/share/p/1CRke3T7v1/",
        content: `❓ Bạn đang gặp phải tình huống:
🆘 Lên lịch họp gấp gáp mà văn phòng bận kín chỗ?
🆘 Cần không gian chuyên nghiệp để gặp gỡ đối tác quan trọng nhưng e dè chi phí thuê văn phòng dài hạn?
🆘 Muốn tổ chức buổi đào tạo, hội thảo mà thiếu thốn trang thiết bị và địa điểm phù hợp?
👉 Đừng lo, đã có Casanova lo cho bạn! Với dịch vụ phòng họp theo giờ, Casanova mang đến giải pháp hoàn hảo để bạn:
✔️ Gặp gỡ đối tác, ký kết hợp đồng trong không gian sang trọng, chuyên nghiệp.
✔️ Tổ chức hội thảo, đào tạo cho nhân viên với đầy đủ tiện nghi hiện đại.
✔️ Thỏa sức bàn chiến lược, "brainstorming" ý tưởng trong môi trường riêng tư, yên tĩnh.
Tại Casanova, bạn sẽ được tận hưởng:
✅ Đội ngũ nhân viên chuyên nghiệp, chu đáo, sẵn sàng hỗ trợ mọi nhu cầu của bạn.
✅ Phòng họp hiện đại, đầy đủ trang thiết bị: máy chiếu, màn hình LCD, wifi tốc độ cao...
✅ Giá cả cạnh tranh, phù hợp với mọi ngân sách.
📞 Còn chần chờ gì nữa? Hãy liên hệ Casanova ngay để đặt phòng cho cuộc họp quan trọng của bạn!`,
        tags: ["Casanova Building", "Phòng Họp Theo Giờ", "Coworking Space", "Meeting Room"],
      },
      {
        id: "bene-fb-post-3",
        postNumber: "Italian Engineering",
        brandName: "Benelifts S.r.l (Milan, Italy)",
        title: "💡 DID YOU KNOW THESE 04 INTERESTING FACTS ABOUT ELUX TUBO ELEVATOR?",
        category: "Italian Engineering & Innovation",
        postUrl: "https://www.facebook.com/share/p/1b2H5kxyJE/",
        content: `As a modern and groundbreaking elevator line from Benelifts S.r.l, Elux Tubo not only possesses an exquisite design but also integrates cutting-edge technology. Here are 04 fascinating facts about Elux Tubo that you shouldn't miss:
✅ Compact design, flexible installation: With its special structure, Elux Tubo can be installed even in limited spaces, requiring only a minimum area of 1m². Suitable for all types of spaces, from small apartments to luxurious villas.
✅ Smooth operation, noise reduction: Elux Tubo operates with a noise level of just 40dB - equivalent to the sound of a quiet room, providing a smooth moving experience without disturbing your living space.
✅ Maximized energy efficiency: The drive system of Elux Tubo is optimized to reduce friction, consuming less energy. With European energy labels, Elux Tubo not only runs smoothly but also helps your family save on electricity costs.
✅ Timeless durability: With premium materials and advanced manufacturing technology, Elux Tubo is designed to operate durably, minimizing maintenance and repair costs throughout its lifespan.
Don't miss out on the sophistication and efficiency of Elux Tubo Elevator! 🌟🏙️`,
        tags: ["Benelifts S.r.l", "Elux Tubo", "Milan Engineering", "Italian Elevator"],
      },
      {
        id: "bene-fb-post-4",
        postNumber: "Design Trend & Aesthetics",
        brandName: "Benelifts Asia (Bsmartlifts)",
        title: "🌟 Màu sắc của năm 2025: Mocha Mousse – Ấm áp, phong phú và đầy cảm hứng!",
        category: "Design Trends & Color Palette",
        postUrl: "https://www.facebook.com/share/p/19dz8QzEM9/",
        content: `Pantone đã chọn "Mocha Mousse" (Pantone 17-1230) làm màu của năm – một tông nâu ấm áp, lấy cảm hứng từ cacao, chocolate và cà phê, mang lại cảm giác dễ chịu và thoải mái trong cuộc sống hàng ngày.
🤔 Bạn nghĩ sao nếu gia đình của bạn sở hữu chiếc thang máy sắc màu này? Chắc chắn chiếc thang sẽ trở thành một điểm nhấn tinh tế và tạo cảm giác thư thái cho không gian sống!
✨ Với những màu sơn cao cấp, thang máy Benelifts luôn đáp ứng được nhu cầu của mọi phong cách thiết kế.
📥 Hãy liên hệ với Benelifts để được tư vấn dòng thang máy phù hợp với nhu cầu của bạn!
𝑬𝒍𝒆𝒗𝒂𝒕𝒊𝒏𝒈 𝒆𝒗𝒆𝒓𝒚𝒅𝒂𝒚 𝒍𝒊𝒇𝒆 - 𝑵𝒂̂𝒏𝒈 𝒕𝒂̂̀𝒎 𝒄𝒖𝒐̣̂𝒄 𝒔𝒐̂́𝒏𝒈`,
        tags: ["Pantone 2025", "Mocha Mousse", "Interior Design", "Benelifts Asia"],
      },
    ],
  },
  designAssetsCollage: {
    title: "DESIGN SOCIAL POST, THUMBNAIL WEBSITE ARTICLES AND POSM",
    subtitle: "Visual assets for social media posts, marketing collaterals & SEO article thumbnails.",
    countLabel: "17 Shots",
    images: getBeneliftsDesignImages(),
  },
  eventPillar: {
    title: "Corporate Events, Exhibitions & Internal Celebrations",
    sectionHeader: "Organizer, Main Designer & Photographer OF EVENT",
    overview: "Planned, organized, and managed communications for corporate events and exhibitions, including 20/10 celebrations and New Year Party. Coordinated with vendors, served as MC when needed, and managed end-to-end event",
    photographyCollage: {
      title: "Event Photography & Event Coverage",
      subtitle: "Live corporate celebrations, milestone moments, team building and 20/10 event photography.",
      countLabel: "12 Shots",
      images: getBeneliftsMuc1Images(),
    },
    designCollage: {
      title: "Event Visuals & Graphic Design",
      subtitle: "Event preparation photography, invitation cards, background banners, POSM & social media posts.",
      countLabel: "15 Shots",
      images: getBeneliftsMuc2Images(),
    },
  },
  websiteArticlesSection: {
    title: "SOME SELECTED WEBSITE CONTENTS",
    description: "Published technical SEO articles, product educational guides, and corporate space solutions across Benelifts and Casanova platforms.",
    beneliftsSeoPlanUrl: "https://drive.google.com/drive/folders/1_cjhmRDi6dY7KCdDLuk8K3JMgO9zFNCO?usp=sharing",
    casanovaSeoPlanUrl: "https://drive.google.com/drive/folders/1WZHuoWxIfhxov9L5OMEVmsr6DoyYR9gd?usp=sharing",
    articles: [
      {
        id: "bene-art-1",
        date: "01/2025",
        author: "Hồng Anh",
        type: "Benelifts Homelifts",
        title: "SOLUTIONS FOR HAND - OPERATED HOMELIFTS SUITABLE FOR ALL ARCHITECTURAL STYLES",
        url: "https://benelifts.com/news/solutions-for-hand-operated-homelifts-suitable-for-all-architectural-styles",
      },
      {
        id: "bene-art-2",
        date: "10/2024",
        author: "Hồng Anh",
        type: "Benelifts Homelifts",
        title: "GLASS ELEVATORS - THE PERFECT CHOICE FOR HOME RENOVATION",
        url: "https://benelifts.com/news/glass-elevators-the-perfect-choice-for-home-renovation",
      },
      {
        id: "bene-art-3",
        date: "07/2024",
        author: "Hồng Anh",
        type: "Benelifts Homelifts",
        title: "ELUX TUBO HOMELIFTS - THE OPTIMAL SOLUTION FOR LIMITED SPACES",
        url: "https://benelifts.com/news/elux-tubo-homelifts-the-optimal-solution-for-limited-spaces",
      },
      {
        id: "bene-art-4",
        date: "11/2024",
        author: "Hồng Anh",
        type: "Casanova Office",
        title: "10 LỢI ÍCH THUÊ PHÒNG HỌP NHẤT ĐỊNH KHÔNG ĐƯỢC BỎ QUA!",
        url: "https://thuananhoffice.com/10-loi-ich-thue-phong-hop-nhat-dinh-khong-duoc-bo-qua-2/",
      },
      {
        id: "bene-art-5",
        date: "09/2024",
        author: "Hồng Anh",
        type: "Casanova Office",
        title: "VĂN PHÒNG CHIA SẺ TẠI TPHCM",
        url: "https://thuananhoffice.com/van-phong-chia-se-tai-tphcm",
      },
    ],
  },
};
