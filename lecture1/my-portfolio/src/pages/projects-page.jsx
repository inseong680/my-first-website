import { Card, CardContent } from '@/components/ui/card';

/**
 * ProjectsPage 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsPage />
 */
function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="border-dashed">
        <CardContent className="flex min-h-[500px] flex-col items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Projects
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProjectsPage;
