import { redirect } from "next/navigation";

export default function V5Redirect() {
  redirect("/v3");
}
