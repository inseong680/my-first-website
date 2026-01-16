import { Card, CardContent } from '@/components/ui/card';

/**
 * SkillSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <SkillSection />
 */
function SkillSection() {
  return (
    <section className="py-12 md:py-16">
      <Card className="border-dashed">
        <CardContent className="flex min-h-[300px] flex-col items-center justify-center p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Skill Tree
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default SkillSection;
