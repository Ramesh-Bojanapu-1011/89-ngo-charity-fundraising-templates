import React, { useEffect, useMemo, useState } from "react";
import SiteHeadder from "../src/components/SiteHeadder";
import SiteFooter from "../src/components/SiteFooter";
import { getUsers, User } from "@/lib/localAuth";
// Use LayoutDashboard for the main heading
import { Users, LogIn, Clock, LayoutDashboard, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";
// Make recharts optional so the project builds in environments where it's not installed.
let ResponsiveContainer: any,
  BarChart: any,
  Bar: any,
  LineChart: any,
  Line: any,
  XAxis: any,
  YAxis: any,
  CartesianGrid: any,
  Tooltip: any,
  PieChart: any,
  Pie: any,
  Cell: any,
  Legend: any;

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const rc = require("recharts");
  ResponsiveContainer = rc.ResponsiveContainer;
  BarChart = rc.BarChart;
  Bar = rc.Bar;
  LineChart = rc.LineChart;
  Line = rc.Line;
  XAxis = rc.XAxis;
  YAxis = rc.YAxis;
  CartesianGrid = rc.CartesianGrid;
  Tooltip = rc.Tooltip;
  PieChart = rc.PieChart;
  Pie = rc.Pie;
  Cell = rc.Cell;
  Legend = rc.Legend;
} catch (e) {
  // Fallback lightweight stubs so build doesn't fail when recharts isn't installed.
  ResponsiveContainer = ({ children }: any) => <div>{children}</div>;
  BarChart = ({ children }: any) => <div>{children}</div>;
  Bar = () => null;
  LineChart = ({ children }: any) => <div>{children}</div>;
  Line = () => null;
  XAxis = () => null;
  YAxis = () => null;
  CartesianGrid = () => null;
  Tooltip = () => null;
  PieChart = ({ children }: any) => <div>{children}</div>;
  Pie = ({ children }: any) => <div>{children}</div>;
  Cell = () => null;
  Legend = () => null;
}

// Brand color palette: teal/cyan primary with complementary accents
const PRIMARY_COLOR = "#0EA5A4"; // Teal-500 (brand primary)
const CHART_COLORS = [
  "#0EA5A4", // Emerald/teal
  "#34D399", // Emerald-300
  "#10B981", // Emerald-500
  "#059669", // Emerald-600
  "#065f46", // Emerald-800
];

function formatDateShort(iso?: string) {
  if (!iso) return "-";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString();
  } catch {
    return iso;
  }
}

// Helper component for the Stat Cards - Optimized for Minimalism
interface StatCardProps {
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  color,
}) => (
  // Minimalist Card: Reduced padding, cleaner shadow, subtle focus ring on hover.
  <div className="p-5 bg-white rounded-xl shadow-sm dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition duration-300 hover:ring-2 hover:ring-emerald-500 hover:ring-opacity-50">
    <div className="flex items-start justify-between">
      <div className="text-left">
        <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
          {title}
        </div>
        <div className="text-4xl font-extrabold text-slate-900 dark:text-white leading-none">
          {value}
        </div>
      </div>
      {/* Icon placed after value, slightly larger for focus */}
      <div
        className={`p-3 rounded-lg`} // Changed to rounded-lg
        style={{ backgroundColor: color + "1A" }}
      >
        <Icon className={`w-7 h-7`} style={{ color: color }} />
      </div>
    </div>
  </div>
);

