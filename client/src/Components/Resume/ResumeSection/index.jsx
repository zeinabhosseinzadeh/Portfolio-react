import React from 'react'

export default function ResumeSection({title,children}) {
  return (
    <div className='space-y-6'>
     <h2 className='text-xl font-semibold border-b pb-2'>{title}</h2>
     {children}
    </div>
  )
}
