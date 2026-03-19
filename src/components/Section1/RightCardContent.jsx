import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className=' absolute top-0 left-0  p-8 flex flex-col justify-between h-full w-full '>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-bold'>1</h2>
            <div>
                <p className='text-xl text-black mb-5'>Lorem ipsum dolor sit,{props.intro} amet consectetur adipisicing elit. Sequi perferendis numquam blanditiis explicabo! Laudantium, impedit.</p>
                <div>
                    <button className='bg-blue-500 text-white font-semibold px-8 py-3 rounded-full text-lg'>{props.tag}</button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent