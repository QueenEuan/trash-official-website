import { AlbumCard } from "@/components/AlbumCard";
import { SectionHeading } from "@/components/SectionHeading";
import { albums } from "@/data/albums";

export default function MusicPage() {
  return (
    <div className="page-shell">
      <SectionHeading eyebrow="Music" title="Discography" body="A structured archive of TRASH releases, from early records to the band’s current chapter." />
      <div className="mt-10 grid gap-6">
        {albums.map((album) => <AlbumCard key={album.slug} album={album} />)}
      </div>
    </div>
  );
}
