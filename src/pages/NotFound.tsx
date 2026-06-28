import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PageTransition from '@/components/layout/PageTransition'
import Seo from '@/components/seo/Seo'
import Container from '@/components/ui/Container'
import { LinkButton, Button } from '@/components/ui/Button'
import GlowOrb from '@/components/ui/GlowOrb'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <PageTransition>
      <Seo title="Page not found" path="/404" />
      <section className="relative grid min-h-[70vh] place-items-center overflow-hidden">
        <GlowOrb className="-left-20 top-10 bg-primary" size={420} />
        <GlowOrb className="bottom-0 right-0 bg-secondary" size={360} />

        <Container className="relative text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display text-8xl font-bold leading-none text-gradient sm:text-9xl"
          >
            404
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl"
          >
            This level doesn&apos;t exist
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-3 max-w-md text-slate-400"
          >
            The page you&apos;re looking for may have been moved, renamed or never existed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <LinkButton to="/" size="lg">
              <Home className="h-5 w-5" />
              Back to home
            </LinkButton>
            <Button variant="outline" size="lg" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
              Go back
            </Button>
          </motion.div>
        </Container>
      </section>
    </PageTransition>
  )
}
