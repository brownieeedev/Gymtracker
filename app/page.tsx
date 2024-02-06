//Components
import CurrentDate from './ui/current-date';
import TrainingStats from './ui/trainingStats';
import LinkButton from './ui/dashboard-button';
import { StatDiv } from './ui/incrementdecrement-button';
import WeightChart from './ui/weight-chart';
import { getLastWeightOfUser } from './lib/databaseQueries';

export default async function Home() {
  const lastWeightOfUser = await getLastWeightOfUser(
    'c6fdfeb8-5437-48c8-b7da-fca3877a03c2'
  );
  return (
    <main className="min-h-screen pt-2">
      <div className="max-w-[1000px] mx-auto">
        <CurrentDate />
        <div className="mt-5 p-3 rounded-md">
          <TrainingStats />
        </div>
        <div className="flex p-3 px-5 max-w-[450px] mx-auto">
          <LinkButton title="Add exercise" navigateTo="/exercises" />
        </div>
        <div className="p-3 flex justify-center items-center">
          <StatDiv title="Current weight" number={lastWeightOfUser} />
        </div>
        <div className="p-3">
          <WeightChart />
        </div>
      </div>
    </main>
  );
}
