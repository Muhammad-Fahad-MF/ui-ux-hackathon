import { Metadata } from "next";
import HeaderNav from "../../components2/headerNav/headerNav";
import Footer from "../../components/footer/footer";
import MainDetails from "../../components2/mainDetails/main-details";
import { client } from "@/sanity/lib/client";

// Explicitly define the type of params
interface PageProps {
  params: {
    id: string; // The dynamic route parameter
  };
}

// Generate static paths for dynamic routes
export async function generateStaticParams() {
  const ids: string[] = await client.fetch(`*[_type == "food"]._id`);
  return ids.map((id) => ({ id }));
}

// The dynamic page component
export default async function Details({ params }: PageProps) {
  const { id } = await params; // Await params here

  const data = await client.fetch(
    `*[_type == "food" && _id == $id][0]{
      _id,
      name,
      category,
      price,
      originalPrice,
      tags,
      "image_url": image.asset->url,
      description,
      available
    }`,
    { id }
  );

  if (!data) {
    return <div className="text-white text-5xl">Product not found</div>;
  }

  return (
    <div className="overflow-hidden font-Inter400 text-[#4f4f4f] bg-white">
      <HeaderNav mainHead="Shop Details" trackHead="Shop details" />
      <MainDetails product={data} />
      <Footer />
    </div>
  );
}

// Metadata generation for better SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params; // Await params here

  const product = await client.fetch(`*[_type == "food" && _id == $id][0]{ name }`, { id });

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name}`,
    description: `Details about ${product.name}`,
  };
}
