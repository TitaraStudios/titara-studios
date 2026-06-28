import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'
import Badge from './Badge'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

/** Reusable section header: eyebrow pill + heading + supporting copy. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <motion.div variants={fadeUp}>
          <Badge tone="primary">{eyebrow}</Badge>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            'max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
