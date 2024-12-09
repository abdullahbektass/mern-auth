import { Route, Routes, Navigate } from 'react-router-dom';

import FloatingShape from './components/floatingShape';

import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import DashboardPage from './pages/DashboardPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import { useAuthStore } from './store/authStore';
import { useEffect } from 'react';

function App() {
  const { isChecingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // protect routes that require authentication
  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore();

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    if (!user.isVerified) {
      return <Navigate to="/verify-email" replace />;
    }

    return children;
  };

  // redirect authenticated users to the home page
  const RedirectAuthenticatedUser = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore();

    if (isAuthenticated && user.isVerified) {
      return <Navigate to="/" replace />;
    }

    return children;
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-800 via-sky-900 
    to-cyan-800 flex items-center justify-center relative overflow-hidden"
    >
      <FloatingShape color="bg-sky-500" size="w-32 h-32" top="30%" left="5%" delay={0} />
      <FloatingShape color="bg-sky-700" size="w-32 h-32" top="50%" left="20%" delay={1} />
      <FloatingShape color="bg-sky-300" size="w-32 h-32" top="40%" left="35%" delay={4} />
      <FloatingShape color="bg-sky-500" size="w-32 h-32" top="55%" left="50%" delay={2} />
      <FloatingShape color="bg-sky-700" size="w-32 h-32" top="35%" left="65%" delay={1} />
      <FloatingShape color="bg-sky-300" size="w-32 h-32" top="15%" left="70%" delay={5} />
      <FloatingShape color="bg-sky-600" size="w-32 h-32" top="40%" left="85%" delay={2} />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
