import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/ui/project-card';
import { supabase } from '@/lib/supabase';

/**
 * ProjectsSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .limit(4);

    if (!error && data) {
      setProjects(data);
    }
    setIsLoading(false);
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Projects
        </h2>
        <p className="mt-2 text-gray-500">
          제가 작업한 프로젝트들입니다
        </p>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <p className="text-gray-500">불러오는 중...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="flex justify-center py-12">
          <p className="text-gray-500">등록된 프로젝트가 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      )}

      {projects.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-teal-500/30 hover:bg-teal-500/10 hover:text-teal-400"
          >
            모든 프로젝트 보기
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      )}
    </section>
  );
}

export default ProjectsSection;
