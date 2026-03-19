import React from 'react'
import Section1 from './components/section1/Section1'
const App = () => {

  const User=[
    {
      img:"https://imgcdn.stablediffusionweb.com/2024/9/23/f17d33ce-8039-46d9-b3cf-2e2e88f72426.jpg",
      intro:'ok',
      tag:'satisfied'
    },
    {
      img:'https://media.gettyimages.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg=',
      intro:'hii',
      tag:'UnderServed'
    },
    {
      img:'https://media.gettyimages.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=uKfBCoTeP54nA8KOzXDLIyoU31nZ4a4UreFE4p_x_3A=',
      intro:'helo',
      tag:'UnderBanked'
    }
  ]

  return (
    <div>
      <Section1 User={User}/>
    </div>
  )
}
export default App