import Link from "next/link";
import photos, { Photo } from "@/lib/photos";
import PhotoCard from "@/components/PhotoCard";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: Photo = photos.find((p) => p.id === id)!;

  return (
    <section>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <div>
          <Link
            href="/intercepting-routes/photos"
            className="font-semibold italic text-sky-600 underline"
          >
            Back to photos
          </Link>
        </div>

        <div className="mt-10 w-1/3">
          <PhotoCard photo={photo} />
        </div>
      </div>
    </section>
  );
}
