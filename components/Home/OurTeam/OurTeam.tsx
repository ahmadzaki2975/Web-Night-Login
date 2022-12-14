import { AboutUsLines } from "../AboutUs/AboutUsLines";
import { Card } from "./Card";

export const OurTeam = () => {
  return (
    <div className="bg-dark-red h-fit relative flex flex-col justify-center overflow-hidden">
      <AboutUsLines />
      <h1 className="text-5xl md:text-6xl text-white font-bold text-center z-10 mb-10" data-aos="fade-right">
        Team Structure
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 mb-16 md:mb-10" data-aos="fade-up" data-aos-delay="300">
        <Card name="Samatha Marhaendra P" position="President"/>
        <Card name="Christian Ale Perdana" position="Vice" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mb-10 gap-5" data-aos="fade-up" data-aos-delay="600">
        <Card name="Sagara Aldavy" position="Head of Public Relation" />
        <Card name="Arifah Amelia T" position="Head of Creative Media" />
        <Card name="Gerrit Ezra Yudi K" position="Head of Administration" />
      </div>
    </div>
  );
};
