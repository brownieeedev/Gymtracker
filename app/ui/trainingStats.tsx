type StatDivProps = {
  title: string;
  number?: number;
};

const StatDiv = ({ title }: StatDivProps) => {
  return (
    <div className="min-h-[140px]  flex flex-col text-sm justify-center items-center w-[45%] max-w-[200px] border border-gray-200 rounded-lg shadow-xl">
      {title}
    </div>
  );
};

export default async function TrainingStats() {
  return (
    <div className="container flex items-center justify-center flex-wrap gap-y-3 gap-x-2">
      <StatDiv title="Workouts this week" />
      <StatDiv title="Total weight lifted" />
      <StatDiv title="Total time spent" />
      <StatDiv title="Total calories burned" />
    </div>
  );
}
