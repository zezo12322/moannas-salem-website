"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAdmin } from "@/app/actions/admin-auth";

const navItems = [
  { href: "/admin", label: "لوحة التحكم", exact: true },
  { href: "/admin/testimonies", label: "الشهادات", exact: false },
  { href: "/admin/support-requests", label: "طلبات الدعم", exact: false },
  { href: "/admin/contacts", label: "رسائل التواصل", exact: false },
];

const contentItems = [
  { href: "/admin/content/campaigns", label: "الحملات" },
  { href: "/admin/content/observatory", label: "المرصد" },
  { href: "/admin/content/guides", label: "مقالات الدليل" },
  { href: "/admin/content/announcements", label: "الإعلانات" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 flex-shrink-0 bg-[#211A22] text-white min-h-screen flex flex-col">
      <div className="px-5 py-5 border-b border-white/10">
        <span className="text-[15px] font-bold text-white">مؤنث سالم</span>
        <p className="text-[11px] text-white/50 mt-0.5">لوحة الإدارة</p>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto" aria-label="قائمة الإدارة">
        {navItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-[8px] text-[13px] transition-colors ${
                isActive
                  ? "bg-[#4B245E] text-white font-semibold"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        <p className="text-[10px] text-white/30 font-semibold uppercase tracking-widest px-3 mt-4 mb-1">
          المحتوى
        </p>
        {contentItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-[8px] text-[13px] transition-colors ${
                isActive
                  ? "bg-[#4B245E] text-white font-semibold"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 pb-6 border-t border-white/10 pt-4">
        <form action={logoutAdmin}>
          <button
            type="submit"
            className="w-full px-3 py-2 rounded-[8px] text-[13px] text-white/60 hover:bg-white/10 hover:text-white transition-colors text-right"
          >
            تسجيل الخروج
          </button>
        </form>
      </div>
    </aside>
  );
}
