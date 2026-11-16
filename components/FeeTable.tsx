"use client";

interface FeeRow {
  category: string;
  type: string;
  inrEarly: string;
  inrFinal: string;
  usdEarly: string;
  usdFinal: string;
  isIEEEMember: boolean;
}

const feeSchedule: FeeRow[] = [
  {
    category: "Academia",
    type: "Non-IEEE Member",
    inrEarly: "₹9,086",
    inrFinal: "₹9,995",
    usdEarly: "US$90",
    usdFinal: "US$99",
    isIEEEMember: false,
  },
  {
    category: "Academia",
    type: "IEEE Member",
    inrEarly: "₹7,670",
    inrFinal: "₹8,437",
    usdEarly: "US$76",
    usdFinal: "US$84",
    isIEEEMember: true,
  },
  {
    category: "Industry",
    type: "Non-IEEE Member",
    inrEarly: "₹12,980",
    inrFinal: "₹14,278",
    usdEarly: "US$128",
    usdFinal: "US$141",
    isIEEEMember: false,
  },
  {
    category: "Industry",
    type: "IEEE Member",
    inrEarly: "₹10,974",
    inrFinal: "₹12,071",
    usdEarly: "US$108",
    usdFinal: "US$119",
    isIEEEMember: true,
  },
  {
    category: "Students",
    type: "Non-IEEE Member",
    inrEarly: "₹8,024",
    inrFinal: "₹8,826",
    usdEarly: "US$79",
    usdFinal: "US$87",
    isIEEEMember: false,
  },
  {
    category: "Students",
    type: "IEEE Member",
    inrEarly: "₹6,726",
    inrFinal: "₹7,399",
    usdEarly: "US$66",
    usdFinal: "US$73",
    isIEEEMember: true,
  },
  {
    category: "Attendee",
    type: "Without Paper",
    inrEarly: "₹2,950",
    inrFinal: "₹3,245",
    usdEarly: "US$29",
    usdFinal: "US$32",
    isIEEEMember: false,
  },
];

interface FeeTableProps {
  activeCurrency?: "INR" | "USD";
}

export default function FeeTable({ activeCurrency }: FeeTableProps = {}) {
  return (
    <div className="space-y-6">
      {/* Table Container - Fits whole table directly on page without scrolling */}
      <div className="rounded-2xl border border-slate-200 shadow-md bg-white overflow-hidden">
        <table className="w-full table-auto sm:table-fixed text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-[#0f172a] text-white">
              <th className="text-left px-2 sm:px-3 md:px-4 py-3.5 font-semibold w-[15%]">
                Category
              </th>
              <th className="text-left px-2 sm:px-3 md:px-4 py-3.5 font-semibold w-[23%]">
                Type
              </th>
              <th className={`text-right px-2 sm:px-3 md:px-4 py-3.5 font-semibold w-[15.5%] transition-colors ${activeCurrency === "INR" ? "bg-slate-800 text-teal-300" : ""}`}>
                <span>Early Bird (INR)</span>
                <span className="block text-[10px] sm:text-xs font-normal text-slate-300 leading-tight">incl. GST • by 31 Jul</span>
              </th>
              <th className={`text-right px-2 sm:px-3 md:px-4 py-3.5 font-semibold w-[15.5%] transition-colors ${activeCurrency === "INR" ? "bg-slate-800 text-teal-300" : ""}`}>
                <span>Final (INR)</span>
                <span className="block text-[10px] sm:text-xs font-normal text-slate-300 leading-tight">1–25 Aug (+10%)</span>
              </th>
              <th className={`text-right px-2 sm:px-3 md:px-4 py-3.5 font-semibold w-[15%] transition-colors ${activeCurrency === "USD" ? "bg-slate-800 text-teal-300" : ""}`}>
                <span>USD Early</span>
                <span className="block text-[10px] sm:text-xs font-normal text-slate-300 leading-tight">Foreign • by 31 Jul</span>
              </th>
              <th className={`text-right px-2 sm:px-3 md:px-4 py-3.5 font-semibold w-[15%] transition-colors ${activeCurrency === "USD" ? "bg-slate-800 text-teal-300" : ""}`}>
                <span>USD Final</span>
                <span className="block text-[10px] sm:text-xs font-normal text-slate-300 leading-tight">Foreign • 1–25 Aug</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {feeSchedule.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-colors hover:bg-slate-50 ${
                  idx % 2 === 1 ? "bg-slate-50/70" : "bg-white"
                }`}
              >
                <td className="px-2 sm:px-3 md:px-4 py-3 font-semibold text-slate-900">
                  {row.category}
                </td>
                <td className="px-2 sm:px-3 md:px-4 py-3 text-slate-700">
                  <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                    <span className="font-medium">{row.type}</span>
                    {row.isIEEEMember && (
                      <span className="inline-block bg-[#06b6d4] text-white rounded-full px-1.5 py-0.5 text-[10px] sm:text-xs font-bold whitespace-nowrap">
                        IEEE Rate
                      </span>
                    )}
                  </div>
                </td>
                <td className={`px-2 sm:px-3 md:px-4 py-3 text-right font-bold text-[#0e7490] whitespace-nowrap ${activeCurrency === "INR" ? "bg-teal-50/60" : ""}`}>
                  {row.inrEarly}
                </td>
                <td className={`px-2 sm:px-3 md:px-4 py-3 text-right font-semibold text-slate-800 whitespace-nowrap ${activeCurrency === "INR" ? "bg-teal-50/60" : ""}`}>
                  {row.inrFinal}
                </td>
                <td className={`px-2 sm:px-3 md:px-4 py-3 text-right font-bold text-[#0e7490] whitespace-nowrap ${activeCurrency === "USD" ? "bg-teal-50/60" : ""}`}>
                  {row.usdEarly}
                </td>
                <td className={`px-2 sm:px-3 md:px-4 py-3 text-right font-semibold text-slate-800 whitespace-nowrap ${activeCurrency === "USD" ? "bg-teal-50/60" : ""}`}>
                  {row.usdFinal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notes Box matching the user's template */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#f0f9ff] border border-[#bae6fd]">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">Notes</h3>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            The registration fees for authors include the US$5 per accepted paper charged by ConfConnects for the AI-content check.
          </li>
          <li>
            INR fees include 18% GST. USD fees apply to authors and participants from outside India.
          </li>
          <li>
            IEEE members receive at least 15% discount. IEEE Gujarat Section members receive an additional 5% discount on the IEEE member rate (valid membership number required).
          </li>
          <li>
            Early bird registration closes on 31 July 2027. Registrations from 1 to 25 August 2027 carry a 10% surcharge.
          </li>
          <li>
            At least one author of each accepted paper must complete full registration by 31 July 2027 and present the paper in person.
          </li>
          <li>
            Papers not presented at the conference will not be submitted to IEEE Xplore (IEEE no-show policy).
          </li>
          <li>
            Registration fees are non-refundable.
          </li>
        </ul>
      </div>
    </div>
  );
}
