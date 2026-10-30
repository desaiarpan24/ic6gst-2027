"use client";

import { Badge } from "@/components/ui/badge";

interface FeeTableProps {
  currency: "INR" | "USD";
  applySurcharge?: boolean;
}

interface FeeItem {
  category: string;
  subcategory: string;
  inrBase: number;
  usdBase: number;
  highlight: boolean;
}

const feeData: FeeItem[] = [
  {
    category: "Academia",
    subcategory: "Non-IEEE Member",
    inrBase: 8000,
    usdBase: 84,
    highlight: false,
  },
  {
    category: "Academia",
    subcategory: "IEEE Member",
    inrBase: 6700,
    usdBase: 70,
    highlight: true,
  },
  {
    category: "Industry",
    subcategory: "Non-IEEE Member",
    inrBase: 10500,
    usdBase: 110,
    highlight: false,
  },
  {
    category: "Industry",
    subcategory: "IEEE Member",
    inrBase: 8800,
    usdBase: 93,
    highlight: true,
  },
  {
    category: "Students",
    subcategory: "Non-IEEE Member",
    inrBase: 6300,
    usdBase: 66,
    highlight: false,
  },
  {
    category: "Students",
    subcategory: "IEEE Member",
    inrBase: 5300,
    usdBase: 56,
    highlight: true,
  },
  {
    category: "Attendee",
    subcategory: "Without Paper",
    inrBase: 2500,
    usdBase: 26,
    highlight: false,
  },
];

export default function FeeTable({
  currency,
  applySurcharge = false,
}: FeeTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-navy text-white">
            <th className="text-left px-6 py-4 font-semibold">Category</th>
            <th className="text-left px-6 py-4 font-semibold">Type</th>
            <th className="text-right px-6 py-4 font-semibold">
              Registration Fee ({currency === "INR" ? "INR ₹" : "USD $"})
              {applySurcharge && (
                <span className="ml-2 text-xs font-normal text-amber-300">
                  (+10% Late Fee)
                </span>
              )}
            </th>
            <th className="text-center px-6 py-4 font-semibold">Status / Discount</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((row, idx) => {
            const inrFinal = applySurcharge
              ? Math.round(row.inrBase * 1.1)
              : row.inrBase;
            const usdFinal = applySurcharge
              ? Math.round(row.usdBase * 1.1)
              : row.usdBase;

            const baseFormatted =
              currency === "INR"
                ? `₹${row.inrBase.toLocaleString("en-IN")}`
                : `$${row.usdBase}`;
            const finalFormatted =
              currency === "INR"
                ? `₹${inrFinal.toLocaleString("en-IN")}`
                : `$${usdFinal}`;

            return (
              <tr
                key={idx}
                className={`border-t border-gray-100 transition-colors hover:bg-teal-DEFAULT/5 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50/70"
                }`}
              >
                <td className="px-6 py-4">
                  <span className="font-bold text-navy">{row.category}</span>
                </td>
                <td className="px-6 py-4 text-slate-light">{row.subcategory}</td>
                <td className="px-6 py-4 text-right">
                  {applySurcharge ? (
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-slate-400 line-through">
                        {baseFormatted}
                      </span>
                      <span className="font-black text-lg text-amber-600">
                        {finalFormatted}
                      </span>
                    </div>
                  ) : (
                    <span className="font-black text-lg text-teal-DEFAULT">
                      {finalFormatted}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-1.5 flex-wrap">
                    {row.highlight && (
                      <Badge variant="default" className="text-xs bg-teal-DEFAULT">
                        IEEE Rate
                      </Badge>
                    )}
                    {applySurcharge ? (
                      <Badge className="bg-amber-100 text-amber-800 border-amber-300 text-xs">
                        +10% Regular
                      </Badge>
                    ) : (
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 text-xs">
                        Early Bird
                      </Badge>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
