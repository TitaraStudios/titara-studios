import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, MessageSquare, User } from 'lucide-react'
import { founder } from '@/data/founder'
import PageTransition from '@/components/layout/PageTransition'
import PageHeader from '@/components/layout/PageHeader'
import Seo from '@/components/seo/Seo'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Reveal from '@/components/ui/Reveal'
import ContactForm from '@/components/contact/ContactForm'
import { socialLinks, contactEmail, supportEmail } from '@/data/navigation'

export default function Contact() {
  const mapEmbed = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL

  return (
    <PageTransition>
      <Seo
        title="Contact"
        description="Get in touch with Titara Studios — for partnerships, press, support or just to say hello."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Questions, partnerships, press or support — drop us a line and we'll get back to you."
      />

      <Section className="pt-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Left: details */}
          <div className="flex flex-col gap-6">
            {/* Founder card */}
            <Reveal>
              <Card interactive={false} className="p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary font-display text-xl font-bold text-white">
                    {founder.name.charAt(0)}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {founder.name}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {founder.role} · {founder.credential}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-secondary">
                      <User className="h-4 w-4" />
                      Indie studio · reach the founder directly
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.03}>
              <Card interactive={false} className="p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-200">
                    <Mail className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">Email us</h3>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="mt-1 block text-sm text-secondary hover:text-secondary-400"
                    >
                      {contactEmail}
                    </a>
                    <a
                      href={`mailto:${supportEmail}`}
                      className="block text-sm text-slate-400 hover:text-white"
                    >
                      {supportEmail} (support)
                    </a>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.05}>
              <Card interactive={false} className="p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary/15 text-secondary-400">
                    <Clock className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      Response time
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      We typically reply within 1–2 business days.
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card interactive={false} className="p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-400">
                    <MessageSquare className="h-6 w-6" />
                  </span>
                  <div className="w-full">
                    <h3 className="font-display text-lg font-semibold text-white">Follow along</h3>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {socialLinks.map(({ label, href, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-1 hover:border-secondary/50 hover:text-secondary"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={0.15}>
              <Card interactive={false} className="overflow-hidden">
                {mapEmbed ? (
                  <iframe
                    title="Titara Studios location"
                    src={mapEmbed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-56 w-full border-0"
                  />
                ) : (
                  <div className="relative grid h-56 place-items-center bg-gradient-to-br from-primary/20 via-card to-secondary/10">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                      }}
                    />
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative flex flex-col items-center gap-2 text-center"
                    >
                      <MapPin className="h-8 w-8 text-secondary" />
                      <p className="font-display font-semibold text-white">Remote-first studio</p>
                      <p className="text-xs text-slate-400">Working worldwide • Map placeholder</p>
                    </motion.div>
                  </div>
                )}
              </Card>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <Card interactive={false} className="p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-white">Send a message</h2>
              <p className="mt-1 text-sm text-slate-400">
                Fill out the form and we&apos;ll be in touch.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </PageTransition>
  )
}
