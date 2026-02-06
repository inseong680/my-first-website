import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { ArrowRight } from 'lucide-react';

/**
 * HomeSkillBar 컴포넌트 - 홈용 스킬 프로그레스 바
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
            className="h-3 w-3 rounded-full shadow-md"
            style={{ backgroundColor: skill.color }}
          />
          <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-sm font-bold text-gray-500">{skill.level}%</span>
      </div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-gray-200/80">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
            boxShadow: `0 0 15px ${skill.color}50`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
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
    <section className="py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Top Skills
        </h2>
        <p className="mt-2 text-muted-foreground">
          가장 자신 있는 기술 스택입니다
        </p>
      </motion.div>

      <Card className="overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 shadow-xl">
        <CardContent className="p-6 md:p-8">
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
            <Button variant="outline" asChild className="group">
              <Link to="/about" className="inline-flex items-center gap-2">
                전체 스킬 보기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </section>
  );
}

export default SkillSection;
