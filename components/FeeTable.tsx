"use client";

import { Badge } from "@/components/ui/badge";

interface FeeTableProps {
  currency: "INR" | "USD";
}

const feeData = [
  {
    category: "Academia",
    subcategory: "Non-IEEE Member",
    inr: "₹8,000",
    usd: "$84",
    highlight: false,
  },
  {
    category: "Academia",
    subcategory: "IEEE Member",
    inr: "₹6,700",
    usd: "$70",
    highlight: true,
  },
  {
    category: "Industry",
    subcategory: "Non-IEEE Member",
    inr: "₹10,500",
    usd: "$110",
    highlight: false,
  },
  {
    category: "Industry",
    subcategory: "IEEE Member",
    inr: "₹8,800",
    usd: "$93",
    highlight: true,
  },
  {
    category: "Students",
    subcategory: "Non-IEEE Member",
    inr: "₹6,300",
    usd: "$66",
    highlight: false,
  },
  {
    category: "Students",
    subcategory: "IEEE Member",
    inr: "₹5,300",
    usd: "$56",
    highlight: true,
  },
  {
    category: "Attendee",
    subcategory: "Without Paper",
    inr: "₹2,500",
    usd: "$26",
    highlight: false,
  },
];

export default function FeeTable({ currency }: FeeTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-navy text-white">
            <th className="text-left px-6 py-4 font-semibold">Category</th>
            <th className="text-left px-6 py-4 font-semibold">Type</th>
            <th className="text-right px-6 py-4 font-semibold">
              Registration Fee ({currency === "INR" ? "INR" : "USD"})
            </th>
            <th className="text-center px-6 py-4 font-semibold">IEEE Discount</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((row, idx) => (
            <tr
              key={idx}
              className={`border-t border-gray-100 transition-colors hover:bg-teal-DEFAULT/5 ${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <td className="px-6 py-4">
                <span className="font-semibold text-navy">{row.category}</span>
              </td>
              <td className="px-6 py-4 text-slate-light">{row.subcategory}</td>
              <td className="px-6 py-4 text-right">
                <span className="font-bold text-lg text-teal-DEFAULT">
                  {currency === "INR" ? row.inr : row.usd}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                {row.highlight ? (
                  <Badge variant="default" className="text-xs">IEEE Rate</Badge>
                ) : (
                  <span className="text-gray-300">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
