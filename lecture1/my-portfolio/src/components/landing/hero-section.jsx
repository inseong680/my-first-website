import { Card, CardContent } from '@/components/ui/card';

/**
 * HeroSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <section className="py-12 md:py-24">
      <Card className="border-dashed">
        <CardContent className="flex min-h-[400px] items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Hero Section
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default HeroSection;
