import { Button } from "@workspace/ui/components/button";
import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";

export default async function Page() {
  const session = await auth.getSession().then((session) => {
    if (!session.data?.session.id) {
      redirect("/");
    }
    return session;
  });

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello {session.data?.user?.name}</h1>
        {session.data?.user && (
          <Button onClick={() => auth.signOut()}>Sign Out</Button>
        )}
      </div>
    </div>
  );
}
