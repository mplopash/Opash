import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

const service = servicesData["qa-testing"];

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  keywords: service.meta.keywords,
};

export default function QaTestingPage() {
  return <ServicePageTemplate service={service} />;
}
