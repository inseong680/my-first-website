import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

/**
 * ProjectCard 컴포넌트
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
    <Card className="group border border-blue-100 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-300 hover:-translate-y-1">
      {/* 썸네일 이미지 */}
      <div className="relative aspect-video overflow-hidden bg-blue-50">
        <img
          src={thumbnail_url}
          alt={`${title} 썸네일`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* 호버 오버레이 */}
        <div className="absolute inset-0 bg-blue-900/0 transition-all duration-300 group-hover:bg-blue-900/20" />
      </div>

      <CardContent className="p-4">
        {/* 제목 및 링크 */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg text-blue-900 line-clamp-1">
            {title}
          </h3>
          <a
            href={detail_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
            aria-label={`${title} 사이트 열기`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* 설명 */}
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* 기술 스택 뱃지 */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tech_stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
