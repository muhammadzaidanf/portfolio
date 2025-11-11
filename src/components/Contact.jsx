export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center bg-slate-900">
      <h2 className="text-3xl font-bold text-sky-400 mb-4">Contact Me</h2>
      <p className="text-gray-400 mb-8">Let’s collaborate or talk tech!</p>
      <div className="space-x-6">
        <a href="mailto:muhammadzaidanfaiz8@gmail.com" className="hover:text-sky-400">📧 Email</a>
        <a href="https://linkedin.com/in/mzaidanfaiz" target="_blank" rel="noreferrer" className="hover:text-sky-400">💼 LinkedIn</a>
        <a href="https://github.com/muhammadzaidanf" target="_blank" rel="noreferrer" className="hover:text-sky-400">🐙 GitHub</a>
      </div>
    </section>
  );
}
