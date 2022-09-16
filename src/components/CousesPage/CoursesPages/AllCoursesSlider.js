import React, { useState } from 'react';
import './AllCoursesSlider.scss'
import { ChevronLeft } from "react-bootstrap-icons";
import { ChevronRight } from "react-bootstrap-icons";
import { Clock } from "react-bootstrap-icons";
import { Play } from "react-bootstrap-icons";

const LIST_WIDTH = 915

function AllCoursesSlider() {

  const  [ slideIndex, setSlideIndex] = useState(0)

  const prevCoursesList = () => {
    
    setSlideIndex((currentSlideIndex) => {
        const newIndex = currentSlideIndex + LIST_WIDTH
        const maxIndex = -1830;
        console.log(newIndex)
        const result = () => {
          if (newIndex >= LIST_WIDTH) {
            return Math.max(maxIndex)
          } else {
            return Math.min(newIndex, 0)
          }
        }
  
      
        return (
          result()
        )
        })
  
  }

  const nextCoursesList = () => {

     setSlideIndex((currentSlideIndex) => {
        console.log(currentSlideIndex)
  const newIndex = currentSlideIndex - LIST_WIDTH
  const maxIndex = -1830;
  console.log(newIndex)
  const result = () => {
    if (newIndex < maxIndex) {
      return Math.min(0)
    } else {
      return Math.max(newIndex, maxIndex)
    }
  }
  
  return (
    result()
  )
    })
  }


    return (
        <>
            <div className='courses-main-wrapper' >

                <div className='all-courses-slider-container' 
                 style={{
                    transform:`translateX(${slideIndex}px)`}}>
                        {/* 1card */}
                    <div className='all-courses-slider-container-item'>
                        <img className='all-courses-slider-card-img' src={require('./sliderMedia/cosmetic.png')}></img>
                        <div className='explanation-tags'>
                            <span>#здоровье</span>
                            <span>#онлайн</span>
                            <span>#для взрослых</span>
                        </div>
                        <h3>Путь Косметолога</h3>

                        <p className='all-courses-card-text'>Станьте востребованным косметологом, пройдя наш курс по косметологии.
                        </p>
                        <div className='all-courses-card-duration'>
                            <div>
                                <Clock className='duration-icon clock' />
                                <p className='course-duration-info'>12 часов</p>
                            </div>
                            <div>
                                <Play className='duration-icon play' />
                                <p className='course-duration-info'>24 урока</p>
                            </div>

                        </div>
                        <span className='all-courses-card-price'>500р</span>
                        <span className='all-courses-card-old-price'><del>500р</del></span>
                    </div>

{/* 2card */}
                    <div className='all-courses-slider-container-item'>
                        <img className='all-courses-slider-card-img' src={require('./sliderMedia/emotionalIntelligence.png')}></img>
                        <div className='explanation-tags'>
                            <span>#здоровье</span>
                            <span>#онлайн</span>
                            <span>#для взрослых</span>
                        </div>
                        <h3>Эмоциональное здоровье</h3>

                        <p className='all-courses-card-text'>Узнайте, как проявляется ваша тревога и какие есть способы работы с тревожными расстройствами. 
                        </p>
                        <div className='all-courses-card-duration'>
                            <div>
                                <Clock className='duration-icon clock' />
                                <p className='course-duration-info'>4 часа</p>
                            </div>
                            <div>
                                <Play className='duration-icon play' />
                                <p className='course-duration-info'>8 урока</p>
                            </div>

                        </div>
                        <span className='all-courses-card-price'>120р</span>
                        <span className='all-courses-card-old-price'><del>300р</del></span>
                    </div>


                   

                    {/* 3card */}
                    <div className='all-courses-slider-container-item'>
                        <img className='all-courses-slider-card-img' src={require('./sliderMedia/muffin.png')}></img>
                        <div className='explanation-tags'>
                            <span>#здоровье</span>
                            <span>#онлайн</span>
                            <span>#для взрослых</span>
                        </div>
                        <a href='/pastrycook'> <h3>Домашний кондитер</h3></a>

                        <p className='all-courses-card-text'>Научитесь готовить более 50 вкусных и красивых десертов у себя на кухне, даже если никогда не дружили с духовкой!
                        </p>
                        <div className='all-courses-card-duration'>
                            <div>
                                <Clock className='duration-icon clock' />
                                <p className='course-duration-info'>8 часов</p>
                            </div>
                            <div>
                                <Play className='duration-icon play' />
                                <p className='course-duration-info'>10 урока</p>
                            </div>

                        </div>
                        <span className='all-courses-card-price'>700р</span>
                        <span className='all-courses-card-old-price'><del>950р</del></span>
                    </div>

                    {/* 4card */}
                    <div className='all-courses-slider-container-item'>
                        <img className='all-courses-slider-card-img' src={require('./sliderMedia/astronomy.png')} ></img>
                        <div className='explanation-tags'>

                            <span>#развитие</span>
                            <span>#онлайн</span>
                            <span>#для детей</span>

                        </div>
                        <h3>Астрономия и космос</h3>

                        <p className='all-courses-card-text'>Узнаете, как появилась Вселенная, наша Галактика, Солнечная система и Земля. 
                        </p>
                        <div className='all-courses-card-duration'>
                            <div>
                                <Clock className='duration-icon clock' />
                                <p className='course-duration-info'>7 часов</p>
                            </div>
                            <div>
                                <Play className='duration-icon play' />
                                <p className='course-duration-info'>15 уроков</p>
                            </div>

                        </div>
                        <span className='all-courses-card-price'>100р</span>
                        <span className='all-courses-card-old-price'><del>250р</del></span>
                    </div>

                    <div className='all-courses-slider-container-item'>
                        <img className='all-courses-slider-card-img' src={require('./sliderMedia/cosmetic.png')}></img>
                    </div>
                    <div className='all-courses-slider-container-item'>
                        <img className='all-courses-slider-card-img' src={require('./sliderMedia/emotionalIntelligence.png')}></img>
                    </div>
                    <div className='all-courses-slider-container-item'>
                        <img className='all-courses-slider-card-img' src={require('./sliderMedia/oratory.png')}></img>
                    </div>
                    <div className='all-courses-slider-container-item'>
                        <img className='all-courses-slider-card-img' src={require('./sliderMedia/astronomy.png')} ></img>
                    </div>
                    <div className='all-courses-slider-container-item'>
                        <img className='all-courses-slider-card-img' src={require('./sliderMedia/cosmetic.png')}></img>
                    </div>
                    <div className='all-courses-slider-container-item'>
                        <img className='all-courses-slider-card-img' src={require('./sliderMedia/emotionalIntelligence.png')}></img>
                    </div>
                    <div className='all-courses-slider-container-item'>
                        <img className='all-courses-slider-card-img' src={require('./sliderMedia/oratory.png')}></img>
                    </div>
                    <div className='all-courses-slider-container-item'>
                        <img className='all-courses-slider-card-img' src={require('./sliderMedia/astronomy.png')} ></img>
                    </div>
                </div>
                <div className='all-courses-slider-navigation'>
                <ChevronLeft onClick={prevCoursesList} className='all-courses-chevron-left all-courses-chevron' />
                <ChevronRight onClick={nextCoursesList} className='all-courses-chevron-right all-courses-chevron' />
                </div>
            </div>

        </>
    )
}
export default AllCoursesSlider
