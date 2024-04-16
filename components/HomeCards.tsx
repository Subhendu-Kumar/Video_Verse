import { cn } from "@/lib/utils";
import Image from "next/image";

interface HomeCardsProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

const HomeCards = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardsProps) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[240px] cursor-pointer rounded-[14px]",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-10 rounded-[10px]">
        <Image src={img} alt={title} width={20} height={20} />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCards;
