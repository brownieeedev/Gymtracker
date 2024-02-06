import { getNumberOfExercises } from '../lib/databaseQueries';
import { StatDiv } from './incrementdecrement-button';

export default async function TrainingStats() {
  const numberOfExercises = await getNumberOfExercises();
  console.log(numberOfExercises);
  return (
    <div className="container flex items-center justify-center flex-wrap gap-y-3 gap-x-2">
      <StatDiv title="Workouts this week" number={numberOfExercises} />
      <StatDiv title="Cardio training" cardio={true} />
    </div>
  );
}
