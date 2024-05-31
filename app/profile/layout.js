import { auth } from "@/auth";
import AdminNav from "@/components/adminPages/AdminNav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function PageLayout({ children }) {
  const session = await auth();
  const role = session?.user?.role;
  return (
    <div className="rounded-lg bg-slate-100">
      {role === "ADMIN" && <AdminNav />}
      {children}
    </div>
  );
}
