const { NextResponse } = require("next/server");
import connectDB from "@/lib/config/db";

const loadDB = async () => {
  await connectDB();
};

loadDB();
export async function GET(req) {
  return NextResponse.json({ msf: "api working" });
}


export async function Post(req) {
  
}