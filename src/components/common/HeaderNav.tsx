import { memo } from 'react';
import type { HeaderNavProps } from '../../models/headerNav';

export const HeaderNav = memo(function HeaderNav({
  onNavigateHome,
  caseStudyText,
  badgeText,
}: HeaderNavProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#FAFCFC]/90 backdrop-blur-md border-b border-[#CCE5E3]">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="group flex items-center gap-3 font-narrow text-xs uppercase tracking-[0.2em] font-bold text-[#0C2B31] hover:text-[#0B6E7B] transition-colors cursor-pointer"
          aria-label="Return to main portfolio"
        >
          <span className="w-8 h-8 rounded-full border border-[#CCE5E3] group-hover:border-[#0B6E7B] group-hover:bg-[#0B6E7B] group-hover:text-white flex items-center justify-center transition-all duration-300">
            <i className="fa-solid fa-arrow-left text-xs"></i>
          </span>
          <span>Return to Portfolio</span>
        </button>

        <div className="flex items-center gap-4">
          {caseStudyText && (
            <>
              <span className="font-narrow text-xs font-bold text-[#0B6E7B] tracking-[0.25em] uppercase hidden sm:inline-block">
                {caseStudyText}
              </span>
              <span className="h-4 w-[1px] bg-[#CCE5E3] hidden sm:block"></span>
            </>
          )}
          <span className="font-mono text-xs font-bold px-3 py-1 bg-[#0B6E7B] text-white rounded-lg shadow-xs">
            {badgeText}
          </span>
        </div>
      </div>
    </header>
  );
});

export default HeaderNav;
