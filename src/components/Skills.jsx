import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 text-center bg-slate-800">
      <h2 className="text-3xl font-bold mb-8 text-sky-400">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 px-6">
        {skills.map((s, i) => (
          <span key={i} className="bg-slate-700 px-4 py-2 rounded-lg text-sm">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
