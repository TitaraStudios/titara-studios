import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY: FormState = { name: '', email: '', subject: '', message: '' }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!form.email.trim()) next.email = 'An email is required.'
    else if (!emailPattern.test(form.email)) next.email = 'That email looks off.'
    if (!form.message.trim()) next.message = 'Add a short message.'
    else if (form.message.trim().length < 10) next.message = 'A little more detail helps.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Request failed')
      } else {
        // No backend configured — simulate a successful submit for the demo.
        await new Promise((resolve) => setTimeout(resolve, 900))
      }
      setStatus('success')
      setForm(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: keyof FormState) =>
    cn(
      'w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:bg-white/10',
      errors[field] ? 'border-red-500/60' : 'border-white/10 focus:border-secondary/50',
    )

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-10 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500/20 text-emerald-300">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="font-display text-xl font-bold text-white">Message sent!</h3>
        <p className="max-w-sm text-sm text-slate-300">
          Thanks for reaching out. We&apos;ll get back to you as soon as we can.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-secondary hover:text-secondary-400"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-slate-300">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update('name')}
            placeholder="Jane Doe"
            className={inputClass('name')}
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update('email')}
            placeholder="jane@example.com"
            className={inputClass('email')}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-sm font-medium text-slate-300">
          Subject <span className="text-slate-500">(optional)</span>
        </label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={update('subject')}
          placeholder="Partnership, press, support..."
          className={inputClass('subject')}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us what's on your mind..."
          className={cn(inputClass('message'), 'resize-none')}
          aria-invalid={!!errors.message}
        />
        {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          >
            Something went wrong sending your message. Please try again or email us directly.
          </motion.p>
        )}
      </AnimatePresence>

      <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full sm:w-auto">
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send message
          </>
        )}
      </Button>
    </form>
  )
}
