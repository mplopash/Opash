import { redirect } from "next/navigation";

export default function V4Redirect() {
  redirect("/v2");
}
