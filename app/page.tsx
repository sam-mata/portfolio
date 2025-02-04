import { FlipWords } from "@/components/ui/flip-words";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <TracingBeam className="mx-auto px-8">
      {/* Title */}
      <div className="md:pt-24 pt-12 md:pb-12 pb-6">
        <div className="md:flex gap-4">
          <h1 className="md:text-7xl text-6xl font-bold tracking-tighter">
            Kia Ora!
          </h1>
          <h1 className="md:text-7xl text-6xl font-bold tracking-tighter">
            I{"'"}m Sam.
          </h1>
        </div>
        <h2 className="md:text-7xl text-3xl font-bold tracking-tighter">
          <FlipWords
            words={[
              "Researcher",
              "Web Developer",
              "Data Scientist",
              "Software Engineer",
            ]}
          />
        </h2>
      </div>

      {/* About Me */}
      <div className="md:py-12 py-6">
        <h2 className="md:text-4xl text-2xl font-bold font-CalSans tracking-tighter mb-6">
          About Me
        </h2>
        <p className="font-thin text-gray-700 py-1 tracking-tight md:text-base text-sm">
          I am a PhD Candidate currently studying at Victoria University of
          Wellington, New Zealand, where I work with the Centre for Data Science
          and Artificial Intelligence (CDSAI) and the Antarctic Research Centre
          (ARC). My thesis is on the use of novel genetic programming techniques
          for the long-term prediction of complex time-series data.
        </p>
        <p className="font-thin text-gray-700 py-1 tracking-tight md:text-base text-sm">
          I previously earned a BSc in Computer Science in 2023, followed by a
          BSc (Hons) in Artificial Intelligence in 2024, for which I received
          First Class Honours. Most of my work has been in the fields of AI,
          data science, and machine learning.
        </p>
        <p className="font-thin text-gray-700 py-1 tracking-tight md:text-base text-sm">
          You can find several of my projects on my{" "}
          <a href="https://github.com/sam-mata">GitHub</a>, but others are
          available publicly online, including interactive articles on{" "}
          <a href="https://3dai.sammata.nz/">3D AI</a>, data visualisations of{" "}
          <a href="https://sammata.shinyapps.io/f1-app/">F1 races</a> and{" "}
          <a href="https://covid-visualiser.vercel.app/">
            Covid-19 transmissions
          </a>
          , and some of my{" "}
          <a href="https://github.com/sam-mata/BSc-Hons">
            former research projects
          </a>
          .
        </p>
      </div>

      {/* Contact */}
      <div className="md:py-12 py-6">
        <h2 className="md:text-4xl text-2xl font-bold font-CalSans tracking-tighter mb-6">
          Contact
        </h2>
        <p className="font-thin text-gray-700 py-1 tracking-tight md:text-base text-sm">
          I am always looking for new projects and collaborations. If you think
          I might be able to help with your project, please get in touch through{" "}
          <a href="mailto:sammatanz@gmail.com" className="">
            email
          </a>{" "}
          or <a href="https://www.linkedin.com/in/sam-mata/">LinkedIn</a>.
        </p>
      </div>
    </TracingBeam>
  );
}
