import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PortfolioProvider } from '@/contexts/PortfolioContext';
import Navigation from '@/components/common/navigation';
import HomePage from '@/pages/home-page';
import AboutPage from '@/pages/about-page';
import ProjectsPage from '@/pages/projects-page';

/**
 * PageTransition 컴포넌트 - 페이지 전환 애니메이션 래퍼
 *
 * Props:
 * @param {ReactNode} children - 자식 컴포넌트 [Required]
 *
 * Example usage:
 * <PageTransition><HomePage /></PageTransition>
 */
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

/**
 * AnimatedRoutes 컴포넌트 - 애니메이션이 적용된 라우트
 *
 * Props: 없음
 *
 * Example usage:
 * <AnimatedRoutes />
 */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <ProjectsPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

/**
 * App 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <App />
 */
function App() {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <AnimatedRoutes />
          </main>
        </div>
      </BrowserRouter>
    </PortfolioProvider>
  );
}

export default App;
