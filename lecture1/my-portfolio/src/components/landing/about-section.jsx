import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/**
 * AboutSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutSection />
 */
function AboutSection() {
  return (
    <section className="py-12 md:py-16">
      <Card className="border-dashed">
        <CardContent className="flex min-h-[300px] flex-col items-center justify-center p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              About Me
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
            </p>
            <Button asChild className="mt-6">
              <Link to="/about">더 알아보기</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default AboutSection;
