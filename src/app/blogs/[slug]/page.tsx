import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blogsData";
import { BlogDetailClient } from "./BlogDetailClient";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Opash Software Insights",
      description: "The requested technical publication does not exist.",
    };
  }

  return {
    title: `${post.title} | Opash Software Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailClient post={post} />;
}