export default function AdminDashboard() {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const u = getUsers();
    setUsers(u);
  }, []);

  const totalUsers = users.length;
  const loggedUsers = users.filter((u) => !!u.lastLoginTime).length;

  // active: lastLoginTime within past 30 minutes
  const activeUsers = users.filter((u) => {
    if (!u.lastLoginTime) return false;
    const dt = new Date(u.lastLoginTime).getTime();
    return Date.now() - dt < 30 * 60 * 1000;
  }).length;

  // build daily login counts for last 14 days
  const loginSeries = useMemo(() => {
    const map = new Map<string, number>();
    const days = 14;
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toLocaleDateString();
      map.set(key, 0);
    }

    users.forEach((u) => {
      if (!u.lastLoginTime) return;
      const key = new Date(u.lastLoginTime).toLocaleDateString();
      if (map.has(key)) map.set(key, (map.get(key) || 0) + 1);
    });

    return Array.from(map.entries()).map(([date, count]) => ({ date, count }));
  }, [users]);

  const pieData = [
    { name: t("admin.pie.logged"), value: loggedUsers },
    {
      name: t("admin.pie.notLogged"),
      value: Math.max(0, totalUsers - loggedUsers),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 caret-transparent">
      <SiteHeadder />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* REFINED HEADING - Use font-extrabold for punch */}
        <h1 className="text-4xl flex items-center gap-4 font-extrabold mb-10 text-slate-900 dark:text-white">
          <LayoutDashboard className="w-9 h-9 text-emerald-600" />
          {t("admin.heading")}
        </h1>

        {/* TOP METRICS — colorful gradient tiles like the reference design */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div
            className="rounded-xl p-5 text-white shadow-lg"
            style={{
              background: `linear-gradient(90deg, ${PRIMARY_COLOR}, #059669)`,
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-2xl font-extrabold">{totalUsers}</div>
                <div className="text-sm opacity-90 mt-1">
                  {t("admin.stats.totalUsers")}
                </div>
              </div>
              <div className="opacity-90">
                <Users className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div
            className="rounded-xl p-5 text-white shadow-lg"
            style={{
              background: `linear-gradient(90deg, #059669, ${PRIMARY_COLOR})`,
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-2xl font-extrabold">{loggedUsers}</div>
                <div className="text-sm opacity-90 mt-1">
                  {t("admin.stats.loggedUsers")}
                </div>
              </div>
              <div className="opacity-90">
                <LogIn className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div
            className="rounded-xl p-5 text-white shadow-lg"
            style={{ background: `linear-gradient(90deg, #10B981, #059669)` }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-2xl font-extrabold">{activeUsers}</div>
                <div className="text-sm opacity-90 mt-1">
                  {t("admin.stats.activeUsers")}
                </div>
              </div>
              <div className="opacity-90">
                <Clock className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div
            className="rounded-xl p-5 text-white shadow-lg"
            style={{
              background: `linear-gradient(90deg, ${PRIMARY_COLOR}, #10B981)`,
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-2xl font-extrabold">
                  {totalUsers ? Math.floor(totalUsers / 10) : 0}+
                </div>
                <div className="text-sm opacity-90 mt-1">Estimated Revenue</div>
              </div>
              <div className="opacity-90">
                <DollarSign className="w-8 h-8" />
              </div>
            </div>
          </div>
        </section>

        {/* CHARTS SECTION - Clean, card-based charts */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-700 pb-3">
              {t("admin.charts.dailyLogins")}
            </h3>
            <div style={{ width: "100%", height: 300 }}>
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={loginSeries}
                    margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                  >
                    {/* Very light grid lines */}
                    <CartesianGrid
                      strokeDasharray="4 4"
                      stroke="#f1f5f9" // Slate-100
                      className="dark:stroke-slate-700"
                    />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 10 }}
                      stroke="#94a3b8" // Slate-400
                    />
                    <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px", // More rounded corners
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        color: "rgb(30 41 59)",
                      }}
                    />
                    <Bar
                      dataKey="count"
                      fill={PRIMARY_COLOR}
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-700 pb-3">
              {t("admin.charts.userStatus")}
            </h3>
            <div
              style={{ width: "100%", height: 300 }}
              className="flex flex-col justify-center items-center" // Adjust for Legend
            >
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="45%" // Move up slightly to make room for bottom legend
                      outerRadius={100} // Slightly larger pie
                      fill="#8884d8"
                      labelLine={false}
                      label={(props: any) =>
                        props && props.value ? props.value.toString() : ""
                      } // Simplified label: just the count
                    >
                      {pieData.map((entries, idx) => (
                        // @ts-ignore dynamic Cell
                        <Cell
                          key={`c-${entries.name}`}
                          fill={CHART_COLORS[idx % CHART_COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="center"
                      wrapperStyle={{ marginTop: "10px" }} // Spacing for cleaner look
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        color: "rgb(30 41 59)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </section>

        {/* USERS TABLE - Sleeker, less pronounced stripes and sticky header */}
        <section className="bg-white rounded-xl shadow-lg p-6 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold mb-5 text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-700 pb-3">
            {t("admin.table.title")}
          </h3>
          <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
            <table className="w-full text-left">
              <thead>
                {/* Header: More contrast with the body */}
                <tr className="text-xs font-bold uppercase tracking-widest bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 sticky top-0 z-10">
                  <th className="py-3 px-4 rounded-tl-xl">
                    {t("admin.table.name")}
                  </th>
                  <th className="py-3 px-4">{t("admin.table.email")}</th>
                  <th className="py-3 px-4">{t("admin.table.role")}</th>
                  <th className="py-3 px-4">{t("admin.table.registered")}</th>
                  <th className="py-3 px-4">{t("admin.table.lastLogin")}</th>
                  <th className="py-3 px-4 rounded-tr-xl">
                    {t("admin.table.lastLogout")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, idx) => (
                  <tr
                    key={u.email + idx}
                    // Less visible even/odd stripes
                    className="border-t border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 even:bg-slate-50 dark:even:bg-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-700 transition duration-150"
                  >
                    <td className="py-3 px-4 font-medium text-sm">
                      {" "}
                      {/* Added text-sm */}
                      {`${u.firstname || ""} ${u.lastname || ""}`.trim() || "—"}
                    </td>
                    <td className="py-3 px-4 text-sm">{u.email}</td>
                    <td className="py-3 px-4 text-sm capitalize">
                      {u.role || "user"}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {formatDateShort(u.registerTime)}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {formatDateShort(u.lastLoginTime)}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      {formatDateShort(u.lastLogoutTime)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
