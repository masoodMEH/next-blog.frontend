import Image from "next/image";
import Link from "next/link";

function CoverImage({ title, coverImageUrl, slug }) {
  return (
    <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-md mb-6">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover object-center hover:scale-110 translate-all duration-300 ease-outt"
          quality={80}
        />
        
      </Link>
    </div>
  );
}

export default CoverImage;
