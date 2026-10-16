import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/v1",
          "/v2",
          "/v3",
          "/v4",
          "/v5",
          "/v6",
          "/loader-demo",
          "/404-page",
          "/api/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/v1", "/v2", "/v3", "/v4", "/v5", "/v6", "/loader-demo", "/404-page"],
      },
    ],
    sitemap: "https://www.opashsoftware.com/sitemap.xml",
    host: "https://www.opashsoftware.com",
  };
}
