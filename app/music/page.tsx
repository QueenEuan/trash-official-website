import { AlbumCard } from "@/components/AlbumCard";
import { SectionHeading } from "@/components/SectionHeading";
import { albums } from "@/data/albums";

export default function MusicPage() {
  return (
    <div className="page-shell">
      <SectionHeading eyebrow="Music" title="Discography" body="A structured archive of TRASH releases, from the 2012 self-titled album through 歸零, 11:11, Never Die, Holy Trip!, and the 15th-anniversary 幸福的末班車 era." />
      <div className="mt-10 grid gap-6">
        {albums.map((album) => <AlbumCard key={album.slug} album={album} />)}
      </div>
    </div>
  );
}
