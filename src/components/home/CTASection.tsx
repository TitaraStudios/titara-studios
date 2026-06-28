import { motion } from 'framer-motion'
import { Mail, Gamepad2 } from 'lucide-react'
import Container from '@/components/ui/Container'
import { LinkButton } from '@/components/ui/Button'
import { fadeUp, viewportOnce } from '@/lib/animations'

/** Closing call-to-action band shared at the bottom of key pages. */
export default function CTASection() {
  return (
    <section aria-label="Get in touch" className="py-20 sm:py-24">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl border border-white/10 px-6 py-16 text-center sm:px-12"
        >
          {/* Animated gradient backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-brand-gradient opacity-90"
            style={{ backgroundSize: '200% 200%' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, #fff 0, transparent 40%), radial-gradient(circle at 80% 70%, #fff 0, transparent 35%)',
            }}
          />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Let&apos;s build something players love
            </h2>
            <p className="text-lg text-white/85">
              Got a question, a partnership idea, or just want to follow along? We&apos;d
              love to hear from you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <LinkButton to="/contact" size="lg" variant="secondary">
                <Mail className="h-5 w-5" />
                Contact Us
              </LinkButton>
              <LinkButton
                to="/games"
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:border-white hover:text-white"
              >
                <Gamepad2 className="h-5 w-5" />
                Explore Games
              </LinkButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
