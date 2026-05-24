"use client";

import { useActionState } from "react";
import { loginAdmin } from "@/app/actions/admin-auth";

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(loginAdmin, null);

  return (
    <div className="min-h-screen bg-[#FAF5EF] flex items-center justify-center px-4" dir="rtl">
      <div className="w-full max-w-[380px]">
        <div className="text-center mb-8">
          <h1 className="text-[24px] font-bold text-[#211A22]">مؤنث سالم</h1>
          <p className="text-[13px] text-[#6B5D6E] mt-1">لوحة الإدارة الداخلية</p>
        </div>

        <form
          action={formAction}
          className="bg-white border border-[#DDD3CC] rounded-[16px] p-6 flex flex-col gap-4"
        >
          {state?.error && (
            <p
              role="alert"
              className="text-[13px] text-red-700 bg-red-50 border border-red-200 rounded-[8px] px-3 py-2"
            >
              {state.error}
            </p>
          )}

          <div className="flex flex-col gap-1.5">
            <label
              className="text-[13px] font-semibold text-[#211A22]"
              htmlFor="email"
            >
              البريد الإلكتروني
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              dir="ltr"
              className="border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              className="text-[13px] font-semibold text-[#211A22]"
              htmlFor="password"
            >
              كلمة المرور
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              dir="ltr"
              className="border border-[#DDD3CC] rounded-[8px] px-3 py-2 text-[14px] text-[#211A22] focus:outline-none focus:border-[#4B245E] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="bg-[#4B245E] text-white text-[14px] font-semibold rounded-[10px] py-2.5 hover:bg-[#3A1A4A] transition-colors disabled:opacity-60 mt-1"
          >
            {isPending ? "جارٍ الدخول…" : "دخول"}
          </button>
        </form>
      </div>
    </div>
  );
}
