import { MdOutlineMenu } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

interface PropsInterface {
  page: string;
}

export const CommunityNavbar = (props: PropsInterface) => {
  let navBG = "";
  let linkClass = "";
  switch (props.page) {
    case "NWDC":
      navBG = "h-[8vh] flex justify-between w-full px-5 bg-[#3D81A5]";
      break;
    case "NADC":
      navBG = "h-[8vh] flex justify-between w-full px-5 bg-[#B0AFA5]";
      break;
    case "NCPC":
      navBG = "h-[8vh] flex justify-between w-full px-5 bg-[#30A758]";
      break;
    case "NUXC":
      navBG = "h-[8vh] flex justify-between w-full px-5 bg-[#A52A3A]";
      break;
    case "NDDC":
      navBG = "h-[8vh] flex justify-between w-full px-5 bg-[#312F2F]";
      break;
    case "NLNC":
      navBG = "h-[8vh] flex justify-between w-full px-5 bg-[#59574A]";
      break;
  }

  return (
    <div className={navBG}>
      {/* Logo */}
      <div className="h-full flex items-center gap-3">
        <Link
          href="/"
          className="h-[70%] aspect-square flex items-center gap-3"
        >
          <Image
            src="/NL Assets/Night Login/square.png"
            width={2000}
            height={2000}
            alt="Night Login Logo"
            priority={true}
          />
        </Link>
      </div>
      {/* Nav Links */}
      <div className="flex gap-12 text-white items-center justify-between w-full pl-4">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div className="text-3xl md:hidden">
          <MdOutlineMenu />
        </div>
        <div className="gap-4 hidden md:flex">
          <Link href="/#Communities">Communities</Link>
          <div className="cursor-default">|</div>
          <Link
            href="/NLNC"
            className={
              props.page == "NLNC"
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }
          >
            NLNC
          </Link>
          <Link
            href="/NUXC"
            className={
              props.page == "NUXC"
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }
          >
            NUXC
          </Link>
          <Link
            href="/NCPC"
            className={
              props.page == "NCPC"
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }
          >
            NCPC
          </Link>
          <Link
            href="/NADC"
            className={
              props.page == "NADC"
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }
          >
            NADC
          </Link>
          <Link
            href="/NWDC"
            className={
              props.page == "NWDC"
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }
          >
            NWDC
          </Link>
          <Link
            href="/NDDC"
            className={
              props.page == "NDDC"
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }
          >
            NDDC
          </Link>
        </div>
      </div>
    </div>
  );
};
