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

export default function FeeTable() {
  return (
    <div className="space-y-6">
      {/* Table Container */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-md bg-white">
        <table className="w-full min-w-[760px] text-sm sm:text-base border-collapse">
          <thead>
            <tr className="bg-[#0f172a] text-white">
              <th className="text-left px-4 py-3.5 font-semibold whitespace-nowrap">
                Category
              </th>
              <th className="text-left px-4 py-3.5 font-semibold whitespace-nowrap">
                Type
              </th>
              <th className="text-right px-4 py-3.5 font-semibold whitespace-nowrap">
                Early bird (INR, incl. GST)
                <span className="block text-xs font-normal text-slate-300">until 31 Jul 2027</span>
              </th>
              <th className="text-right px-4 py-3.5 font-semibold whitespace-nowrap">
                Final (INR, incl. GST)
                <span className="block text-xs font-normal text-slate-300">1–25 Aug 2027</span>
              </th>
              <th className="text-right px-4 py-3.5 font-semibold whitespace-nowrap">
                Foreign authors (USD)
                <span className="block text-xs font-normal text-slate-300">early bird</span>
              </th>
              <th className="text-right px-4 py-3.5 font-semibold whitespace-nowrap">
                Foreign authors (USD)
                <span className="block text-xs font-normal text-slate-300">final</span>
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
                <td className="px-4 py-3.5 font-medium text-slate-900 whitespace-nowrap">
                  {row.category}
                </td>
                <td className="px-4 py-3.5 text-slate-700 whitespace-nowrap">
                  <div className="flex items-center gap-1.5">
                    <span>{row.type}</span>
                    {row.isIEEEMember && (
                      <span className="inline-block bg-[#06b6d4] text-white rounded-full px-2.5 py-0.5 text-xs font-bold">
                        IEEE Rate
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3.5 text-right font-bold text-[#0e7490] whitespace-nowrap">
                  {row.inrEarly}
                </td>
                <td className="px-4 py-3.5 text-right font-semibold text-slate-800 whitespace-nowrap">
                  {row.inrFinal}
                </td>
                <td className="px-4 py-3.5 text-right font-bold text-[#0e7490] whitespace-nowrap">
                  {row.usdEarly}
                </td>
                <td className="px-4 py-3.5 text-right font-semibold text-slate-800 whitespace-nowrap">
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
