import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

export default function ScrollSpySidebar() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed top-20 left-4 w-48 space-y-2">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`block px-3 py-2 rounded-lg hover:bg-gray-200 transition ${
            activeId === id ? "bg-gray-300 font-semibold" : "text-gray-600"
          }`}
        >
          {label}
        </a>
      ))}
    </aside>
  );
}
