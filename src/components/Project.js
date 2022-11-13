import React, {useState} from 'react';
import ProjectForm from './ProjectForm';
import { RiCloseCircleLine, RiCheckboxCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Project({projects, completeProject, removeProject, editProject }) {

    const [edit, setEdit] = useState({
        id: null,
        value: '',
        date: '',
    });

    const submitUpdate = value => {
        editProject(edit.id, value)
        setEdit({
            id: null,
            value: '',
            date: ''
        });
    };

    if (edit.id) {
        return <ProjectForm edit={edit} onSubmit={submitUpdate} />
    }

  return projects.map((project, index) => (
    <div className={project.isComplete ? 'project-row complete' : 'project-row'}
    key={index}
    >
        <div className='project-details'>
            <div className='project-name' key={project.id} onClick={() => setEdit({id: project.id, value: project.text})}>
                {project.text}
            </div>
            <div className='project-date'>
                {project.date}
            </div>
        </div>
        <div className='icons'>
            <RiCheckboxCircleLine 
            onClick={() => completeProject(project.id)}
            className='check-icon' />
            <RiCloseCircleLine
            onClick={() => removeProject(project.id)}
            className='delete-icon' />
            <TiEdit
            onClick={() => setEdit({id: project.id, value: project.text})}
            className='edit-icon' />
        </div>

    </div>
  ))
}

export default Project