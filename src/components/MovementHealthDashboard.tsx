import { CheckCircle2 } from "lucide-react";

interface MovementHealthDashboardProps {
  accuracy: number;
  amplitude: number;
  beatError: number;
  waterResistance: string;
  lastService: string;
}

export default function MovementHealthDashboard({
  accuracy,
  amplitude,
  beatError,
  waterResistance,
  lastService,
}: MovementHealthDashboardProps) {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
      <h3 className="text-[16px] font-bold text-black mb-4">Movement Health Dashboard</h3>

      {/* Metrics Grid */}
      <div className="grid grid-cols-4 gap-x-4 gap-y-3 mb-4">
        {/* Accuracy */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[12px] font-semibold text-gray-600">Accuracy</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
          </div>
          <p className="text-[14px] font-bold text-black">
            {accuracy > 0 ? "+" : ""}{accuracy} sec/day
          </p>
        </div>

        {/* Amplitude */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[12px] font-semibold text-gray-600">Amplitude</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            <p className="text-[14px] font-bold text-black">{amplitude} degrees</p>
          </div>
        </div>

        {/* Beat Error */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[12px] font-semibold text-gray-600">Beat Error</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            <p className="text-[14px] font-bold text-black">{beatError.toFixed(1)}ms</p>
          </div>
        </div>

        {/* Water Resistance */}
        <div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[12px] font-semibold text-gray-600">Water Resistance</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            <p className="text-[14px] font-bold text-black">{waterResistance} Passed</p>
          </div>
        </div>

      </div>

      {/* Last Service Row */}
      <div className="border-t border-blue-200 pt-3">
        <span className="text-[12px] font-semibold text-gray-600">Last Service</span>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          <span className="text-[14px] font-bold text-black">{lastService}</span>
        </div>
      </div>
    </div>
  );
}
