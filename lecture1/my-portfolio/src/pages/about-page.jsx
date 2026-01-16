import { Card, CardContent } from '@/components/ui/card';

/**
 * AboutPage 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutPage />
 */
function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="border-dashed">
        <CardContent className="flex min-h-[500px] flex-col items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              About Me
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AboutPage;
