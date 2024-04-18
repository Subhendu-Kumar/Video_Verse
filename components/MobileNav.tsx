"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const MobileNav = () => {
  const pathname = usePathname();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="Hamburger menu buton"
            width={34}
            height={34}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent className="bg-dark-1 text-white border-none" side="left">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="video verse logo"
              width={32}
              height={32}
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">Video Verse</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-2 pt-16 text-white">
                {SidebarLinks.map((link) => {
                  const isActive = pathname === link.route;
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex items-center w-full max-w-60 gap-4 p-4 rounded-lg",
                          { "bg-blue-1": isActive }
                        )}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
            <div className="flex flex-col justify-center gap-1">
              <div className="flex items-center">
                <p>&copy; {currentYear}&nbsp;&nbsp;</p>
                <a
                  className="hover:underline"
                  href="https://www.linkedin.com/in/subhendu-kumar-dutta/"
                  target="_blank"
                >
                  Subhendu Kumar
                </a>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-base">Visit Me At:</p>
                <a
                  className="hover:underline"
                  href="https://www.linkedin.com/in/subhendu-kumar-dutta/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="hover:underline"
                  href="https://github.com/Subhendu-Kumar/"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
