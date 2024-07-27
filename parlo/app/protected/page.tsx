import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link"

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  let { data: owner, error } = await supabase
.from('owner')
.select('*')
.eq("id",user.id)
console.log(owner?.at(0).root_group_id)
const groupid = {}

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            {/* @ts-expect-error Server Component */}
            <AuthButton />
          </div>
        </nav>
      </div>
      <Link href={`protected/${owner?.at(0).root_group_id}`}>Link </Link>
      <Link href={`protected/edit/${owner?.at(0).root_group_id}`}>Enter Edit Mode</Link>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
