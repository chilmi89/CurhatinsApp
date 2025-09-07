// app/api/aduan/route.ts
import { NextResponse } from "next/server";
import supabase from "@/lib/db";

// GET semua aduan (urutan terbaru dulu)
export async function GET() {
  console.log("🔍 [SERVER] Fetching all aduan...");

  const { data, error } = await supabase
    .from("aduan")
    .select("*")
    .order("id", { ascending: false }); // 🔹 tanpa limit

  if (error) {
    console.error("❌ [SERVER] Error fetching:", error.message);
  } else if (data && data.length > 0) {
    console.log(`✅ [SERVER] Fetch GET berhasil (${data.length} data)`);
  } else {
    console.log("⚠️ [SERVER] Tidak ada data aduan");
  }

  return NextResponse.json({ data, error });
}

// POST buat aduan baru
export async function POST(request: Request) {
  const body = await request.json();
  const { nama, keluh_kesah } = body;

  console.log("📩 [SERVER] Menerima request insert...");

  const { data, error } = await supabase
    .from("aduan")
    .insert([{ nama, keluh_kesah }])
    .select();

  if (error) {
    console.error("❌ [SERVER] Error inserting:", error.message);
  } else {
    console.log("✅ [SERVER] Insert POST berhasil");
  }

  return NextResponse.json({ data, error });
}
