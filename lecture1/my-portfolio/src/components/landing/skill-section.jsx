import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { ArrowRight } from 'lucide-react';

/**
 * CountingNumber 컴포넌트 - 숫자 카운팅 애니메이션
 *
 * Props:
 * @param {number} target - 목표 숫자 [Required]
 * @param {boolean} isVisible - 화면 노출 여부 [Required]
 * @param {number} delay - 딜레이(ms) [Optional, 기본값: 0]
 *
 * Example usage:
 * <CountingNumber target={80} isVisible={true} delay={300} />
 */
function CountingNumber({ target, isVisible, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1200;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        start = Math.floor(eased * target);
        setCount(start);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, isVisible, delay]);

  return <span>{count}%</span>;
}

/**
 * HomeSkillBar 컴포넌트 - 다크 테마 그라데이션 스킬 바
 *
 * Props:
 * @param {Object} skill - 스킬 데이터 [Required]
 * @param {number} index - 인덱스 [Required]
 *
 * Example usage:
 * <HomeSkillBar skill={skill} index={0} />
 */
function HomeSkillBar({ skill, index }) {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, 200 + index * 150);
      return () => clearTimeout(timer);
    }
  }, [skill.level, index, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onViewportEnter={() => setIsVisible(true)}
      className="group"
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="h-2.5 w-2.5 rounded-full shadow-lg"
            style={{
              backgroundColor: skill.color,
              boxShadow: `0 0 10px ${skill.color}60`,
            }}
          />
          <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-sm font-bold text-teal-400">
          <CountingNumber
            target={skill.level}
            isVisible={isVisible}
            delay={200 + index * 150}
          />
        </span>
      </div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
            boxShadow: `0 0 20px ${skill.color}40, 0 0 40px ${skill.color}20`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full opacity-40"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            animation: 'shimmer 2s infinite',
          }}
        />
      </div>
    </motion.div>
  );
}

/**
 * SkillSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <SkillSection />
 */
function SkillSection() {
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
          Top Skills
        </h2>
        <p className="mt-2 text-gray-500">
          가장 자신 있는 기술 스택입니다
        </p>
      </motion.div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl md:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          {homeData.topSkills.map((skill, index) => (
            <HomeSkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-teal-500/30 hover:bg-teal-500/10 hover:text-teal-400"
          >
            전체 스킬 보기
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default SkillSection;
