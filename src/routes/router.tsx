import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPortfolio from './MainPortfolio';
import ScrollManager from './ScrollManager';

const PhoenixMusicFestivalDetail = lazy(() => import('../components/PhoenixMusicFestivalDetail'));
const ExperienceDetailPage = lazy(() => import('../components/ExperienceDetailPage'));

export default function AppRouter() {
  return (
    <>
      <ScrollManager />
      <Suspense fallback={<div className="min-h-screen bg-[#FAFCFC]" />}>
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route
            path="/project/phoenix-music-festival-2022"
            element={<PhoenixMusicFestivalDetail />}
          />
          <Route
            path="/experience/:experienceId"
            element={<MainPortfolio />}
          />
          {/* Fallback route to home page */}
          <Route path="*" element={<MainPortfolio />} />
        </Routes>
      </Suspense>
    </>
  );
}
