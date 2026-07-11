import type { Metadata } from "next";
import { treatments } from "@/src/data/treatments";

const BASE_URL = "https://www.sreshta.org";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    return {
      title: "Treatment Not Found | Sreshta Ayurveda Hospital",
      description: "The requested treatment could not be found.",
    };
  }

  return {
    title: `${treatment.title} | Sreshta Ayurveda Hospital`,

    description: treatment.description,

    keywords: [
      treatment.title,
      "Ayurvedic Treatment",
      "Kerala Ayurveda",
      "Panchakarma",
      "Natural Healing",
      "Holistic Care",
    ],

    alternates: {
      canonical: `${BASE_URL}/treatments/${treatment.slug}`,
    },

    openGraph: {
      title: treatment.title,
      description: treatment.description,
      url: `${BASE_URL}/treatments/${treatment.slug}`,
      siteName: "Sreshta Ayurveda Hospital",
      locale: "en_IN",
      type: "article",

      images: [
        {
          url: treatment.image,
          width: 1200,
          height: 630,
          alt: treatment.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: treatment.title,
      description: treatment.description,
      images: [treatment.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}