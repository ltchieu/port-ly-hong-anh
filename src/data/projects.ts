import { Project } from "../models/Project";

// Vite glob to import authentic image assets from /assets/image/Activities/
// Note: Relative path from src/data/ to root assets/ is ../../assets/
const activityImages = import.meta.glob<string>(
  '../../assets/image/Activities/**/*.{webp,png,jpg,jpeg,PNG,JPG,JPEG}',
  { eager: true, import: 'default' }
);

export function getActivityImage(pathSubstring: string): string {
  const matchKey = Object.keys(activityImages).find(key =>
    key.toLowerCase().includes(pathSubstring.toLowerCase())
  );
  if (matchKey && activityImages[matchKey]) {
    return activityImages[matchKey];
  }
  // Fallback to first available image key if exact substring match is not found
  const firstKey = Object.keys(activityImages)[0];
  return firstKey ? activityImages[firstKey] : '';
}

export const projects: Project[] = [
  {
    id: "phoenix-music-festival-2022",
    title: "THE PHOENIX MUSIC FESTIVAL",
    category: "MUSIC FESTIVAL & BRAND ACTIVATION",
    image: getActivityImage('Poster-02-edited.webp') || getActivityImage('Poster-04-01.webp'),
    description: "Full visual identity, promotional poster design, VIP wristband graphics, and 1x2m standee campaign for live music festival.",
    narrative: "The Phoenix 2022 was an energetic music festival gathering over 500+ attendees. Khanh developed the complete visual package including high-impact key visuals, promotional poster series, VIP wristband entry passes, stage branding, and promotional standees displayed across campus venues.",
    deliverables: ["Key Visual & Poster Design", "Festival Wristbands & Lanyards", "1x2m Promotional Standees", "Social Media Teaser Campaign"],
    tools: ["Adobe Illustrator", "Photoshop", "Print Production", "Brand Identity"],
    year: "2022"
  }
];
