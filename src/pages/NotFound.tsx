import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  useEffect(() => {
    let meta = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
    }
    meta.content = 'noindex, nofollow';
    document.title = '404 — Asia Nature Limited';
    return () => {
      meta?.remove();
    };
  }, []);

  return <div className="min-h-screen flex items-center justify-center bg-[#F9F8F6] text-[#1A1A1A] px-6">
    <div className="max-w-md text-center">
      <p className="text-[#2F4F3E] font-medium tracking-widest uppercase text-xs mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2F4F3E] mb-6">Page introuvable</h1>
      <p className="text-[#4A4A4A] mb-8">Cette page n'existe pas. Page not found.</p>
      <Link to="/fr" className="inline-block px-6 py-3 bg-[#2F4F3E] text-white hover:bg-[#1F3F2E] transition-colors">
        Retour à l'accueil
      </Link>
    </div>
  </div>;
}
