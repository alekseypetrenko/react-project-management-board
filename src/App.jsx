import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSElected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleEndAddProject(projectData) {
    setProjectsState((prevstate) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevstate,
        selectedProjectId: undefined,
        projects: [...prevstate.projects, newProject],
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleEndAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
