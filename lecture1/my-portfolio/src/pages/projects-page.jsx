import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ui/project-card';
import { supabase } from '@/lib/supabase';

/**
 * ProjectsPage 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsPage />
 */
function ProjectsPage() {
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
      .order('sort_order', { ascending: true });

    if (!error && data) {
      setProjects(data);
    }
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/3 h-72 w-72 rounded-full bg-teal-500/8 blur-[120px]" />
      <div className="absolute bottom-20 right-1/3 h-72 w-72 rounded-full bg-blue-500/8 blur-[120px]" />

      <div className="relative container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-8"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Projects
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              제가 작업한 모든 프로젝트들을 소개합니다
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-16">
              <p className="text-gray-500">불러오는 중...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="flex justify-center py-16">
              <p className="text-gray-500">등록된 프로젝트가 없습니다.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          )}

          {!isLoading && projects.length > 0 && (
            <div className="text-center">
              <p className="text-sm text-gray-500">
                총 {projects.length}개의 프로젝트
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectsPage;
