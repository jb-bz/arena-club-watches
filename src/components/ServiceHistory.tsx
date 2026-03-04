import type { ServiceRecord } from "@/data/watches";

interface ServiceHistoryProps {
  records: ServiceRecord[];
}

export default function ServiceHistory({ records }: ServiceHistoryProps) {
  return (
    <div>
      <h3 className="text-[18px] font-bold text-black mb-4">Service History</h3>
      <div className="relative pl-4">
        {records.map((record, index) => (
          <div key={index} className="relative pb-6 last:pb-0">
            {/* Vertical connector line */}
            {index < records.length - 1 && (
              <div className="absolute left-0 top-3 bottom-0 w-px bg-gray-300" />
            )}
            {/* Dot */}
            <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-gray-400 -translate-x-[3.5px]" />
            {/* Content */}
            <p className="text-[14px] text-gray-700 ml-4">
              {record.date}: {record.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
