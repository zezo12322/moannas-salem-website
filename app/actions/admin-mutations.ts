"use server";

import { createAuthSupabaseClient } from "@/lib/supabase/ssr-server";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";

async function assertAdmin() {
  const supabase = await createAuthSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
}

// ── Testimony status ─────────────────────────────────────────────────────────

export async function updateTestimonyStatus(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  const status = formData.get("status")?.toString() as
    | "new"
    | "under-review"
    | "published"
    | "rejected";
  if (!id || !status) return;

  const admin = createAdminSupabaseClient();
  await admin.from("testimonies").update({ status }).eq("id", id);
  revalidatePath("/admin/testimonies");
  revalidatePath(`/admin/testimonies/${id}`);
}

export async function publishTestimony(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  const publishedQuote = formData.get("published_quote")?.toString().trim() ?? "";
  const publishedRole = formData.get("published_role")?.toString().trim() ?? "";

  if (!id || publishedQuote.length < 10) return;

  const admin = createAdminSupabaseClient();
  await admin
    .from("testimonies")
    .update({
      status: "published",
      published_quote: publishedQuote,
      published_role: publishedRole || null,
    })
    .eq("id", id);

  revalidatePath("/admin/testimonies");
  revalidatePath(`/admin/testimonies/${id}`);
  revalidatePath("/stories");
}

// ── Contact messages ─────────────────────────────────────────────────────────

export async function markContactRead(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  if (!id) return;
  const admin = createAdminSupabaseClient();
  await admin.from("contact_messages").update({ status: "read" }).eq("id", id);
  revalidatePath("/admin/contacts");
}

// ── Support requests ─────────────────────────────────────────────────────────

export async function markSupportRead(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  if (!id) return;
  const admin = createAdminSupabaseClient();
  await admin.from("support_requests").update({ status: "read" }).eq("id", id);
  revalidatePath("/admin/support-requests");
}
