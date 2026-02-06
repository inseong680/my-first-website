import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { User, GraduationCap, Code, Sparkles, ArrowRight, BookOpen, Lightbulb } from 'lucide-react';

/**
 * MiniAvatar 컴포넌트 - 홈용 미니 네온 아바타
 *
 * Props: 없음
 *
 * Example usage:
 * <MiniAvatar />
 */
function MiniAvatar() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="relative"
    >
      <div
        className="absolute -inset-2 rounded-full opacity-50"
        style={{
          background: 'conic-gradient(from 0deg, #2dd4bf, #38bdf8, #a78bfa, #2dd4bf)',
          animation: 'neon-spin 4s linear infinite',
          filter: 'blur(6px)',
        }}
      />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#0f1729] shadow-xl md:h-24 md:w-24">
        <User className="h-10 w-10 text-teal-400 md:h-12 md:w-12" />
      </div>
    </motion.div>
  );
}

/**
 * HomeBadge 컴포넌트 - 다크 테마 배지
 *
 * Props:
 * @param {ReactNode} icon - 아이콘 [Required]
 * @param {string} label - 라벨 [Required]
 * @param {string} className - 추가 클래스 [Optional]
 *
 * Example usage:
 * <HomeBadge icon={<Code />} label="웹 개발" />
 */
function HomeBadge({ icon, label, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-xs font-medium ${className}`}
    >
      {icon}
      {label}
    </span>
  );
}

/**
 * SectionPreview 컴포넌트 - 다크 테마 섹션 미리보기
 *
 * Props:
 * @param {Object} section - 섹션 데이터 [Required]
 * @param {number} index - 인덱스 [Required]
 *
 * Example usage:
 * <SectionPreview section={section} index={0} />
 */
function SectionPreview({ section, index }) {
  const iconMap = {
    BookOpen: <BookOpen className="h-4 w-4" />,
    Lightbulb: <Lightbulb className="h-4 w-4" />,
  };

  const colors = [
    { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/20' },
    { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  ];

  const color = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.1 }}
      className={`rounded-lg border ${color.border} ${color.bg} p-3`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className={color.text}>{iconMap[section.icon]}</span>
        <span className={`text-sm font-medium ${color.text}`}>{section.title}</span>
      </div>
      <p className="text-xs text-gray-400 line-clamp-2">
        {section.content.split('\n\n')[0]}
      </p>
    </motion.div>
  );
}

/**
 * AboutSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutSection />
 */
function AboutSection() {
  const { getHomeData } = usePortfolio();
  const homeData = getHomeData();

  return (
    <section className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          About Me
        </h2>
        <p className="mt-2 text-gray-500">
          저에 대해 간단히 소개합니다
        </p>
      </motion.div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <MiniAvatar />

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-white md:text-2xl">
                {homeData.name}
              </h3>
              <p className="mt-1 text-sm text-gray-400">{homeData.shortIntro}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-3 flex flex-wrap gap-2"
            >
              <HomeBadge
                icon={<GraduationCap className="h-3 w-3" />}
                label={homeData.school}
                className="bg-teal-500/10 text-teal-300"
              />
              <HomeBadge
                icon={<Code className="h-3 w-3" />}
                label={homeData.major}
                className="bg-blue-500/10 text-blue-300"
              />
              <HomeBadge
                icon={<Sparkles className="h-3 w-3" />}
                label={homeData.status}
                className="bg-purple-500/10 text-purple-300"
              />
            </motion.div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {homeData.homeSections.map((section, index) => (
                <SectionPreview key={section.id} section={section} index={index} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex justify-center md:justify-end"
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-lg border border-teal-500/30 bg-teal-500/10 px-5 py-2.5 text-sm font-medium text-teal-400 transition-all duration-300 hover:bg-teal-500/20 hover:shadow-lg hover:shadow-teal-500/10"
          >
            더 알아보기
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
