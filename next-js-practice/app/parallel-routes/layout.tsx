import Header from "@/components/header";

export default function ParallelLayout({
  children,
  team,
  dashboard,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  dashboard: React.ReactNode;
}) {
  return (
    <section className="w-[60%] mx-auto">
      <Header />
      <main className="container">
        <section className="py-4">{children}</section>

        <section className="flex gap-6">
          {dashboard}
          {team}
        </section>
      </main>
    </section>
  );
}
