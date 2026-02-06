import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import {
  User,
  GraduationCap,
  Code,
  Sparkles,
  BookOpen,
  Lightbulb,
  Heart,
  ChevronDown,
} from 'lucide-react';

/**
 * GlassCard 컴포넌트 - Glassmorphism 스타일 카드
 *
 * Props:
 * @param {ReactNode} children - 자식 컴포넌트 [Required]
 * @param {string} className - 추가 클래스 [Optional]
 *
 * Example usage:
 * <GlassCard>Content</GlassCard>
 */
function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/20 bg-white/70 p-6 shadow-xl backdrop-blur-lg md:p-8 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * AnimatedAvatar 컴포넌트 - 애니메이션 프로필 아바타
 *
 * Props: 없음
 *
 * Example usage:
 * <AnimatedAvatar />
 */
function AnimatedAvatar() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="relative"
    >
      <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-75" />
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl md:h-36 md:w-36">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <User className="h-14 w-14 text-white md:h-18 md:w-18" />
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 shadow-lg ring-4 ring-white"
      >
        <Sparkles className="h-5 w-5 text-white" />
      </motion.div>
    </motion.div>
  );
}

/**
 * Badge 컴포넌트 - 세련된 배지
 *
 * Props:
 * @param {ReactNode} icon - 아이콘 [Required]
 * @param {string} label - 라벨 [Required]
 * @param {string} color - 색상 테마 [Optional, 기본값: 'blue']
 * @param {number} delay - 애니메이션 딜레이 [Optional]
 *
 * Example usage:
 * <Badge icon={<Code />} label="웹 개발" color="purple" />
 */
function Badge({ icon, label, color = 'blue', delay = 0 }) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 shadow-blue-500/30',
    purple: 'from-purple-500 to-purple-600 shadow-purple-500/30',
    green: 'from-green-500 to-green-600 shadow-green-500/30',
    orange: 'from-orange-500 to-orange-600 shadow-orange-500/30',
  };

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${colorClasses[color]} px-4 py-2 text-sm font-medium text-white shadow-lg`}
    >
      {icon}
      {label}
    </motion.span>
  );
}

/**
 * ProfileSection 컴포넌트 - 프로필 영역
 *
 * Props:
 * @param {Object} basicInfo - 기본 정보 [Required]
 *
 * Example usage:
 * <ProfileSection basicInfo={basicInfo} />
 */
function ProfileSection({ basicInfo }) {
  return (
    <GlassCard>
      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
        <AnimatedAvatar />

        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
              {basicInfo.name}
            </h1>
            <p className="mt-1 text-lg text-gray-500">{basicInfo.nameEn}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start"
          >
            <Badge
              icon={<GraduationCap className="h-4 w-4" />}
              label={basicInfo.school}
              color="blue"
              delay={0.6}
            />
            <Badge
              icon={<Code className="h-4 w-4" />}
              label={basicInfo.major}
              color="purple"
              delay={0.7}
            />
            <Badge
              icon={<Sparkles className="h-4 w-4" />}
              label={basicInfo.status}
              color="green"
              delay={0.8}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 text-gray-600 leading-relaxed"
          >
            {basicInfo.fullIntro}
          </motion.p>
        </div>
      </div>
    </GlassCard>
  );
}

/**
 * AccordionItem 컴포넌트 - 아코디언 아이템
 *
 * Props:
 * @param {Object} section - 섹션 데이터 [Required]
 * @param {boolean} isOpen - 열림 상태 [Required]
 * @param {function} onClick - 클릭 핸들러 [Required]
 * @param {number} index - 인덱스 [Required]
 *
 * Example usage:
 * <AccordionItem section={section} isOpen={true} onClick={handleClick} index={0} />
 */
function AccordionItem({ section, isOpen, onClick, index }) {
  const iconMap = {
    BookOpen: <BookOpen className="h-5 w-5" />,
    Lightbulb: <Lightbulb className="h-5 w-5" />,
    Heart: <Heart className="h-5 w-5" />,
  };

  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="overflow-hidden rounded-xl border border-white/20 bg-white/50 backdrop-blur-sm"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-white/30"
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${gradients[index]} text-white shadow-lg`}
          >
            {iconMap[section.icon]}
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{section.title}</h3>
            <p className="text-sm text-gray-500">{section.subtitle}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="border-t border-gray-100 px-5 py-6">
              <div className="prose prose-gray max-w-none">
                {section.content.split('\n\n').map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="mb-4 text-gray-600 leading-relaxed whitespace-pre-line last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * StorySection 컴포넌트 - 스토리 아코디언 영역
 *
 * Props:
 * @param {Array} sections - 섹션 배열 [Required]
 *
 * Example usage:
 * <StorySection sections={sections} />
 */
function StorySection({ sections }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <GlassCard>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 text-center text-2xl font-bold text-gray-800"
      >
        About Me
      </motion.h2>
      <div className="space-y-3">
        {sections.map((section, index) => (
          <AccordionItem
            key={section.id}
            section={section}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            index={index}
          />
        ))}
      </div>
    </GlassCard>
  );
}

/**
 * GradientProgressBar 컴포넌트 - 그라데이션 프로그레스 바
 *
 * Props:
 * @param {Object} skill - 스킬 데이터 [Required]
 * @param {number} index - 인덱스 [Required]
 *
 * Example usage:
 * <GradientProgressBar skill={skill} index={0} />
 */
function GradientProgressBar({ skill, index }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.level);
    }, 300 + index * 150);
    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full shadow-lg"
            style={{ backgroundColor: skill.color }}
          />
          <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
            {skill.name}
          </span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="text-sm font-bold text-gray-500"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="relative h-3 overflow-hidden rounded-full bg-gray-200/80">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${skill.color}dd, ${skill.color})`,
            boxShadow: `0 0 20px ${skill.color}60`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 + index * 0.15 }}
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full opacity-50"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, transparent, white, transparent)`,
            animation: 'shimmer 2s infinite',
          }}
        />
      </div>
    </motion.div>
  );
}

/**
 * SkillsSection 컴포넌트 - 스킬 영역
 *
 * Props:
 * @param {Array} skills - 스킬 배열 [Required]
 *
 * Example usage:
 * <SkillsSection skills={skills} />
 */
function SkillsSection({ skills }) {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <GlassCard>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8 text-center text-2xl font-bold text-gray-800"
      >
        Skills
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.2 }}
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-400">
              {category}
            </h3>
            <div className="space-y-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <GradientProgressBar
                    key={skill.name}
                    skill={skill}
                    index={index + catIndex * 3}
                  />
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}

/**
 * AboutPage 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutPage />
 */
function AboutPage() {
  const { basicInfo, sections, skills } = usePortfolio();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-200 opacity-30 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-200 opacity-30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200 opacity-20 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <ProfileSection basicInfo={basicInfo} />
          <StorySection sections={sections} />
          <SkillsSection skills={skills} />
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}

export default AboutPage;
