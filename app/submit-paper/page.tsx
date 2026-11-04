import { redirect } from "next/navigation";

export default function SubmitPaperRedirect() {
  redirect("/call-for-papers#submit-paper");
}
