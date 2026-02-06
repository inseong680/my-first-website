import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { User, GraduationCap, Code, Sparkles, ArrowRight, BookOpen, Lightbulb } from 'lucide-react';

/**
 * MiniAvatar 컴포넌트 - 홈용 미니 아바타
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
      <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md opacity-60" />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-xl md:h-24 md:w-24">
        <User className="h-10 w-10 text-white md:h-12 md:w-12" />
      </div>
    </motion.div>
  );
}

/**
 * HomeBadge 컴포넌트 - 홈용 배지
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
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${className}`}
    >
      {icon}
      {label}
    </span>
  );
}

/**
 * SectionPreview 컴포넌트 - 섹션 미리보기
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
    { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
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
      <p className="text-xs text-gray-600 line-clamp-2">
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
    <section className="py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          About Me
        </h2>
        <p className="mt-2 text-muted-foreground">
          저에 대해 간단히 소개합니다
        </p>
      </motion.div>

      <Card className="overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 shadow-xl">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <MiniAvatar />

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                  {homeData.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{homeData.shortIntro}</p>
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
                  className="bg-blue-100 text-blue-700"
                />
                <HomeBadge
                  icon={<Code className="h-3 w-3" />}
                  label={homeData.major}
                  className="bg-purple-100 text-purple-700"
                />
                <HomeBadge
                  icon={<Sparkles className="h-3 w-3" />}
                  label={homeData.status}
                  className="bg-green-100 text-green-700"
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
            <Button asChild className="group">
              <Link to="/about" className="inline-flex items-center gap-2">
                더 알아보기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </section>
  );
}

export default AboutSection;
