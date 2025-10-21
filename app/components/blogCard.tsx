import Image from "next/image";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  date: string;
}

export default function BlogCard({ imageSrc, date, title }: BlogCardProps) {
  return (
    <div className="rounded-3xl bg-white border-4 border-[#17d4e4] px-3 pt-3 pb-4 w-[350px] md:w-[400px] h-[400px]  shadow-lg">
      <div className="rounded-2xl overflow-hidden w-full h-[250px] bg-gray-200">
        <Image
          src={imageSrc || "/blog/blog1.jpg"}
          alt={title}
          width={300}
          height={180}
          unoptimized
          className="object-cover w-full h-full"
        />
      </div>
      <div className="pt-4 pb-2 px-1 text-start flex flex-col gap-3">
        <div className="text-gray-500 text-base mb-1">{date}</div>
        <div className="font-bold text-[1.28rem] text-[#1d1b3a] leading-tight">
          {title}
        </div>
      </div>
    </div>
  );
}
