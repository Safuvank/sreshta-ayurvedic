import { notFound } from "next/navigation";
import { ourCoreData } from "@/src/data/specializations-core";
import { SpecializationDetailClient } from "@/src/components/pages/core/detailpage/SpecializationDetailClient";

// Define the props type exactly like your treatment page
interface SpecializationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Pre-generate all core routes at build time
export function generateStaticParams() {
  return ourCoreData.map((category) => ({
    slug: category.slug,
  }));
}

// 2. Fetch data and pass to client component for animations
export default async function SpecializationDetailPage({ params }: SpecializationPageProps) {
  // IMPORTANT: Await the params before using them
  const { slug } = await params;

  // Now we can safely find the specialization category
  const category = ourCoreData.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return <SpecializationDetailClient category={category} />;
}