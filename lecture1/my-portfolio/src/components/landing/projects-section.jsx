import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    <section id="projects" className="py-12 md:py-16">
      <div className="flex flex-col gap-8">
        {/* 섹션 제목 */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-blue-900">
            Projects
          </h2>
          <p className="mt-2 text-muted-foreground">
            제가 작업한 프로젝트들입니다
          </p>
        </div>

        {/* 프로젝트 그리드 */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <p className="text-muted-foreground">불러오는 중...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="flex justify-center py-12">
            <p className="text-muted-foreground">등록된 프로젝트가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* 더 보기 버튼 */}
        {projects.length > 0 && (
          <div className="flex justify-center">
            <Link to="/projects">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                모든 프로젝트 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
