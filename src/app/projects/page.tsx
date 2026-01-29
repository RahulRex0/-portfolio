import projects from "@/data/projects.json"

type Project={
  id:number;
  title:string;
  description:string;
};

export default function ProjectsPage() {

  const typedProjects = projects as Project[];

    return (
      <main style={{ padding: 24 }}>
        <h1>Projects</h1>
        {typedProjects.map((p) => (
          <div key={p.id} style={{ padding: 12, border: "1px solid #333", marginTop: 12 }}>
            <h2 style={{ margin: 0 }}>{p.title}</h2>
            <p style={{ margin: "8px 0 0" }}>{p.description}</p>
          </div>
      ))}
    </main>
    );
  }
  