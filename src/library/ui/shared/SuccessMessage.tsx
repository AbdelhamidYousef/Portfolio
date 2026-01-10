import type { ReactNode } from 'react';
import { CheckIcon } from '@/library/ui/svgs/interface';

interface SuccessMessageProps {
  headline: string;
  copy?: string;
  children?: ReactNode;
}

export const SuccessMessage = ({
  headline,
  copy,
  children,
}: SuccessMessageProps) => (
  <div className="h-full flex flex-col items-center justify-center text-center py-8">
    <div className="w-16 h-16 mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
      <CheckIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
    </div>
    <h4 className="text-xl font-semibold text-slate-700 dark:text-white mb-2">
      {headline}
    </h4>
    {copy && <p className="text-slate-500 dark:text-slate-400 mb-6">{copy}</p>}
    {children}
  </div>
);
