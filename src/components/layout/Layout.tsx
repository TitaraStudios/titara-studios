import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

/** Thin loading fallback for lazily-loaded route chunks. */
function RouteFallback() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-secondary" />
    </div>
  )
}

/**
 * Root shell shared by every route: skip link, fixed navbar, animated page
 * outlet (with route transitions) and the footer.
 */
export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <ScrollToTop />
      <Navbar />

      <div id="main-content" className="flex-1 pt-16 md:pt-20">
        <Suspense fallback={<RouteFallback />}>
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </Suspense>
      </div>

      <Footer />
    </div>
  )
}
