import { CoverImage } from "./CoverImage";
import Image from "next/image";
import { CommunityTeam } from "./CommunityTeam";

interface PropsInterface {
  shortName: string;
  communityName: string;
  about: string;
  accentColor: string;
  headName: string;
  viceName: string;
}

export const Cover = (props: PropsInterface) => {
  return (
    <div className="min-h-[92vh] relative flex items-center bg-[#FCFFFE] overflow-x-hidden mt-[8vh]">
      <CoverImage shortName={props.shortName} />
      <div className="flex flex-col lg:flex-row mt-8 mx-auto md:justify-between w-[80%] xl:w-[70%] gap-16 flex-shrink-0">
        {/* Logo */}
        <div className="z-10 aspect-square grid place-items-center" data-aos="fade-right">
          <Image
            src={`/NL Assets/${props.shortName}.png`}
            width={400}
            height={400}
            alt="community logo"
            priority={true}
          />
        </div>
        {/* About */}
        <div className="mt-[-50px] lg:mt-auto z-10 flex flex-col justify-center">
          <div className="mb-5">
            <h1
              className="text-[70px] ssm:text-[90px] mt-[-30px] font-bold text-[#494949] tracking-widest"
              data-aos="fade-left"
            >
              {props.shortName}
            </h1>
            <h2
              className="md:text-left mt-[-15px] ssm:mt-[-30px] text-[#4e4e4e] max-w-[40ch]"
              data-aos="fade-left"
              data-aos-delay="300"
            >{`NIGHTLOGIN ${props.communityName.toLocaleUpperCase()} COMMUNITY`}</h2>
          </div>
          <p
            className="max-w-[35ch] text-[18px] ssm:text-[22px] text-[#4e4e4e] mb-10"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            {props.about}
          </p>
          <div
            className="mb-20 lg:mb-auto flex flex-col lg:flex-row justify-between gap-3"
            data-aos="fade-left"
            data-aos-delay="900"
          >
            <CommunityTeam
              name={props.headName}
              position="Head"
              bgColor={props.accentColor}
            />
            <CommunityTeam
              name={props.viceName}
              position="Vice"
              bgColor={props.accentColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
