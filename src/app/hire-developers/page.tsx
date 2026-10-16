import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

const service = servicesData["hire-developers"];

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  keywords: service.meta.keywords,
};

export default function HireDevelopersPage() {
  return <ServicePageTemplate service={service} />;
}
