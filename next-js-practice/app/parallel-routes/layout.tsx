import Header from "@/components/header";

export default function RootLayout({
  children,
  team,
  dashboard,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  dashboard: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="container">
        <section className="py-6">{children}</section>

        <section className="flex gap-6">
          {team}
          {dashboard}
        </section>
      </main>
    </>
  );
}
