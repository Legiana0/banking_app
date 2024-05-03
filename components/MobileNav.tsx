"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

//MobileNavProps interface => types/index.d.ts
const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="菜單"
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent side={"left"} className="border-none bg-white text-black-1">
          <Link
            href="/"
            className="mb-12 cursor-pointer items-center gap-1 px-4 flex"
          >
            <Image src="/icons/logo.svg" width={34} height={34} alt="天際綫" />
            <h1 className="text-26 font-bold font-notoSerifTC text-black-1">
              天際線
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            {/* 按其他地方亦會關閉navbar */}
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    item.route === pathname ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                    /* 按下連結後亦會關閉navbar */
                    <SheetClose asChild key={item.route}>
                      <Link
                        key={item.label}
                        href={item.route}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] isActive": isActive,
                          })}
                        />

                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "!text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
