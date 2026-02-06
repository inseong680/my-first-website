import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

/**
 * Navigation 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <Navigation />
 */
function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0f1a]/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          to="/"
          className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Portfolio
        </Link>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-all duration-300',
                location.pathname === item.path
                  ? 'text-teal-400'
                  : 'text-gray-400 hover:text-teal-300'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
