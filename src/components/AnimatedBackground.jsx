import { motion, useScroll, useTransform } from 'framer-motion'

export default function AnimatedBackground() {
  // Parallax y based on scroll
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -60])
  const y2 = useTransform(scrollY, [0, 600], [0, 40])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Subtle moving grid */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-[-20%] bg-[length:24px_24px] opacity-[0.07]"
        
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(255,255,255,.25) 0 1px, transparent 1px 24px), repeating-linear-gradient(90deg, rgba(255,255,255,.25) 0 1px, transparent 1px 24px)'
          }}
        />
      </motion.div>

      {/* Gradient glows */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -top-40 -right-40 w-[42rem] h-[42rem] rounded-full bg-green-500/25 blur-3xl"/>
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-48 -left-48 w-[48rem] h-[48rem] rounded-full bg-blue-600/20 blur-3xl"/>
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -left-32 w-[32rem] h-[32rem] rounded-full bg-purple-600/20 blur-3xl"/>

      {/* Scanline overlay reminiscent of NOTHING aesthetic */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 2px, rgba(255,255,255,0.5) 3px)'
        }}
      />
    </div>
  )
}
