import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Products() {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between lg:p-12 bg-slate-900 gap-4">
      <h1>Produtos </h1>
    </main>
  );
}
