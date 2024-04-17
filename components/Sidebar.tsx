"use client";

import { SidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-2">
        {SidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn("flex items-center justify-start gap-4 p-4", {
                "bg-blue-1": isActive,
              })}
              style={{ borderRadius: "10px" }}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
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
        <p>All Rights Reserved !</p>
        <div className="flex justify-center items-center gap-3">
          <p className="text-base">Visit At:</p>
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
    </section>
  );
};

export default Sidebar;
