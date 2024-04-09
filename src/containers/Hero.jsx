import { useEffect, useState } from "react";
import FadeUp from "../animation components/FadeUp";
import ResumeButton from "../components/ResumeButton";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, []);

  return (
    <section className="hero">
      <div className="leading-[1.1]">
        <FadeUp delay={isDesktop ? 0.95 : 0.5}>
          <h1 className="text-green mb-5 font-medium">Hi, my name is</h1>
        </FadeUp>

        <FadeUp delay={isDesktop ? 1.05 : 0.6}>
          <h2 className="big-heading text-lightest-green-slate">
            Jatin Rohilla
          </h2>
        </FadeUp>

        <FadeUp delay={isDesktop ? 1.15 : 0.7}>
          <h3 className="big-heading mt-2" style={{ fontSize: "150%" }}>
            Bringing your ideas to life.
          </h3>
        </FadeUp>
      </div>

      <FadeUp delay={isDesktop ? 1.25 : 0.8}>
        <p className="mt-5 max-w-[550px] lg:text-lg lg:max-w-[590px]">
          A <span className="text-green">Full Stack Web Developer </span>
          proficient in JavaScript, MERN stack (MongoDB, Express.js,
          React.js,Node.js) and Restful API design. Collaborative
          problem-solver experienced in frontend development and efficient
          database queries. Committed to deliver exceptional results in a
          dynamic, team-driven environment.
        </p>
      </FadeUp>

      <div className="mt-8">
        <FadeUp delay={isDesktop ? 1.35 : 0.9}>
          <ResumeButton className="py-3 px-10" />
        </FadeUp>
      </div>
    </section>
  );
};

export default Hero;
