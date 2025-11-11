import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-sky-400">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-3">{p.desc}</p>
            <p className="text-sm text-gray-500 mb-3">{p.tech.join(", ")}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300">🔗 View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
