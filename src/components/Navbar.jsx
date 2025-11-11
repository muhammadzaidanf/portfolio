export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-slate-800 sticky top-0 shadow-lg z-50">
      <h1 className="text-2xl font-bold text-sky-400">Zaidan.dev</h1>
      <div className="space-x-6 text-gray-300">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
