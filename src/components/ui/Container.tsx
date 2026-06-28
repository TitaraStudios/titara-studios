import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

/** Consistent max-width + horizontal padding wrapper used across every section. */
export default function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return <Tag className={cn('container-px', className)}>{children}</Tag>
}
