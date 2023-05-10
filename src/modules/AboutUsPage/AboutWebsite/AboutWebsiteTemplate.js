import React from 'react'
import "./AboutWebsiteTemplate.css"
import image from "../../../assets/image.jpg"

export default function AboutWebsiteTemplate() {
  return (
    (
        <>
            <div className='container'>
                <div className='leftContainer'>
                <h2>About Travelaja.com</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum et in feugiat. Platea in diam, est congue. Posuere sapien morbi augue ultrices. Et facilisi orci sollicitudin placerat lacus lacus nibh. Egestas semper massa viverra massa proin in morbi placerat. Pharetra nec, est non integer nisi, ut faucibus. Non, in nam sollicitudin vitae volutpat ac molestie. Turpis pellentesque sit pellentesque id cras lobortis tortor, blandit.</p>
                <p>Id ac non, semper turpis maecenas. Convallis tempor fringilla quisque arcu, dictum. Vitae cursus vel netus tincidunt vitae. Malesuada velit, at mattis adipiscing quisque tristique id magna. Blandit porta sit nam magna sit. Turpis vestibulum facilisis placerat habitant gravida eget. Lacus pretium, arcu non adipiscing sed faucibus semper eget tempor.</p>
                </div>
                <div className='rightContainer'>
                    <img src={image} alt="x"></img>
                </div>

            </div>
           
        </>

    )
  )
}
