"use client";

import { Badge } from "@/components/ui/badge";

interface FeeTableProps {
  currency: "INR" | "USD";
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

export default function FeeTable({ currency }: FeeTableProps) {
  const isUSD = currency === "USD";

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-navy text-white text-left">
            <th className="px-6 py-4 font-semibold">Category</th>
            <th className="px-6 py-4 font-semibold">Type</th>
            <th className="px-6 py-4 font-semibold text-right text-teal-accent">
              Early bird ({isUSD ? "USD" : "INR"})
            </th>
            <th className="px-6 py-4 font-semibold text-right text-gray-200">
              Final +10% ({isUSD ? "USD" : "INR"})
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
                <td className="px-6 py-4 text-right">
                  <span className="font-black text-base text-teal-DEFAULT">
                    {earlyPrice}
                  </span>
                </td>

                {/* Final +10% column */}
                <td className="px-6 py-4 text-right">
                  <span className="font-bold text-base text-navy">
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
