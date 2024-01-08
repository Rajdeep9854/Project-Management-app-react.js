import React from 'react'

const SelectedProject = ({project,onDelete}) => {
        console.log(project);
    const formattedDate = new Date(project[0].dueDate).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'short',
        day:'numeric'
    })
  return (
    <div className='w-[35rem] mt-16 '>
        <header className='pb-4 mb-4 border-b-2 border-stone-300 '>
            <div className='flex items-center justify-between'>
                  <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project[0].title}</h1>
                <button 
                onClick={()=>onDelete(project[0].id)}
                className='text-stone-600 hover:text-stone-900'
                >
                Delete
                </button>
            </div>
            <p className='mb-4 text-stone-400'>{formattedDate}</p>
            <p className='text-stone-600 whitespace-pre-wrap'>{project[0].description}</p>
        </header>
        TASKS
    </div>
  )
}

export default SelectedProject