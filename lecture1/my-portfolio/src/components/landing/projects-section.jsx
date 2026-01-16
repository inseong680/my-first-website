import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/**
 * ProjectsSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
  return (
    <section className="py-12 md:py-16">
      <Card className="border-dashed">
        <CardContent className="flex min-h-[300px] flex-col items-center justify-center p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Projects
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
            </p>
            <Button asChild className="mt-6">
              <Link to="/projects">더 보기</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default ProjectsSection;
