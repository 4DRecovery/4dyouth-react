import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 2000); // 2-second delay
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="dark:bg-black dark:text-white bg-background-warm text-text-main min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold text-purple-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 max-w-md">
        Redirecting you to the homepage...
      </p>
    </section>
  );
}
