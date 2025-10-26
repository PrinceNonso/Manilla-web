import Image from "next/image";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  date: string;
}

export default function BlogCard({ imageSrc, date, title }: BlogCardProps) {
  return (
    <div className="blog-card flex items-center justify-center py- ">
      <div
        className="rounded-3xl bg-white  p-1 pb-4 w-full md:w-[400px md:h-[430px] shadow-lg border-backdrop-blur-sm"
        style={{
          // semi-transparent card background
          border: "6px solid rgba(255, 255, 255, 0.3)", // semi-transparent border
          backdropFilter: "blur(10px)", // optional: blur background behind border
        }}>
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
    </div>
  );
}
