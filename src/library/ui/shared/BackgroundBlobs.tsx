interface BackgroundBlobsProps {
  className?: string;
}

/**
 * Decorative background blobs for visual depth
 *
 * @example
 * <BackgroundBlobs />
 * <BackgroundBlobs className="opacity-50" />
 */
export const BackgroundBlobs = ({ className = '' }: BackgroundBlobsProps) => (
  <div
    className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
  >
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary-600/10 dark:bg-primary-600/5 rounded-full blur-3xl" />
  </div>
);
