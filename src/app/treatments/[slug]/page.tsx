

import { notFound } from "next/navigation";
import { treatments } from "@/src/data/treatments"; // Adjust path if needed
import { TreatmentDetailClient } from "@/src/components/pages/treatment/detailpage/TreatmentDetailClient";

// Define the props type
interface TreatmentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Pre-generate all treatment routes at build time
export function generateStaticParams() {
  return treatments.map((treatment) => ({
    slug: treatment.slug,
  }));
}

// 2. Fetch data and pass to client component for animations
// IMPORTANT: Add 'async' here
export default async function TreatmentDetailPage({ params }: TreatmentPageProps) {
  // IMPORTANT: Await the params before using them
  const { slug } = await params;

  // Now we can safely find the treatment
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  return <TreatmentDetailClient treatment={treatment} />;
}