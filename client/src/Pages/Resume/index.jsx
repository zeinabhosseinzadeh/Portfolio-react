import React from "react";
import ResumeSection from "../../Components/Resume/ResumeSection";
import BadgeList from "../../Components/Resume/BadgeList";
import List from "../../Components/Resume/List";

export default function Resume() {
  const personalInfo = {
    name: "زینب حسین‌زاده خلخالی",
    role: "Junior Front-End Developer",
  };
  const summary =
    "توسعه‌دهنده فرانت‌اند با تمرکز بر طراحی رابط کاربری مدرن و واکنش‌گرا.";

  const education = {
    degree: "کارشناسی علوم ورزشی",
    university: "دانشگاه خیام",
    year: "1403",
  };
  const courses = ["Front-End تخصصی", "React.js", "UI/UX", "ICDL"];
  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "MUI",
    "SASS",
    "Bootstrap",
  ];
  const tools = ["VS Code", "GitHub", "Figma", "XD", "LinkedIn"];
  const Projects = ["React SPA", "Responsive Website"];
  const languages = [
    "persian",
    "English - Advanced",
    "Deutsch(Germany) - intermediate(A1-A2)",
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
          <p className="text-lg text-neutral-600 mt-2">{personalInfo.role}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-12 md:col-span-1">
            <ResumeSection title="مهارت های فنی">
              <BadgeList items={technicalSkills} />
            </ResumeSection>
            <ResumeSection title="ابزارها">
              <BadgeList items={tools} />
            </ResumeSection>
            <ResumeSection title="زبان ها">
              <List items={languages} />
            </ResumeSection>
          </div>
          <div className="space-y-16 md:col-span-2 ">
            <ResumeSection title="خلاصه حرفه ای">
              <p className="text-neutral-700 leading-relaxed">{summary}</p>
            </ResumeSection>
            <ResumeSection title="تحصیلات">
              <div className="bg-white p-6 rounded-2xl shadow-sm ">
                <h3 className="font-medium">{education.degree}</h3>
                <p className="text-neutral-600 mt-1">{education.university}</p>
                <p className=" text-sm text-neutral-500 mt-2">{education.year}</p>
              </div>
            </ResumeSection>
            <ResumeSection title="دوره ها">
              <List items={courses}/>
            </ResumeSection>
            <ResumeSection title="پروژه ها">
              <List items={Projects}/>
            </ResumeSection>
          </div>
        </div>
      </div>
    </section>
  );
}
