import React from 'react'
import './Mainpage.scss'
import CoursesV1 from './Courses/CoursesV1';
import { Button } from 'react-bootstrap';
import CoursesV2 from './Courses/CoursesV2';
import Feedback from './../Mainpage/Feedback/Feedback';
import Form from './Form/Form';
import Footer from './Footer/Footer';



function Mainpage() {
    return (
        <>
            <main className='main-page '>

                {/*Intro-info */}

                <section className='intro-info row'>
                    <h1 className='col-8 heading-intro p-0'>Zero.<span>Academy</span> <br />
                        сделает тебя лучше!</h1>
                    <div className='text-container w-30.25rem p-0'>
                        <p className='mb-4 mt-3'>
                            Давайте пройдем онлайн-курс, чтобы <span>улучшить свои навыки</span>  по-другому, вы можете установить свое <span>собственное время обучения</span> в соответствии с вашими потребностями в обучении. Так Вы можете спокойно <span>учиться и усваивать материал.</span>
                        </p >
                    </div>

                    <img src={require('./../../media/img/intro-img.png')} className='intro-img col-4 img-fluid ' alt='girl-img' ></img>
                </section>
                <Button className='btn btn-courses-primary p-0'>Все курсы</Button>

                <div className='info-card row bg-white mx-auto gx-5 gy-4 text-center align-items-center'>
                    <div className='col-md'>
                        <h1 >10.000+</h1>
                        <p>студентов</p>
                    </div>

                    {/*Info-card */}

                    <div className='col-md'>
                        <h1>30+</h1>
                        <p>наставников</p>
                    </div>

                    <div className='col-md'>
                        <h1>50+</h1>
                        <p>студентов</p>
                    </div>
                </div>

                {/*Courses-cards */}

                <CoursesV1 />
                {/* <CoursesV2 /> */}

                {/* Our advantages */}
                <section className='our-advantages-section '>
                    <h2 className='advantages-heading'> Наши преимущества:</h2>
                    <div className='advantages-wrapes row'>
                        <div className='advantages-column col'>
                            <div className='advantages-item certificate-adv'>
                                <div className='img-wrapper mt-3 mb-3 d-inline-flex align-items-center justify-content-center'> <img className='advatnages-img img-scale-big' src={require('./../../media/img/certificate-adv.png')} alt='certificate'></img>
                                </div>
                               <div className='advantages-text ms-3 d-inline-block '>
                                <p>Сертификат участника</p>
                               </div>
                                
                            </div>
                            <div className='advantages-item attention-adv'>
                                <div className='img-wrapper mt-3 mb-3 d-inline-flex align-items-center justify-content-center'><img className='advatnages-img' src={require('./../../media/img/approve-adv.png')} alt='attencion'></img>
                                </div>
                                <div className='advantages-text ms-3 d-inline-block '>
                                <p>Индивидуальный подход к каждому с проверкой ДЗ</p>
                               </div>
                                
                            </div>
                        </div>

                        <div className='advantages-column col'>
                            <div className='advantages-item access-adv'>
                                <div className='img-wrapper  mt-3 mb-3 d-inline-flex align-items-center justify-content-center'><img className='advatnages-img img-invert' src={require('./../../media/img/access-adv.png')} alt='access'></img>
                                </div>
                                <div className='advantages-text ms-3 d-inline-block '>
                                <p>Постоянный доступ к курсу</p>
                               </div>
   
                            </div>
                            <div className='advantages-item refung-adv'>
                                <div className='img-wrapper mt-3 mb-3 d-inline-flex align-items-center justify-content-center'>
                                <img className='advatnages-img' src={require('./../../media/img/return-adv.png')} alt='refung'></img>
                                </div>
                                <div className='advantages-text ms-3 d-inline-block '>
                                <p>Вернём полную сумму, если Вам не понравится курс</p>
                               </div>
                                
                            </div>
                        </div>

                    </div>

                </section>

    {/* Feedback */}
<Feedback />

{/*Form*/}

<Form />

{/* Footer */}
 
<Footer />

                {/* Background blue bubbles */}
                <div className='vector-img1'></div>
                <div className='vector-img2'></div>
                <div className='vector-img3'></div>
                <div className='vector-img4'></div>
            </main>

        </>
    )
}

export default Mainpage
