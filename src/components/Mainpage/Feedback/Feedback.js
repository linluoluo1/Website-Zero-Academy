import React, { useState }  from 'react'
import './Feedback.scss'
import { Carousel } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons'
import { ArrowRight } from 'react-bootstrap-icons'
 

// window.addEventListener('load', Feedback())


const SLIDE_WIDTH = 910;

function Feedback() {
const [offset, setOffset] = useState(1)

let prevBtn = () => {
  console.log(' prev button clicked')
  setOffset((currentOffset) => {
      const newOffset = currentOffset + SLIDE_WIDTH
      const maxOffset = -3640;
      console.log(newOffset)
      const result = () => {
        if (newOffset >= SLIDE_WIDTH) {
          return Math.max(maxOffset)
        } else {
          return Math.min(newOffset, 0)
        }
      }

      // checkPagItems();
      return (
        result()
      )
      })

}

let nextBtn = () => {
  console.log(' next button clicked')

  setOffset((currentOffset) => {
const newOffset = currentOffset - SLIDE_WIDTH
const maxOffset = -3640;
console.log(newOffset)
const result = () => {
  if (newOffset < maxOffset) {
    return Math.min(0)
  } else {
    return Math.max(newOffset, maxOffset)
  }
}

// checkPagItems();
return (
  result()
)
  })
}

const movePag = currentOffset => {
setOffset(currentOffset)

  }


  

//  const checkPagItems = (pag) => {
//   pagination.forEach(pag => {
//     pag.target.classList.toggle('active')
//     console.log(checkPagItems())
//   })
 
//  }

  return (
    <>
      <div className='course-feedback-container'>
        <div className='carousel-feedback-heading-navigation d-flex justify-content-between align-items-center'>
          <h2 className='mb-3'>Отзывы о курсах</h2>

          <div className='course-feedback-carousel-nav d-flex'>
            <button id='fdbck-prev' className='course-fdbck-nav-btn'  
onClick={prevBtn} ><ArrowLeft className='course-fdbck-carousel-nav-prev ' /></button>
            <button id='fdbck-next' className='course-fdbck-nav-btn' onClick={nextBtn} > <ArrowRight className='course-fdbck-carousel-nav-next ' /></button>
          </div>
        </div>


        <div className='course-feedback-carousel-track'
          style={{ transform: `translateX(${offset}px)`}}>


          <div className='course-feedback-carousel-card-container'>
            <div className='course-feedback-carousel-card  '>
              <p >Светлана Новикова</p>
              <img src={require('./../../../media/img/female-student.png')} alt='example'></img>
              <div className='feedback-stars-rate '>
                <span></span>
                <img src={require('./../../../media/img/rate.png')}></img>
                <span></span>
              </div>
              <div className='card-fdbck-text-wrapper'>
              <p className='card-fdbck-text'>«Курс поначалу показался сложным, несколько домашних заданий у меня даже не приняли. Но после того, как я стал лучше вникать в материал, все пошло как по маслу. Преподаватели классные, все нравится!»</p>
              </div>
             
            </div>
          </div>

          <div className='course-feedback-carousel-card-container'>
            <div className='course-feedback-carousel-card'>
              <p>Николай Маевский</p>
              <img src={require('./../../../media/img/male-student.png')} alt='example'></img>
              <div className='feedback-stars-rate '>
                <span></span>
                <img src={require('./../../../media/img/rate.png')}></img>
                <span></span>
              </div>
              <div className='card-fdbck-text-wrapper'>
                <p className='card-fdbck-text'>«Очень порадовал объем и количество предоставленного учебного материала. Спасибо всем преподавателям! В процессе обучения никаких проблем в организационной части не было. На вопросы давались разъяснения.»</p>
              </div>
            </div>
          </div>

          <div className='course-feedback-carousel-card-container'>
            <div className='course-feedback-carousel-card'>
              <p>Светлана Новикова</p>
              <img src={require('./../../../media/img/female-student.png')} alt='example'></img>
              <div className='feedback-stars-rate '>
                <span></span>
                <img src={require('./../../../media/img/rate.png')}></img>
                <span></span>
              </div>
              <div className='card-fdbck-text-wrapper'>
              <p className='card-fdbck-text'>«Курс поначалу показался сложным, несколько домашних заданий у меня даже не приняли. Но после того, как я стал лучше вникать в материал, все пошло как по маслу. Преподаватели классные, все нравится!»</p>
              </div>
             
            </div>
          </div>

          <div className='course-feedback-carousel-card-container'>
            <div className='course-feedback-carousel-card'>
              <p>Николай Маевский</p>
              <img src={require('./../../../media/img/male-student.png')} alt='example'></img>
              <div className='feedback-stars-rate '>
                <span></span>
                <img src={require('./../../../media/img/rate.png')}></img>
                <span></span>
              </div>
              <div className='card-fdbck-text-wrapper'>
                <p className='card-fdbck-text'>«Очень порадовал объем и количество предоставленного учебного материала. Спасибо всем преподавателям! В процессе обучения никаких проблем в организационной части не было. На вопросы давались разъяснения.»</p>
              </div>
            </div>
          </div>

          <div className='course-feedback-carousel-card-container'>
            <div className='course-feedback-carousel-card'>
              <p>Светлана Новикова</p>
              <img src={require('./../../../media/img/female-student.png')} alt='example'></img>
              <div className='feedback-stars-rate '>
                <span></span>
                <img src={require('./../../../media/img/rate.png')}></img>
                <span></span>
              </div>
              <div className='card-fdbck-text-wrapper'>
              <p className='card-fdbck-text'>«Курс поначалу показался сложным, несколько домашних заданий у меня даже не приняли. Но после того, как я стал лучше вникать в материал, все пошло как по маслу. Преподаватели классные, все нравится!»</p>
              </div>
             
            </div>
          </div>

          <div className='course-feedback-carousel-card-container'>
            <div className='course-feedback-carousel-card'>
              <p>Николай Маевский</p>
              <img src={require('./../../../media/img/male-student.png')} alt='example'></img>
              <div className='feedback-stars-rate '>
                <span></span>
                <img src={require('./../../../media/img/rate.png')}></img>
                <span></span>
              </div>
              <div className='card-fdbck-text-wrapper'>
                <p className='card-fdbck-text'>«Очень порадовал объем и количество предоставленного учебного материала. Спасибо всем преподавателям! В процессе обучения никаких проблем в организационной части не было. На вопросы давались разъяснения.»</p>
              </div>
            </div>
          </div>

          <div className='course-feedback-carousel-card-container'>
            <div className='course-feedback-carousel-card'>
              <p >Светлана Новикова</p>
              <img src={require('./../../../media/img/female-student.png')} alt='example'></img>
              <div className='feedback-stars-rate '>
                <span></span>
                <img src={require('./../../../media/img/rate.png')}></img>
                <span></span>
              </div>
              <div className='card-fdbck-text-wrapper'>
              <p className='card-fdbck-text'>«Курс поначалу показался сложным, несколько домашних заданий у меня даже не приняли. Но после того, как я стал лучше вникать в материал, все пошло как по маслу. Преподаватели классные, все нравится!»</p>
              </div>
             
            </div>
          </div>

          <div className='course-feedback-carousel-card-container'>
            <div className='course-feedback-carousel-card'>
              <p>Николай Маевский</p>
              <img src={require('./../../../media/img/male-student.png')} alt='example'></img>
              <div className='feedback-stars-rate '>
                <span></span>
                <img src={require('./../../../media/img/rate.png')}></img>
                <span></span>
              </div>
              <div className='card-fdbck-text-wrapper'>
                <p className='card-fdbck-text'>«Очень порадовал объем и количество предоставленного учебного материала. Спасибо всем преподавателям! В процессе обучения никаких проблем в организационной части не было. На вопросы давались разъяснения.»</p>
              </div>
            </div>
          </div>

          <div className='course-feedback-carousel-card-container'>
            <div className='course-feedback-carousel-card'>
              <p>Светлана Новикова</p>
              <img src={require('./../../../media/img/female-student.png')} alt='example'></img>
              <div className='feedback-stars-rate '>
                <span></span>
                <img src={require('./../../../media/img/rate.png')}></img>
                <span></span>
              </div>
              <div className='card-fdbck-text-wrapper'>
              <p className='card-fdbck-text'>«Курс поначалу показался сложным, несколько домашних заданий у меня даже не приняли. Но после того, как я стал лучше вникать в материал, все пошло как по маслу. Преподаватели классные, все нравится!»</p>
              </div>
             
            </div>
          </div>

       

          <div className='course-feedback-carousel-card-container'>
            <div className='course-feedback-carousel-card '>
              <p>Николай Маевский</p>
              <img src={require('./../../../media/img/male-student.png')} alt='example'></img>
              <div className='feedback-stars-rate '>
                <span></span>
                <img src={require('./../../../media/img/rate.png')}></img>
                <span></span>
              </div>
              <div className='card-fdbck-text-wrapper'>
                <p className='card-fdbck-text'>«Очень порадовал объем и количество предоставленного учебного материала. Спасибо всем преподавателям! В процессе обучения никаких проблем в организационной части не было. На вопросы давались разъяснения.»</p>
              </div>
            </div>
          </div>

        </div>
          {/* Pagination items */}
          <div className='pagination-wrapper'>
{Array.from({length: 5}).map((item, currentOffset) => (
  <div onClick={() =>  movePag(currentOffset + 1)}
  className={offset === currentOffset + 1 ? 'pagination-item active' : 'pagination-item' }></div>
))}
</div>

      </div>
    </>
  )
}

export default Feedback
