import { AdminDashboard, ChallengesRewards, CoursesPreview, FeatureBand, Hero, LeaderboardSection, NewsHelpFaq, ProductShowcase, RegistrationAndSecurity } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureBand />
      <ProductShowcase />
      <CoursesPreview />
      <ChallengesRewards />
      <LeaderboardSection />
      <AdminDashboard />
      <RegistrationAndSecurity />
      <NewsHelpFaq />
      <footer className="border-t border-sky-200/40 px-4 py-10 text-center text-sm text-slate-500 dark:border-slate-800">
        Cartory Reseller Hub — premium dropshipping infrastructure for Bangladesh.
      </footer>
    </main>
  );
}
