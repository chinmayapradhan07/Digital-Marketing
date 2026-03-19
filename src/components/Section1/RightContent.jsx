import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full flex flex-nowrap gap-10 w-2/3 p-7' >
      {/* //overflow-auto */}
      {props.User.map(function(element, idx){
        return <RightCard key={idx} id={idx} img={element.img} intro={element.intro} tag={element.tag} />
      })}
    </div>
  )
}

export default RightContent