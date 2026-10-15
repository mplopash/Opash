"use client";

import React from "react";
import { ProjectShowcase } from "@/components/ui/project-showcase";

export function ProjectShowcaseDemo() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] flex items-center justify-center w-full py-16">
      <ProjectShowcase />
    </div>
  );
}

export default ProjectShowcaseDemo;
