import Link from "next/link";

export default function Home() {
  return (
    <section className="p-24 ">
      <div className="container">
        <h1 className="font-serif text-3xl font-bold text-slate-700">
          Next JS Practice
        </h1>

        <div className="mt-10">
          <Link
            href="/intercepting-routes/photos"
            className="font-semibold italic text-sky-600 underline"
          >
            Intercepting Routes
          </Link>
        </div>
        <div className="mt-10">
          <Link
            href="/parallel-routes/photos"
            className="font-semibold italic text-sky-600 underline"
          >
            Parallel Routes
          </Link>
        </div>
      </div>
    </section>
  );
}
