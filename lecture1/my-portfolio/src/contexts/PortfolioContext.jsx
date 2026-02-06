import { createContext, useContext } from 'react';

/**
 * PortfolioContext
 *
 * 포트폴리오 전체 데이터를 통합 관리하는 Context
 * basicInfo, sections, skills 데이터를 포함
 */

const portfolioData = {
  basicInfo: {
    name: '김상구',
    nameEn: 'Sanggu Kim',
    school: '컴퓨터공학과',
    major: '웹 개발',
    status: '신입/1년차',
    email: 'sanggu@example.com',
    github: 'https://github.com/sanggu',
    shortIntro: '가치를 만드는 프론트엔드 개발자',
    fullIntro: '안녕하세요! 무에서 유를 창조하는 즐거움에 빠져 웹 개발을 시작한 김상구입니다. 단순히 코드를 치는 것이 아니라, 사용자에게 진정한 가치를 전달하는 개발자가 되고 싶습니다.',
  },
  sections: [
    {
      id: 'story',
      title: '나의 개발 스토리',
      subtitle: '생각을 현실로 만드는 코드의 매력에 빠지다',
      icon: 'BookOpen',
      content: `생각을 현실로 만드는 코드의 매력에 빠지다. 무에서 유를 창조하는 즐거움과 사용자 경험 개선에 대한 열정으로 개발에 임하고 있습니다.

**무에서 유를 창조하는 즐거움**
빈 에디터에서 시작해 하나의 웹 서비스가 완성되는 과정은 매번 새로운 감동을 줍니다. 처음 HTML로 자기소개 페이지를 만들었을 때, 코드 한 줄이 화면 위에 살아 움직이던 그 순간이 저를 개발의 세계로 이끌었습니다.

**사용자 경험에 대한 열정**
버튼 하나의 위치, 로딩 속도 0.1초의 차이가 사용자의 만족도를 바꿀 수 있다는 것을 경험하면서, "기능을 만드는 것"을 넘어 "경험을 설계하는 것"에 집중하게 되었습니다. 사용자가 불편함을 느끼기 전에 먼저 해결하는 개발자가 되고 싶습니다.

**끊임없는 성장**
매일 새로운 기술을 익히고, 어제보다 나은 코드를 작성하기 위해 노력합니다. 작은 프로젝트라도 최선을 다해 완성하는 과정에서 진짜 실력이 쌓인다고 믿습니다.`,
      showInHome: true,
    },
    {
      id: 'philosophy',
      title: '개발 철학',
      subtitle: '동료의 시간을 아끼는 코드',
      icon: 'Lightbulb',
      content: `동료의 시간을 아끼는 코드. 가독성과 책임감 있는 개발 태도로, 협업하기 좋은 깔끔한 코드를 지향합니다.

**가독성이 곧 생산성입니다**
변수명 하나, 함수명 하나에도 의미를 담습니다. 내가 작성한 코드를 6개월 후의 내가, 그리고 처음 보는 동료가 바로 이해할 수 있어야 합니다. 읽기 좋은 코드가 결국 팀 전체의 시간을 아낍니다.

**책임감 있는 개발 태도**
"일단 돌아가니까"가 아니라 "이게 정말 최선인가?"를 항상 스스로에게 질문합니다. 버그가 발생하면 임시 방편이 아닌 근본 원인을 찾아 해결하고, 같은 문제가 반복되지 않도록 구조를 개선합니다.

**함께 성장하는 협업**
코드 리뷰는 서로 배우는 가장 좋은 기회라고 생각합니다. 피드백을 열린 마음으로 받아들이고, 제 경험과 의견도 적극적으로 공유하며 팀과 함께 성장하겠습니다.`,
      showInHome: true,
    },
    {
      id: 'personal',
      title: '개인적인 이야기',
      subtitle: '렌즈와 기록이 키운 개발자의 눈',
      icon: 'Heart',
      content: `사진 촬영 취미와 기록하는 습관은 디테일한 관찰력을 길러주며, 이는 UI의 완성도를 높이는 개발 역량으로 이어집니다.

**사진 촬영이 길러준 관찰력**
카메라를 들고 거리를 걷다 보면 빛의 각도, 색의 조화, 사물의 배치 같은 디테일이 눈에 들어옵니다. 이렇게 훈련된 시각적 감각은 UI 요소의 정렬, 여백, 색상 밸런스를 잡을 때 큰 도움이 됩니다. 좋은 사진과 좋은 인터페이스는 결국 "보는 사람의 시선을 자연스럽게 이끄는 것"이라는 공통점이 있습니다.

**기록하는 습관이 만드는 성장**
오늘 배운 것, 해결한 버그, 떠오른 아이디어를 매일 기록합니다. 처음에는 단순한 메모였지만, 쌓여가는 기록은 문제 해결의 패턴을 발견하게 해주고, 비슷한 이슈를 더 빠르게 해결하는 자산이 됩니다.

**일상이 곧 영감**
새로운 카페의 인테리어에서 레이아웃 아이디어를 얻고, 잘 만든 앱의 인터랙션에서 구현 방법을 고민합니다. 개발은 책상 앞에서만 하는 것이 아니라, 일상의 모든 순간이 학습의 기회라고 생각합니다.`,
      showInHome: false,
    },
  ],
  skills: [
    { name: 'HTML', level: 80, category: 'Frontend', color: '#E34F26' },
    { name: 'CSS', level: 75, category: 'Frontend', color: '#1572B6' },
    { name: 'JavaScript', level: 70, category: 'Frontend', color: '#F7DF1E' },
    { name: 'React', level: 60, category: 'Framework', color: '#61DAFB' },
    { name: 'Tailwind CSS', level: 65, category: 'Framework', color: '#06B6D4' },
    { name: 'Figma', level: 65, category: 'Design', color: '#F24E1E' },
    { name: 'Git', level: 55, category: 'Tools', color: '#F05032' },
  ],
};

/**
 * 홈 탭에 보여줄 요약 데이터를 추출하는 함수
 * @returns {Object} 홈 탭용 요약 데이터
 */
const getHomeData = () => {
  const topSkills = [...portfolioData.skills]
    .sort((a, b) => b.level - a.level)
    .slice(0, 4);

  const homeSections = portfolioData.sections.filter(
    (section) => section.showInHome
  );

  return {
    name: portfolioData.basicInfo.name,
    school: portfolioData.basicInfo.school,
    major: portfolioData.basicInfo.major,
    status: portfolioData.basicInfo.status,
    shortIntro: portfolioData.basicInfo.shortIntro,
    topSkills,
    homeSections,
  };
};

/**
 * 섹션 ID로 섹션 데이터를 가져오는 함수
 * @param {string} id - 섹션 ID
 * @returns {Object|null} 섹션 데이터
 */
const getSectionById = (id) => {
  return portfolioData.sections.find((section) => section.id === id) || null;
};

const PortfolioContext = createContext(null);

/**
 * PortfolioProvider 컴포넌트
 *
 * Props:
 * @param {ReactNode} children - 자식 컴포넌트 [Required]
 *
 * Example usage:
 * <PortfolioProvider><App /></PortfolioProvider>
 */
function PortfolioProvider({ children }) {
  const value = {
    ...portfolioData,
    getHomeData,
    getSectionById,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

/**
 * usePortfolio 커스텀 훅
 *
 * @returns {Object} 포트폴리오 Context 데이터
 *
 * Example usage:
 * const { basicInfo, skills, getHomeData } = usePortfolio();
 */
function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}

export { PortfolioProvider, usePortfolio };
