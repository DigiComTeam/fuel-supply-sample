import { useQuery } from "@tanstack/react-query";
import { IFetchTankLastLevelsResponse } from "../../lib/interfaces/tank";
import { fetchTankLastLevels } from "../../lib/services/tank";
import { GaugeChart } from "../../components/gauge";

export const HomePage = () => {
  const { isLoading, isRefetching, data } =
    useQuery<IFetchTankLastLevelsResponse>({
      queryKey: ["tank-last-levels", { stationCode: 8413001 }],
      queryFn: () => fetchTankLastLevels({ stationCode: 8413001 }),
    });

  return (
    <main className="p-10">
      {isLoading || isRefetching || !data ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 gap-6">
          {data.data.levels.map((level) => (
            <div
              key={level.tankNo}
              className="bg-white rounded-md shadow-sm p-6 flex flex-col gap-10"
            >
              <div className="flex justify-center text-xl border-b-[1px] py-2">
                <h2 className="font-semibold">Tank {level.tankNo}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="bg-purple-100 text-xs text-purple-500 px-2 py-1 rounded-full">
                  Capacity: {level.capacity}
                </button>
                <button className="bg-purple-100 text-xs text-purple-500 px-2 py-1 rounded-full">
                  Fuel Level LT: {level.fuelLevelLT}
                </button>
                <button className="bg-purple-100 text-xs text-purple-500 px-2 py-1 rounded-full">
                  Fuel Level MM: {level.fuelLevelMM}
                </button>
                <button className="bg-purple-100 text-xs text-purple-500 px-2 py-1 rounded-full">
                  Water Level LT: {level.waterLevelLT}
                </button>
                <button className="bg-purple-100 text-xs text-purple-500 px-2 py-1 rounded-full">
                  Water Level MM: {level.waterLevelMM}
                </button>
              </div>
              <div className="flex justify-between">
                <GaugeChart
                  value={parseFloat(
                    ((level.fuelLevelLT / level.capacity) * 100).toFixed(2)
                  )}
                  radius={120}
                />
                <GaugeChart
                  value={parseFloat(
                    ((level.waterLevelLT / level.capacity) * 100).toFixed(2)
                  )}
                  radius={120}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};
