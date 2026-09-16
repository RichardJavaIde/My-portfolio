/**
 * cn — "class names"
 * Helper simple para unir clases de Tailwind condicionalmente.
 *
 * ¿Por qué existe? En vez de escribir:
 *   `className={condicion ? 'bg-red-500' + ' ' + 'text-white' : 'bg-red-500'}`
 * escribimos:
 *   `className={cn('bg-red-500', condicion && 'text-white')}`
 *
 * Los valores `false`/`null`/`undefined` se filtran automáticamente.
 */

type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}