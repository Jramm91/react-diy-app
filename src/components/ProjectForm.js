import React, {useState, useEffect, useRef} from 'react';

function ProjectForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const [date, setDate] = useState(new Date());

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const changeDate = e => {
        setDate(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault ();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            date: date,
        });

        setInput('');
        setDate('');
    };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input 
                type="text" 
                placeholder='Update name'
                value={input}
                name='text'
                className='project-input edit'
                onChange={handleChange}
                ref={inputRef}
            />
            <input
                type='date'
                value={date}
                name='date'
                className='project-date-picker edit'
                onChange={changeDate}
            />
            <button className='project-button edit'>Update</button>
            </>
            ) :
            (
            <>
            <input 
                type="text" 
                placeholder='Project name'
                value={input}
                name='text'
                className='project-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <input
                type='date'
                value={date}
                name='date'
                className='project-date-picker'
                onChange={changeDate}
            />
            <button className='project-button'>Add</button>
            </>
            )
        }
    </form>
  )
}

export default ProjectForm