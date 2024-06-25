import { useState } from "react";
import NewProject from "./components/NewProject";
import NoselectedProject from "./components/NoSelectedProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import Selectproject from "./components/Selectproject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })
  //프로젝트 선택
  const handleSelectProject = (id) => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: id
    }))
  }

  //프로젝트 추가 시작기능
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
  // 프로젝트 삭제
  const handleDeleteProject = () => {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(project => project.id != prevState.selectedProjectId)
    }))
  }
  // 할일목록 추가
  const handleAddTask = (text) => {
    setProjectsState(prevState => {
      const taskId = Math.random()
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProjectId,
        text: text
      };

      return (
        {
          ...prevState,
          tasks: [newTask, ...prevState.tasks]
        }
      )
    })
  }
  const handleDeleteTask = (id) => {
    setProjectsState(prevState => ({
      ...prevState,
      tasks: prevState.tasks.filter(task => task.id != id)
    }))
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <Selectproject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks} />
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
