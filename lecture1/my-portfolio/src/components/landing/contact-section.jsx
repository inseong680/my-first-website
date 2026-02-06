import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Twitter, Send, User, MessageSquare, Briefcase, HelpCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

/**
 * ContactSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    author_name: '',
    message: '',
    email: '',
    occupation: '',
    how_found: '',
    emoji: '😊'
  });

  const emojis = ['😊', '👍', '❤️', '🎉', '🚀', '💡', '☕', '🌟'];

  const howFoundOptions = [
    '검색엔진',
    '소셜미디어',
    '지인 추천',
    '포트폴리오 사이트',
    '기타'
  ];

  useEffect(() => {
    fetchGuestbook();
  }, []);

  const fetchGuestbook = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('portfolio_guestbook')
      .select('id, author_name, message, occupation, emoji, created_at')
      .order('created_at', { ascending: false })
      .limit(10);

    if (!error && data) {
      setGuestbookEntries(data);
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.author_name.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    const { error } = await supabase
      .from('portfolio_guestbook')
      .insert([{
        author_name: formData.author_name.trim(),
        message: formData.message.trim(),
        email: formData.email.trim() || null,
        occupation: formData.occupation.trim() || null,
        how_found: formData.how_found || null,
        emoji: formData.emoji
      }]);

    if (!error) {
      setFormData({
        author_name: '',
        message: '',
        email: '',
        occupation: '',
        how_found: '',
        emoji: '😊'
      });
      fetchGuestbook();
    }
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="flex flex-col gap-8">
        {/* 섹션 제목 */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-blue-900">
            Contact
          </h2>
          <p className="mt-2 text-muted-foreground">
            연락처 및 방명록
          </p>
        </div>

        {/* 연락처 카드 */}
        <Card className="border border-blue-100 bg-gradient-to-br from-blue-50 to-white">
          <CardContent className="p-6">
            <div className="flex flex-col items-center gap-6">
              {/* 이메일 */}
              <div className="flex items-center gap-3 text-blue-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">contact@example.com</p>
                </div>
              </div>

              {/* SNS 링크 */}
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:bg-blue-700 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:bg-blue-700 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition-all hover:bg-blue-700 hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 방명록 섹션 */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-center text-blue-900">
            방명록
          </h3>

          {/* 방명록 작성 폼 */}
          <Card className="border border-blue-100">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* 이름 (필수) */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-blue-800">
                    <User className="h-4 w-4" />
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="author_name"
                    value={formData.author_name}
                    onChange={handleChange}
                    placeholder="이름을 입력하세요"
                    required
                    maxLength={50}
                    className="rounded-lg border border-blue-200 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* 메시지 (필수) */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-blue-800">
                    <MessageSquare className="h-4 w-4" />
                    메시지 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="방명록을 남겨주세요"
                    required
                    rows={3}
                    className="rounded-lg border border-blue-200 px-4 py-2 resize-none focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* 선택 정보들 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 이메일 (선택) */}
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-blue-800">
                      <Mail className="h-4 w-4" />
                      이메일 <span className="text-xs text-muted-foreground">(비공개)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="rounded-lg border border-blue-200 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  {/* 소속/직업 (선택) */}
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-blue-800">
                      <Briefcase className="h-4 w-4" />
                      소속/직업
                    </label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="회사, 학교 등"
                      maxLength={100}
                      className="rounded-lg border border-blue-200 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                </div>

                {/* 어떻게 알게 되었는지 */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-blue-800">
                    <HelpCircle className="h-4 w-4" />
                    어떻게 알게 되셨나요?
                  </label>
                  <select
                    name="how_found"
                    value={formData.how_found}
                    onChange={handleChange}
                    className="rounded-lg border border-blue-200 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">선택하세요</option>
                    {howFoundOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* 이모지 선택 */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-blue-800">
                    이모지 선택
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {emojis.map(emoji => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, emoji }))}
                        className={`h-10 w-10 rounded-full text-xl transition-all ${
                          formData.emoji === emoji
                            ? 'bg-blue-600 scale-110 shadow-lg'
                            : 'bg-blue-100 hover:bg-blue-200'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 제출 버튼 */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isSubmitting ? (
                    '등록 중...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      방명록 남기기
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* 방명록 목록 */}
          <div className="flex flex-col gap-4">
            {isLoading ? (
              <p className="text-center text-muted-foreground">불러오는 중...</p>
            ) : guestbookEntries.length === 0 ? (
              <p className="text-center text-muted-foreground">
                아직 방명록이 없습니다. 첫 번째 방명록을 남겨주세요!
              </p>
            ) : (
              guestbookEntries.map(entry => (
                <Card key={entry.id} className="border border-blue-50 bg-white">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xl shrink-0">
                        {entry.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium text-blue-900">
                            {entry.author_name}
                          </span>
                          {entry.occupation && (
                            <span className="text-xs text-muted-foreground bg-blue-50 px-2 py-0.5 rounded">
                              {entry.occupation}
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground">
                            {formatDate(entry.created_at)}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-foreground break-words">
                          {entry.message}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
