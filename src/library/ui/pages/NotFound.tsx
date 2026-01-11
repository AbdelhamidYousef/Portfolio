import { Link } from 'react-router';

const NotFound = () => {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary-500/5 dark:bg-primary-500/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-primary-600/5 dark:bg-primary-600/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* 404 Number */}
        <h1 className="font-headlines font-black text-[clamp(8rem,25vw,14rem)] leading-none tracking-tight text-transparent bg-clip-text bg-linear-to-br from-primary-400 via-primary-600 to-primary-800 dark:from-primary-200 dark:via-primary-500 dark:to-primary-700 select-none animate-slide-up-md">
          404
        </h1>

        {/* Message */}
        <div className="mt-2 space-y-3 animate-slide-up-md [animation-delay:150ms] opacity-0 [animation-fill-mode:forwards]">
          <h2 className="font-headlines text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-200 tracking-wide">
            Page Not Found
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Looks like you've wandered into uncharted territory. The page you're
            looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 animate-slide-up-md [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Decorative element */}
        <div className="mt-16 flex justify-center gap-2 animate-slide-up-md [animation-delay:450ms] opacity-0 [animation-fill-mode:forwards]">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-primary-500/60 dark:bg-primary-400/60"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default NotFound;
