import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { User, Sparkles } from 'lucide-react';

/**
 * NeonAvatar 컴포넌트 - 네온 링이 회전하는 프로필 아바타
 *
 * Props: 없음
 *
 * Example usage:
 * <NeonAvatar />
 */
function NeonAvatar() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      className="relative"
    >
      {/* Neon Ring */}
      <div
        className="absolute -inset-3 rounded-full opacity-60"
        style={{
          background: 'conic-gradient(from 0deg, #2dd4bf, #38bdf8, #a78bfa, #2dd4bf)',
          animation: 'neon-spin 4s linear infinite',
          filter: 'blur(8px)',
        }}
      />
      <div
        className="absolute -inset-3 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #2dd4bf, #38bdf8, #a78bfa, #2dd4bf)',
          animation: 'neon-spin 4s linear infinite',
        }}
      />
      {/* Inner Avatar */}
      <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[#0f1729] shadow-2xl md:h-40 md:w-40">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <User className="h-16 w-16 text-teal-400 md:h-20 md:w-20" />
        </motion.div>
      </div>
      {/* Status Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring' }}
        className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 shadow-lg shadow-teal-500/50 ring-4 ring-[#0a0f1a]"
      >
        <Sparkles className="h-5 w-5 text-white" />
      </motion.div>
    </motion.div>
  );
}

/**
 * HeroSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  const { basicInfo } = usePortfolio();

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20 md:py-32">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-teal-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[150px]" />

      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        <NeonAvatar />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {basicInfo.name}
            </span>
          </h1>
          <p className="max-w-lg text-lg text-gray-400 md:text-xl">
            {basicInfo.shortIntro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { label: basicInfo.school, color: 'from-teal-500/20 to-teal-500/5 text-teal-300 border-teal-500/20' },
            { label: basicInfo.major, color: 'from-blue-500/20 to-blue-500/5 text-blue-300 border-blue-500/20' },
            { label: basicInfo.status, color: 'from-purple-500/20 to-purple-500/5 text-purple-300 border-purple-500/20' },
          ].map((badge) => (
            <span
              key={badge.label}
              className={`rounded-full border bg-gradient-to-r px-4 py-1.5 text-sm font-medium ${badge.color}`}
            >
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
