"use client";

import { Badge } from "@/components/ui/badge";

interface FeeTableProps {
  currency?: "INR" | "USD";
}

interface FeeItem {
  category: string;
  inr: string;
  usd: string;
  isIEEEMember: boolean;
}

const feeSchedule: FeeItem[] = [
  {
    category: "Academia (Non-IEEE Members)",
    inr: "INR 8,000",
    usd: "USD 93",
    isIEEEMember: false,
  },
  {
    category: "Academia (IEEE Members)",
    inr: "INR 6,700",
    usd: "USD 78",
    isIEEEMember: true,
  },
  {
    category: "Industry (Non-IEEE Members)",
    inr: "INR 10,500",
    usd: "USD 122",
    isIEEEMember: false,
  },
  {
    category: "Industry (IEEE Members)",
    inr: "INR 8,800",
    usd: "USD 103",
    isIEEEMember: true,
  },
  {
    category: "Students (Non-IEEE Members)",
    inr: "INR 6,300",
    usd: "USD 74",
    isIEEEMember: false,
  },
  {
    category: "Students (IEEE Members)",
    inr: "INR 5,300",
    usd: "USD 62",
    isIEEEMember: true,
  },
  {
    category: "Attendees without a paper",
    inr: "INR 2,500",
    usd: "USD 30",
    isIEEEMember: false,
  },
];

export default function FeeTable({ currency = "INR" }: FeeTableProps) {
  const isUSD = currency === "USD";

  return (
    <div className="overflow-x-auto rounded-2xl border border-blue-200/80 shadow-md bg-white">
      <table className="w-full text-sm sm:text-base border-collapse">
        <thead>
          <tr className="bg-[#2b64a4] text-white">
            <th className="px-6 py-4 font-bold text-left text-sm sm:text-base tracking-wide border-r border-blue-400/40">
              Author Category
            </th>
            <th
              className={`px-6 py-4 font-bold text-center text-sm sm:text-base tracking-wide border-r border-blue-400/40 transition-colors ${
                !isUSD ? "bg-[#1f4e85]" : ""
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span>Indian</span>
                {!isUSD && (
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-accent text-navy">
                    Active
                  </span>
                )}
              </div>
            </th>
            <th
              className={`px-6 py-4 font-bold text-center text-sm sm:text-base tracking-wide transition-colors ${
                isUSD ? "bg-[#1f4e85]" : ""
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span>Foreign</span>
                {isUSD && (
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-accent text-navy">
                    Active
                  </span>
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-blue-100">
          {feeSchedule.map((row, idx) => (
            <tr
              key={idx}
              className={`transition-colors hover:bg-blue-50/60 ${
                idx % 2 === 0 ? "bg-white" : "bg-[#f2f7fc]"
              }`}
            >
              <td className="px-6 py-4 font-bold text-navy border-r border-gray-200">
                <div className="flex items-center justify-between gap-3">
                  <span>{row.category}</span>
                  {row.isIEEEMember && (
                    <Badge className="bg-teal-DEFAULT/15 text-teal-DEFAULT border border-teal-DEFAULT/30 text-[11px] font-semibold flex-shrink-0">
                      IEEE Member
                    </Badge>
                  )}
                </div>
              </td>
              <td
                className={`px-6 py-4 text-center font-bold border-r border-gray-200 transition-colors ${
                  !isUSD
                    ? "bg-teal-DEFAULT/10 text-navy font-black text-base sm:text-lg"
                    : "text-slate-800"
                }`}
              >
                {row.inr}
              </td>
              <td
                className={`px-6 py-4 text-center font-bold transition-colors ${
                  isUSD
                    ? "bg-teal-DEFAULT/10 text-navy font-black text-base sm:text-lg"
                    : "text-slate-800"
                }`}
              >
                {row.usd}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
