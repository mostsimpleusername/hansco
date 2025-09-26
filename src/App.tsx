import React, { useState, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Lazy load heavy components
const HomePage = lazy(() => import('./components/HomePage').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./components/AboutPage').then(module => ({ default: module.AboutPage })));
const BlogPage = lazy(() => import('./components/BlogPage').then(module => ({ default: module.BlogPage })));
const FAQPage = lazy(() => import('./components/FAQPage').then(module => ({ default: module.FAQPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(module => ({ default: module.ContactPage })));
// Admin dashboard removed; lazy import deleted

export type Page = 'home' | 'about' | 'blog' | 'faq' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  // admin state removed since AdminDashboard is removed

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage onNavigate={(p: Page) => setCurrentPage(p)} />
          </Suspense>
        );
      case 'about':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <AboutPage />
          </Suspense>
        );
      case 'blog':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <BlogPage />
          </Suspense>
        );
      case 'faq':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <FAQPage />
          </Suspense>
        );
      case 'contact':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <ContactPage />
          </Suspense>
        );
      // admin case removed
      default:
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>
        );
    }
  };

  // no special-case rendering for admin page anymore

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}