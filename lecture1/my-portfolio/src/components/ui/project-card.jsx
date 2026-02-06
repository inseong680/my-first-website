import { ExternalLink } from 'lucide-react';

/**
 * ProjectCard 컴포넌트 - 다크 Glassmorphism 프로젝트 카드
 *
 * Props:
 * @param {object} project - 프로젝트 데이터 객체 [Required]
 * @param {string} project.title - 프로젝트 제목
 * @param {string} project.description - 프로젝트 설명
 * @param {string[]} project.tech_stack - 기술 스택 배열
 * @param {string} project.detail_url - 배포된 사이트 링크
 * @param {string} project.thumbnail_url - 썸네일 이미지 URL
 *
 * Example usage:
 * <ProjectCard project={projectData} />
 */
function ProjectCard({ project }) {
  const { title, description, tech_stack, detail_url, thumbnail_url } = project;

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/5 hover:-translate-y-1">
      {/* 썸네일 이미지 */}
      <div className="relative aspect-video overflow-hidden bg-[#0f1729]">
        <img
          src={thumbnail_url}
          alt={`${title} 썸네일`}
          className="h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
      </div>

      <div className="p-5">
        {/* 제목 및 링크 */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg text-white line-clamp-1">
            {title}
          </h3>
          <a
            href={detail_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-teal-500/50 hover:bg-teal-500/20 hover:text-teal-400 hover:shadow-lg hover:shadow-teal-500/10"
            aria-label={`${title} 사이트 열기`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* 설명 */}
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">
          {description}
        </p>

        {/* 기술 스택 뱃지 */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tech_stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-white/5 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-teal-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
