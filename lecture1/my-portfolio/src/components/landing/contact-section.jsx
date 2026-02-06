import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  const inputClasses = 'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-gray-200 placeholder-gray-500 backdrop-blur-sm focus:border-teal-500/50 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-colors';

  return (
    <section id="contact" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Contact
        </h2>
        <p className="mt-2 text-gray-500">
          연락처 및 방명록
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {/* 연락처 카드 */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-500/20 bg-teal-500/10">
                <Mail className="h-5 w-5 text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-200">contact@example.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { href: 'https://github.com', icon: <Github className="h-5 w-5" /> },
                { href: 'https://linkedin.com', icon: <Linkedin className="h-5 w-5" /> },
                { href: 'https://twitter.com', icon: <Twitter className="h-5 w-5" /> },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-teal-500/50 hover:bg-teal-500/20 hover:text-teal-400 hover:shadow-lg hover:shadow-teal-500/10 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 방명록 섹션 */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-center text-white">
            방명록
          </h3>

          {/* 방명록 작성 폼 */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <User className="h-4 w-4 text-teal-400" />
                  이름 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="author_name"
                  value={formData.author_name}
                  onChange={handleChange}
                  placeholder="이름을 입력하세요"
                  required
                  maxLength={50}
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <MessageSquare className="h-4 w-4 text-teal-400" />
                  메시지 <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="방명록을 남겨주세요"
                  required
                  rows={3}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Mail className="h-4 w-4 text-teal-400" />
                    이메일 <span className="text-xs text-gray-500">(비공개)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className={inputClasses}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Briefcase className="h-4 w-4 text-teal-400" />
                    소속/직업
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    placeholder="회사, 학교 등"
                    maxLength={100}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <HelpCircle className="h-4 w-4 text-teal-400" />
                  어떻게 알게 되셨나요?
                </label>
                <select
                  name="how_found"
                  value={formData.how_found}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">선택하세요</option>
                  {howFoundOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">
                  이모지 선택
                </label>
                <div className="flex gap-2 flex-wrap">
                  {emojis.map(emoji => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, emoji }))}
                      className={`h-10 w-10 rounded-full text-xl transition-all duration-200 ${
                        formData.emoji === emoji
                          ? 'bg-teal-500/30 scale-110 shadow-lg shadow-teal-500/20 ring-1 ring-teal-500/50'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-2.5 text-sm font-medium text-[#0a0f1a] transition-all duration-300 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-50"
              >
                {isSubmitting ? (
                  '등록 중...'
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    방명록 남기기
                  </>
                )}
              </button>
            </form>
          </div>

          {/* 방명록 목록 */}
          <div className="flex flex-col gap-3">
            {isLoading ? (
              <p className="text-center text-gray-500">불러오는 중...</p>
            ) : guestbookEntries.length === 0 ? (
              <p className="text-center text-gray-500">
                아직 방명록이 없습니다. 첫 번째 방명록을 남겨주세요!
              </p>
            ) : (
              guestbookEntries.map(entry => (
                <div
                  key={entry.id}
                  className="rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:border-white/10"
                >
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-xl shrink-0">
                      {entry.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-gray-200">
                          {entry.author_name}
                        </span>
                        {entry.occupation && (
                          <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                            {entry.occupation}
                          </span>
                        )}
                        <span className="text-xs text-gray-600">
                          {formatDate(entry.created_at)}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-400 break-words">
                        {entry.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
