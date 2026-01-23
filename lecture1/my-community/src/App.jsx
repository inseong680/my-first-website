import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';
import PostCreatePage from './pages/PostCreatePage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/posts" replace /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/login"
          element={
            user ? <Navigate to="/posts" replace /> : <LoginPage onLogin={handleLogin} />
          }
        />
        <Route
          path="/register"
          element={
            user ? <Navigate to="/posts" replace /> : <RegisterPage />
          }
        />
        <Route
          path="/posts"
          element={
            user ? <PostListPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/posts/:id"
          element={
            user ? <PostDetailPage user={user} /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/posts/create"
          element={
            user ? <PostCreatePage user={user} /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
