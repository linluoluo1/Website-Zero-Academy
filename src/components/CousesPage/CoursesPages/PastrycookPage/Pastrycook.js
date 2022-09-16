import React from 'react'
import './Pastrycook.scss'
import { Button } from 'react-bootstrap';
import { Clock } from 'react-bootstrap-icons';
import { CaretRight } from 'react-bootstrap-icons';
import { Globe } from 'react-bootstrap-icons';
import AccordionCourse from './AccordionCourse';
import FormToEnrollCourse from './FormToEnrollCourse';
import CourseExampleCarousel from './CourseExampleCarousel';
import Footer from '../../../Mainpage/Footer/Footer';


function Pastrycook() {
    return (
        <>
            <div className='course-page-wrapper'>
                {/* Course intro */}
                <div className='page-header row justify-content-between'>
                    <div className='header-text col-8'>
                        <p className='before-heading-text-pastrycook'>Курс</p>
                        <h1 className='heading-pastrycook'>Домашний кондитер</h1>
                        <p className='after-heading-text-pastrycook'>Научитесь готовить более 50 вкусных и красивых десертов у себя на кухне, даже если никогда не дружили с духовкой!</p>
                        <p className='number-free-place'>Осталось 3 из 20 мест 🔥 </p>
                        <Button className='me-4 btn-enroll'> Записаться на курс</Button>
                        <Button className='bg-white text-dark btn btn-ask-question'>Задать вопрос</Button>

                    </div>


                    <div className='price-logo-card col-3 '>
                        <img className='logo-pastrycook-img' src={require('./media/course-logo.png')} alt='logo-pastrycook-img'></img>
                        <div className='price-info-card'>
                            <p>Цена <s>950р</s></p>
                            <p>700p</p>
                            <p>В рассрочку на 2 мес 350 BYN/мес</p>
                        </div>
                    </div>
                </div>

                {/* Course short info */}
                <div className='course-info-container row bg-white'>
                    <div className='col info-duration'>
                        <Clock />
                        <p className='pt-2 pb-0 mb-1'> Длительность</p>
                        <p className='pt-0'> 10 недель</p>
                    </div>

                    <div className='col info-duration'>
                        <CaretRight />
                        <p className='pt-2 pb-0 mb-1'> Материал</p>
                        <p className='pt-0'> 12 уроков</p>
                    </div>

                    <div className='col info-duration'>
                        <img className='start-course-pastrycook' src={require('./media/deadline (1).png')} alt='start-deadline'></img>
                        <p className='pt-2 pb-0 mb-1'> Старт</p>
                        <p className='pt-0'> 25 августа</p>
                    </div>

                    <div className='col info-duration'>
                        <img className='entry-level-course-pastrycook' src={require('./media/medal.png')} alt='start-deadline'></img>
                        <p className='pt-2 pb-0 mb-1'> Уровень</p>
                        <p className='pt-0'> С нуля</p>
                    </div>

                    <div className='col info-duration'>
                        <Globe />
                        <p className='pt-2 pb-0 mb-1'> Формат</p>
                        <p className='pt-0'> онлайн</p>
                    </div>
                </div>

                {/* Course description */}
                <div className='pastrycook-course-description'>
                    <h2 className='mb-3'> Описание курса</h2>
                    <p>Курсы Домашний кондитер позволит освоить технику создания кондитерских изделий, десертов. Вы сможете открыть в себе талант, который поможет Вам сделать праздник запоминающим.
                    </p>
                    <p>Курс является началом карьеры, для тех, кто любит готовить и мечтает радовать шедеврами не только свою семью и друзей.
                    </p>
                </div>


                {/* Course map */}
                <div className='course-map-wrapper'>
                    <h2 className='mb-4'>Программа курса</h2>
                    <AccordionCourse />
                </div>

                {/* About Author */}
                <div className='about-author-wrapper mb-5'>
                    <h2 className='mb-4'> Об авторе курса</h2>
                    <div className='row justify-content-between'>
                        <div className='col author-info-text mt-5'>
                            <div className='row'>
                                <h3 className='col-7'>Мария Афсеева</h3>
                                <div className='col d-flex align-items-center'>
                                    <img className='author-social-img fluid-img' src={require('./media/linkedin.png')} alt='linkedin '></img>
                                    <img className='author-social-img fluid-img' src={require('./media/instagram.png')} alt='instagram'></img>
                                    <img className='author-social-img fluid-img' src={require('./media/youtube.png')} alt='youtube'></img></div>
                            </div>
                            <p className='mt-4'>Я с уверенностью говорю вам, что научить готовить на профессиональном уровне можно любого, даже того, кто не умеет включать духовку и абсолютно не разбирается в десертах. Главное — чтобы было желание научиться.</p>
                            <p className='mb-4'>Если вы начинающий кондитер, или просто любите готовить десерты для друзей и родных, любите удивлять, то уверена, что мои знания вам помогут</p>
                            <Button className='btn-enroll-course mt-3'>Записаться на курс</Button>
                        </div>
                        <img className='author-bg-img col img-fluid ' src={require('./media/V3 (2).png')} alt='author'></img>
                    </div>
                </div>

                {/* Slider examples of work */}
                <div className='examples-container'>
                    
                    
                    <CourseExampleCarousel />
                </div>
                

                {/* Form to enroll */}
                <FormToEnrollCourse />


                <Footer />


                {/* Background blue bubbles */}
                <div className='course-vector-img1'></div>
                <div className='course-vector-img2'></div>
                <div className='course-vector-img3'></div>
                <div className='course-vector-img4'></div>
           
           
            </div>
        </>
    )
}

export default Pastrycook
