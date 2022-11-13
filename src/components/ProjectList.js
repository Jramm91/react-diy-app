import React, {useState} from 'react'
import Project from './Project';
import ProjectForm from './ProjectForm'

function ProjectList() {
    const [projects, setProjects] = useState([]);

    const addProject = project => {
        if(!project.text || /^\s*$/.test(project.text)) {
            return;
        }

        const newProjects = [...projects, project]

        setProjects(newProjects)
    };

    const editProject = (projectId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setProjects(prev => prev.map(item => (item.id === projectId ? newValue : item)))
    }

    const removeProject = id => {
        const removeArr = [...projects].filter(project => project.id !== id)

        setProjects(removeArr);
    };

    const completeProject = id => {
        let updatedProjects = projects.map(project => {
            if (project.id === id) {
                project.isComplete = !project.isComplete
            }
            return project
        });
        setProjects(updatedProjects);
    };


  return (
    <div>
        <h1>Project List</h1>
        <ProjectForm onSubmit={addProject} />
        <Project 
        projects={projects}
        completeProject={completeProject}
        removeProject={removeProject} 
        editProject={editProject}
        />
    </div>
  )
}

export default ProjectList