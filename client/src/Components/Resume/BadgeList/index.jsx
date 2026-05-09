import React from 'react'

export default function BadgeList({items}) {
  return (
   <div className='flex flex-wrap gap-2'>
     {items.map((item,index)=>
     <span key={index} className='px-3 py-1 bg-black text-white rounded-full text-sm'>
          {item}
     </span>
     )}
   </div>
  )
}
