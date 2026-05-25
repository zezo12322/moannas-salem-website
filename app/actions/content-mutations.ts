"use server";

import { createAuthSupabaseClient } from "@/lib/supabase/ssr-server";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function assertAdmin() {
  const supabase = await createAuthSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
}

// ── Campaigns ─────────────────────────────────────────────────────────────────

export async function createCampaign(formData: FormData): Promise<void> {
  await assertAdmin();
  const admin = createAdminSupabaseClient();
  const title = formData.get("title")?.toString().trim() ?? "";
  const slug = formData.get("slug")?.toString().trim() ?? "";
  if (!title || !slug) return;
  await admin.from("campaigns").insert({
    title,
    slug,
    status: formData.get("status")?.toString() ?? "draft",
    summary: formData.get("summary")?.toString().trim() ?? "",
    body: formData.get("body")?.toString().trim() ?? "",
    tagline: formData.get("tagline")?.toString().trim() || null,
    issue_ref: formData.get("issue_ref")?.toString().trim() || null,
    accent_color: formData.get("accent_color")?.toString() ?? "#4B245E",
    display_order: Number(formData.get("display_order") ?? 0),
  });
  revalidatePath("/campaigns");
  redirect("/admin/content/campaigns");
}

export async function updateCampaign(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  if (!id) return;
  const admin = createAdminSupabaseClient();
  await admin.from("campaigns").update({
    title: formData.get("title")?.toString().trim(),
    slug: formData.get("slug")?.toString().trim(),
    status: formData.get("status")?.toString(),
    summary: formData.get("summary")?.toString().trim(),
    body: formData.get("body")?.toString().trim(),
    tagline: formData.get("tagline")?.toString().trim() || null,
    issue_ref: formData.get("issue_ref")?.toString().trim() || null,
    accent_color: formData.get("accent_color")?.toString(),
    display_order: Number(formData.get("display_order") ?? 0),
  }).eq("id", id);
  revalidatePath("/campaigns");
  revalidatePath(`/campaigns/${formData.get("slug")}`);
  redirect("/admin/content/campaigns");
}

export async function deleteCampaign(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  if (!id) return;
  const admin = createAdminSupabaseClient();
  await admin.from("campaigns").delete().eq("id", id);
  revalidatePath("/campaigns");
  redirect("/admin/content/campaigns");
}

// ── Observatory stats ─────────────────────────────────────────────────────────

export async function createStat(formData: FormData): Promise<void> {
  await assertAdmin();
  const admin = createAdminSupabaseClient();
  await admin.from("observatory_stats").insert({
    number_text: formData.get("number_text")?.toString().trim() ?? "",
    label: formData.get("label")?.toString().trim() ?? "",
    source_label: formData.get("source_label")?.toString().trim() || null,
    accent_color: formData.get("accent_color")?.toString() ?? "#4B245E",
    display_order: Number(formData.get("display_order") ?? 0),
  });
  revalidatePath("/observatory");
  revalidatePath("/admin/content/observatory");
}

export async function deleteStat(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  if (!id) return;
  const admin = createAdminSupabaseClient();
  await admin.from("observatory_stats").delete().eq("id", id);
  revalidatePath("/observatory");
  revalidatePath("/admin/content/observatory");
}

// ── Observatory statements ────────────────────────────────────────────────────

export async function createStatement(formData: FormData): Promise<void> {
  await assertAdmin();
  const admin = createAdminSupabaseClient();
  await admin.from("observatory_statements").insert({
    date_label: formData.get("date_label")?.toString().trim() ?? "",
    title: formData.get("title")?.toString().trim() ?? "",
    summary: formData.get("summary")?.toString().trim() ?? "",
    status: formData.get("status")?.toString() ?? "draft",
  });
  revalidatePath("/observatory");
  revalidatePath("/admin/content/observatory");
}

export async function deleteStatement(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  if (!id) return;
  const admin = createAdminSupabaseClient();
  await admin.from("observatory_statements").delete().eq("id", id);
  revalidatePath("/observatory");
  revalidatePath("/admin/content/observatory");
}

export async function toggleStatementStatus(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  const status = formData.get("status")?.toString();
  if (!id || !status) return;
  const admin = createAdminSupabaseClient();
  await admin.from("observatory_statements").update({ status }).eq("id", id);
  revalidatePath("/observatory");
  revalidatePath("/admin/content/observatory");
}

// ── Guide articles ────────────────────────────────────────────────────────────

export async function createGuideArticle(formData: FormData): Promise<void> {
  await assertAdmin();
  const admin = createAdminSupabaseClient();
  const title = formData.get("title")?.toString().trim() ?? "";
  const slug = formData.get("slug")?.toString().trim() ?? "";
  if (!title || !slug) return;
  await admin.from("guide_articles").insert({
    title,
    slug,
    summary: formData.get("summary")?.toString().trim() ?? "",
    body: formData.get("body")?.toString().trim() ?? "",
    category: formData.get("category")?.toString() ?? "general",
    status: formData.get("status")?.toString() ?? "draft",
  });
  revalidatePath("/guide");
  redirect("/admin/content/guides");
}

export async function updateGuideArticle(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  if (!id) return;
  const admin = createAdminSupabaseClient();
  const slug = formData.get("slug")?.toString().trim() ?? "";
  await admin.from("guide_articles").update({
    title: formData.get("title")?.toString().trim(),
    slug,
    summary: formData.get("summary")?.toString().trim(),
    body: formData.get("body")?.toString().trim(),
    category: formData.get("category")?.toString(),
    status: formData.get("status")?.toString(),
    updated_at: new Date().toISOString(),
  }).eq("id", id);
  revalidatePath("/guide");
  revalidatePath(`/guide/articles/${slug}`);
  redirect("/admin/content/guides");
}

export async function deleteGuideArticle(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  if (!id) return;
  const admin = createAdminSupabaseClient();
  await admin.from("guide_articles").delete().eq("id", id);
  revalidatePath("/guide");
  redirect("/admin/content/guides");
}

// ── Announcements ─────────────────────────────────────────────────────────────

export async function createAnnouncement(formData: FormData): Promise<void> {
  await assertAdmin();
  const admin = createAdminSupabaseClient();
  await admin.from("announcements").insert({
    date_label: formData.get("date_label")?.toString().trim() ?? "",
    title: formData.get("title")?.toString().trim() ?? "",
    summary: formData.get("summary")?.toString().trim() ?? "",
    status: formData.get("status")?.toString() ?? "draft",
  });
  revalidatePath("/admin/content/announcements");
}

export async function deleteAnnouncement(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  if (!id) return;
  const admin = createAdminSupabaseClient();
  await admin.from("announcements").delete().eq("id", id);
  revalidatePath("/admin/content/announcements");
}

export async function toggleAnnouncementStatus(formData: FormData): Promise<void> {
  await assertAdmin();
  const id = formData.get("id")?.toString();
  const status = formData.get("status")?.toString();
  if (!id || !status) return;
  const admin = createAdminSupabaseClient();
  await admin.from("announcements").update({ status }).eq("id", id);
  revalidatePath("/admin/content/announcements");
}
