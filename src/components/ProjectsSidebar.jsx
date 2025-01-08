import React from 'react'

function ProjectsSidebar() {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-md'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Your Projects</h2>
        <div className="">
          <button>+ Add Project</button>    
        </div>
    </aside>
  )
}

export default ProjectsSidebar