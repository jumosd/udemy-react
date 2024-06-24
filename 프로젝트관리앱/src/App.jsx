import { useState } from "react";
import NewProject from "./components/NewProject";
import NoselectedProject from "./components/NoSelectedProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import Selectproject from "./components/Selectproject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })
  //프로젝트 선택
  const handleSelectProject = (id) => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: id
    }))
  }

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
  //프로젝트 취소
  const CancelAddProjectHandler = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    });
  }
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <Selectproject project={selectedProject} />
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={addProjectHandler} onCancel={CancelAddProjectHandler} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoselectedProject onStartAddProject={handleStartAddProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar
          onStartAddProject={handleStartAddProject}
          onSelectProject={handleSelectProject}
          projects={projectsState.projects} />
        {content}
      </main>
    </>
  );
}

export default App;
