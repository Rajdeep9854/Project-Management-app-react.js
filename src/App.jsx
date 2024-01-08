import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject"

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
  function handleProjectSelect(id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }
  function handleProjectDelete(id){
    const updatedProjects = projectState.projects.filter((project)=> project.id != id);
    //console.log(updatedProjects);
    const finalObject = {
      projects : updatedProjects,
      selectedProjectId : undefined
    }
    console.log(finalObject)
    setProjectState(finalObject)
  }
  const selectedProject = projectState.projects.filter((project)=> project.id === projectState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} onDelete={handleProjectDelete} />
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectsSelected onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
      onSelectProject={handleProjectSelect}
      onStartAddProject={handleStartAddProject} 
      projects={projectState.projects}
       />
      {content}
      
    </main>
  );
}

export default App;
