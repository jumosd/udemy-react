import { useState } from "react";
import NewProject from "./components/NewProject";
import NoselectedProject from "./components/NoSelectedProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  //프로젝트 추가 기능
  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }

  //프로젝트 추가
  const addProjectHandler = (projectData) => {

    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {

        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState)

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={addProjectHandler} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoselectedProject onStartAddProject={handleStartAddProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
        {content}
      </main>
    </>
  );
}

export default App;
