import PageTransition from '@/components/layout/PageTransition'
import Seo from '@/components/seo/Seo'
import Hero from '@/components/home/Hero'
import FeaturedShowcase from '@/components/home/FeaturedShowcase'
import MoreGames from '@/components/home/MoreGames'
import Stats from '@/components/home/Stats'
import AboutPreview from '@/components/home/AboutPreview'
import LatestNews from '@/components/home/LatestNews'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <PageTransition>
      <Seo
        title="Titara Studios"
        description="We create polished and engaging mobile games built with Unity for Android, iOS and PC. Now building Monster Cubes and Love Score."
        path="/"
      />
      <Hero />
      <FeaturedShowcase />
      <MoreGames />
      <AboutPreview />
      <Stats />
      <LatestNews />
      <CTASection />
    </PageTransition>
  )
}
