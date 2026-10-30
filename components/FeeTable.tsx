"use client";

import { Badge } from "@/components/ui/badge";

interface FeeTableProps {
  currency: "INR" | "USD";
  applySurcharge?: boolean;
}

interface FeeScheduleItem {
  category: string;
  type: string;
  earlyBirdINR: string;
  earlyBirdUSD: string;
  finalINR: string;
  finalUSD: string;
  isIEEEMember: boolean;
}

const feeSchedule: FeeScheduleItem[] = [
  {
    category: "Academia",
    type: "Non-IEEE member",
    earlyBirdINR: "₹8,000",
    earlyBirdUSD: "US$250",
    finalINR: "₹8,800",
    finalUSD: "US$275",
    isIEEEMember: false,
  },
  {
    category: "Academia",
    type: "IEEE member",
    earlyBirdINR: "₹6,700",
    earlyBirdUSD: "US$210",
    finalINR: "₹7,370",
    finalUSD: "US$230",
    isIEEEMember: true,
  },
  {
    category: "Industry",
    type: "Non-IEEE member",
    earlyBirdINR: "₹10,500",
    earlyBirdUSD: "US$295",
    finalINR: "₹11,550",
    finalUSD: "US$325",
    isIEEEMember: false,
  },
  {
    category: "Industry",
    type: "IEEE member",
    earlyBirdINR: "₹8,800",
    earlyBirdUSD: "US$250",
    finalINR: "₹9,680",
    finalUSD: "US$275",
    isIEEEMember: true,
  },
  {
    category: "Students",
    type: "Non-IEEE member",
    earlyBirdINR: "₹6,300",
    earlyBirdUSD: "US$170",
    finalINR: "₹6,930",
    finalUSD: "US$185",
    isIEEEMember: false,
  },
  {
    category: "Students",
    type: "IEEE member",
    earlyBirdINR: "₹5,300",
    earlyBirdUSD: "US$145",
    finalINR: "₹5,830",
    finalUSD: "US$160",
    isIEEEMember: true,
  },
  {
    category: "Attendee",
    type: "Without paper",
    earlyBirdINR: "₹2,500",
    earlyBirdUSD: "US$85",
    finalINR: "₹2,750",
    finalUSD: "US$95",
    isIEEEMember: false,
  },
];

export default function FeeTable({
  currency,
  applySurcharge = false,
}: FeeTableProps) {
  const isUSD = currency === "USD";

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-navy text-white text-left">
            <th className="px-6 py-4 font-semibold">Category</th>
            <th className="px-6 py-4 font-semibold">Type</th>
            <th
              className={`px-6 py-4 font-semibold text-right transition-colors ${
                !applySurcharge
                  ? "bg-teal-DEFAULT/25 text-teal-accent border-b-2 border-teal-accent"
                  : "text-gray-300"
              }`}
            >
              <div className="flex items-center justify-end gap-1.5">
                <span>Early bird ({isUSD ? "USD" : "INR"})</span>
                {!applySurcharge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-teal-accent text-navy">
                    Active
                  </span>
                )}
              </div>
            </th>
            <th
              className={`px-6 py-4 font-semibold text-right transition-colors ${
                applySurcharge
                  ? "bg-amber-500/25 text-amber-300 border-b-2 border-amber-400"
                  : "text-gray-300"
              }`}
            >
              <div className="flex items-center justify-end gap-1.5">
                <span>Final +10% ({isUSD ? "USD" : "INR"})</span>
                {applySurcharge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-400 text-navy">
                    Active
                  </span>
                )}
              </div>
            </th>
            <th className="px-6 py-4 font-semibold text-center">Benefit</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {feeSchedule.map((row, idx) => {
            const earlyPrice = isUSD ? row.earlyBirdUSD : row.earlyBirdINR;
            const finalPrice = isUSD ? row.finalUSD : row.finalINR;

            return (
              <tr
                key={idx}
                className={`transition-colors hover:bg-teal-DEFAULT/5 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                }`}
              >
                <td className="px-6 py-4 font-bold text-navy">{row.category}</td>
                <td className="px-6 py-4 text-slate-light font-medium">
                  {row.type}
                </td>

                {/* Early bird column */}
                <td
                  className={`px-6 py-4 text-right transition-colors ${
                    !applySurcharge ? "bg-teal-DEFAULT/5" : ""
                  }`}
                >
                  <span
                    className={`font-black text-base ${
                      !applySurcharge
                        ? "text-teal-DEFAULT text-lg"
                        : "text-slate-400 line-through text-sm"
                    }`}
                  >
                    {earlyPrice}
                  </span>
                </td>

                {/* Final +10% column */}
                <td
                  className={`px-6 py-4 text-right transition-colors ${
                    applySurcharge ? "bg-amber-500/10" : ""
                  }`}
                >
                  <span
                    className={`font-black text-base ${
                      applySurcharge
                        ? "text-amber-600 text-lg"
                        : "text-slate-600 font-semibold text-sm"
                    }`}
                  >
                    {finalPrice}
                  </span>
                </td>

                {/* Badge column */}
                <td className="px-6 py-4 text-center">
                  {row.isIEEEMember ? (
                    <Badge className="bg-teal-DEFAULT text-white text-xs">
                      IEEE Member Rate
                    </Badge>
                  ) : (
                    <span className="text-gray-300 text-xs">—</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
