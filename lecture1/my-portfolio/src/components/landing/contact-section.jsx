import { Card, CardContent } from '@/components/ui/card';

/**
 * ContactSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  return (
    <section className="py-12 md:py-16">
      <Card className="border-dashed">
        <CardContent className="flex min-h-[300px] flex-col items-center justify-center p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Contact
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default ContactSection;
