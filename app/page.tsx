import Image from "next/image";
//Components
import CurrentDate from "./ui/current-date";
import TrainingStats from "./ui/trainingStats";

export default function Home() {
  return (
    <main className="min-h-screen pt-2">
      <div className="max-w-[1000px] mx-auto">
        <CurrentDate />
        <div className="mt-5 p-3 rounded-md">
          <TrainingStats />
        </div>
      </div>
    </main>
  );
}
