import React from 'react'

export default function ProfileCard({name,title,image}) {
  return (
     <div className='rounded-2xl h-80 w-160 bg-blue-200 p-10 text-center shadow-2xl'>
          <img 
          src={image}
          alt={name}
          className='mx-auto mb-10 h-60 w-60 rounded-full object-cover'/>

          <h2 className='mb-3 text-3xl font-bold tracking-tight'>
               {name}
          </h2>
          <p className='text-sm tracking-[0.35em] text-blue-700'>
               {title}
          </p>
     </div>

  

  )
}
