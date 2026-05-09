import { useEffect, useState } from "react";
import ProfileCard from "../../Components/ProfileCard/index";
import Button from "../../Components/Button/index";
import photo1 from "../../assets/images/photo1.jpg";


export default function AboutMe() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-139 overflow-hidden py-16 bg-white">
   
      <div className="absolute inset-y-0 left-0 w-1/3 bg-neutral-100 -z-10 rounded-tr-3xl rounded-br-3xl" />

      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2 items-center">
   
        <div
          className={`transform transition-all duration-700 ease-in-out ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <ProfileCard
            name="Zeinab Hosseinzadeh"
            title="Front-End Developer "
            image={photo1}
          />
        </div>

        <div
          className={`flex flex-col justify-center transform transition-all duration-700 ease-in-out delay-150 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-black md:text-5xl">   
            Hello
          </h1>

          <p className="mb-6 text-lg text-neutral-700 md:text-xl">
            Here’s who I am & what I do.
          </p>

          <div className="mb-8 flex flex-wrap gap-4">
            <Button
              variant="primary"
              className="transition-transform duration-300 hover:scale-105"
            >
              Resume
            </Button>
            <Button
              variant="outline"
              className="transition-transform duration-300 hover:scale-105"
            >
              Projects
            </Button>
          </div>

          <p className="max-w-lg leading-relaxed text-neutral-700">
            click here to see my resume.
          
          </p>
        </div>
      </div>
    </section>
  );
}