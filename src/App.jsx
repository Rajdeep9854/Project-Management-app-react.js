import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState , setProjectState] = useState({
    selectedProjectId : undefined,
    projects: []
  })

  

  function handleStartAddProject(){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectId : null
      }

    })
  }

  function handleAddProject(projectData){
    setProjectState((prevState)=>{
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects : [...prevState.projects,newProject]
      }
    })
  }
  function handleCancelAddProject(){
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId : undefined
      }
    })
  }
  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectsSelected onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects}  />
      {content}
    </main>
  );
}

export default App;
