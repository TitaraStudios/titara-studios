/**
 * Tiny classname combiner — joins truthy class fragments with a space.
 * Keeps the bundle lean (no clsx/tailwind-merge dependency) while giving us
 * conditional class ergonomics everywhere in the component tree.
 */
export type ClassValue = string | number | false | null | undefined

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}
