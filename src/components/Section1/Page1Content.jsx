import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {

  return (
    <div className='py-3 h-[85vh] flex gap-10 px-18'>
        <LeftContent/>
        <RightContent User={props.User}/>
    </div>
  )
}

export default Page1Content