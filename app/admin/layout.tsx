import { createAuthSupabaseClient } from "@/lib/supabase/ssr-server";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createAuthSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not logged in — render children only (login page)
  if (!user) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen" dir="rtl">
      <AdminSidebar />
      <main className="flex-1 bg-[#FAF5EF] overflow-auto">{children}</main>
    </div>
  );
}
