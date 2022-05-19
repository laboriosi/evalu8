export function ms(duration: number) {
  return process.env.NODE_ENV === 'test' ? 0 : duration
}
