import { lusitana } from './utils/fonts';
import { generateYAxis } from '../lib/helperFunctions';

//Database query
import { getWeightsOfUser } from '../lib/databaseQueries';

//Types
import { WeightChartDataType } from '../lib/helperFunctions';

export default async function WeightChart() {
  const weightOnDays = await getWeightsOfUser(
    'c6fdfeb8-5437-48c8-b7da-fca3877a03c2'
  );
  console.log(weightOnDays);
  const chartHeight = 350;
  // NOTE: comment in this code when you get to this point in the course

  const { yAxisLabels, topLabel } = generateYAxis(weightOnDays);

  if (!weightOnDays || weightOnDays?.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className=" w-full md:col-span-4 mt-4 max-w-[600px] mx-auto">
      <h2 className={'mb-3 text-xl md:text-xl text-center'}>
        Previous weights
      </h2>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <div className="rounded-xl bg-gray-50 p-4">
        <div className="mt-0 grid  grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4">
          {weightOnDays.map((item, index) => (
            <div key={index} className="flex flex-col  items-center gap-2">
              <div
                className="w-full rounded-md bg-sky-400 "
                style={{
                  height: `${(chartHeight / topLabel) * item.weight * 5}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {item.day.toDateString().split(' ')[2]}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          {/* <CalendarIcon className="h-5 w-5 text-gray-500" /> */}
          <h3 className="ml-2 text-sm text-gray-500 ">Last Days</h3>
        </div>
      </div>
    </div>
  );
}
