import { useState, useEffect } from 'react';
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
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-8">
        {/* 페이지 제목 */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-blue-900">
            Projects
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            제가 작업한 모든 프로젝트들을 소개합니다
          </p>
        </div>

        {/* 프로젝트 그리드 */}
        {isLoading ? (
          <div className="flex justify-center py-16">
            <p className="text-muted-foreground">불러오는 중...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="flex justify-center py-16">
            <p className="text-muted-foreground">등록된 프로젝트가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* 프로젝트 수 표시 */}
        {!isLoading && projects.length > 0 && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              총 {projects.length}개의 프로젝트
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPage;
