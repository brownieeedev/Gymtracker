'use client';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
//Icons
import AddIcon from '@mui/icons-material/Add';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

type LinkButtonProps = {
  title: string;
  navigateTo: string;
  className?: string;
};

export default function LinkButton({
  title,
  navigateTo,
  className,
}: LinkButtonProps) {
  return (
    <Link
      className={twMerge(
        'w-[100%] rounded-md hover:text-sky-500 hover:bg-transparent text-center border hover:border-sky-500 p-2 bg-sky-500 text-white',
        className
      )}
      href={navigateTo}
    >
      <div className="flex select-none cursor-pointer  justify-center items-center gap-1">
        <span>{title}</span>
        <FitnessCenterIcon sx={{ pt: '1px' }} />
      </div>
    </Link>
  );
}
