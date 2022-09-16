import React, {useState} from 'react'
import './CourseExampleCarousel.scss'
import { ArrowLeft } from 'react-bootstrap-icons'
import { ArrowRight } from 'react-bootstrap-icons'

const ELEMENT_WIDTH = 300;


function CourseExampleCarousel() {

    const [offset, setOffset] = useState(0)

 let handllePrevClick = () => {
    console.log(' prev button clicked')
    setOffset((currentOffset) => {
        const newOffset = currentOffset + ELEMENT_WIDTH
        console.log(newOffset)
        return Math.min(newOffset, 0)})

 }

 let handlleNextClick = () => {
    console.log(' next button clicked')

    setOffset((currentOffset) => {
const newOffset = currentOffset - ELEMENT_WIDTH
const maxOffset = -900;
console.log(newOffset)
return Math.max(newOffset, maxOffset)
    })
 }
    return (
        <>
            <div className='course-carousel-container'  id='carouselWidth' >
                <div className='carousel-heading-navigation d-flex justify-content-between align-items-center'>
                    <h2 className='mb-3'>Работы на курсе</h2>
                    <div className='course-carousel-nav d-flex'>
                        <button id='prev' className='course-nav-btn' onClick={handllePrevClick}><ArrowLeft className='course-carousel-nav-prev '  /></button>
                       <button id='next' className='course-nav-btn' onClick={handlleNextClick}> <ArrowRight className='course-carousel-nav-next '  /></button>
                    </div>
                </div>


                <div className='course-carousel-track'
                style={{
                    transform:`translateX(${offset}px)`
                }}>
                    <div className='course-carousel-card-container'>
                        <div className='course-carousel-card'>
                            <img src={require('./media/muffins.png')} alt='example'></img>
                        </div>
                    </div>

                    <div className='course-carousel-card-container'>
                        <div className='course-carousel-card'>
                            <img src={require('./media/cheezecake.png')} alt='example'></img>
                        </div>
                    </div>

                    <div className='course-carousel-card-container'>
                        <div className='course-carousel-card'>
                            <img src={require('./media/cheezecake2.png')} alt='example'></img>
                        </div>
                    </div>

                    <div className='course-carousel-card-container'>
                        <div className='course-carousel-card'>

                        </div>
                    </div>

                    <div className='course-carousel-card-container'>
                        <div className='course-carousel-card'>
                            <img src={require('./media/cheezecake.png')} alt='example'></img>
                        </div>
                    </div>

                    <div className='course-carousel-card-container'>
                        <div className='course-carousel-card'>

                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default CourseExampleCarousel
