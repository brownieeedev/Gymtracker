//Fonts
import { rubik } from '@/app/ui/utils/fonts';
//Packages
import { getISOWeek } from 'date-fns';

export default function CurrentDate() {
  const today = new Date().toLocaleDateString();
  const dayofWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const weekNumberOfYear = getISOWeek(new Date());

  return (
    <>
      <div className="container flex justify-between">
        <div>{dayofWeek}</div>
        <div className={`${rubik.className} antialiased`}>{today}</div>
      </div>
      <div
        className={`${rubik.className} antialiased text-3xl text-center mt-5`}
      >
        Week {weekNumberOfYear}
      </div>
    </>
  );
}
