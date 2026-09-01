import { Award } from "../models/Award";
import microsoftWordImg from "../../assets/image/Award & Certification/microsoft.jpg";
import microsoftExcelImg from "../../assets/image/Award & Certification/Microsoft Office Excel.webp";
import toiecImg from "../../assets/image/Award & Certification/toiec.jpg";

export const awards: Award[] = [
  {
    id: 'toeic-certificate',
    isFeatured: true,
    year: '2022',
    category: 'INTERNATIONAL LANGUAGE PROFICIENCY',
    title: 'TOEIC Official Score Certificate (825 / 990)',
    issuer: 'ETS (Educational Testing Service) / IIG Vietnam',
    role: 'Score: 825 / 990 (Listening: 445, Reading: 380)',
    project: 'Official English Proficiency Certification',
    description: 'Achieved an overall score of 825/990 on the official TOEIC Listening & Reading examination, certifying advanced communication skills and professional English capability in international business and marketing environments.',
    image: toiecImg
  },
  {
    id: 'microsoft-office-specialist-word',
    isFeatured: true,
    year: '2023',
    category: 'PROFESSIONAL IT & PRODUCTIVITY CERTIFICATION',
    title: 'Microsoft Office Specialist: Office Word 2016',
    issuer: 'Microsoft / Certiport',
    role: 'Certified Specialist (Verification: HkUy-XMYL)',
    project: 'Microsoft Certified Professional',
    description: 'Successfully completed the comprehensive requirements to be recognized as a Microsoft Office Specialist for Office Word 2016, demonstrating advanced document structuring, formatting, and office productivity expertise.',
    image: microsoftWordImg
  },
  {
    id: 'microsoft-office-specialist-excel',
    isFeatured: true,
    year: '2023',
    category: 'PROFESSIONAL IT & PRODUCTIVITY CERTIFICATION',
    title: 'Microsoft Office Specialist: Office Excel 2016',
    issuer: 'Microsoft / Certiport',
    role: 'Certified Specialist (Microsoft Certified Professional)',
    project: 'Microsoft Certified Professional',
    description: 'Successfully completed the comprehensive requirements to be recognized as a Microsoft Office Specialist for Office Excel 2016, demonstrating advanced data analysis, spreadsheet modeling, financial functions, and data visualization expertise.',
    image: microsoftExcelImg
  }
];
