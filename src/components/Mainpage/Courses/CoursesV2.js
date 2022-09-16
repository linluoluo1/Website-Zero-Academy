import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './CoursesV2.scss'
import { Clock } from "react-bootstrap-icons";
import { Play } from "react-bootstrap-icons";


function CoursesV2() {
    return (
        <>
            <div className='cards2-wrapper row  mx-auto  justify-content-center'>
                <p className='h2 heading-courses2 '>Популярные курсы</p>
                {/* First card */}
                <Card className='card2-bg-card ms-3 mt-3 bg-transparent col-md'>
                    <Card.Body className='card2-body'>
                        <Card.Img variant="start" src={require('./../../../media/img/cosmetics.png')} className='cards2-img ms-1 mb-3 mt-2' />
                        <Card.Title className='mb-2 mt-1 ms-1 course2-title'>Путь Косметолога</Card.Title>

                        <Card.Text className='card2-text small ms-1 mb-3'>
                            Станьте востребованным косметологом, пройдя наш курс по косметологии.
                        </Card.Text>
                        {/* Duration of the 1 course */}
                        <div className='duration row mb-2'>
                            <div className='col p-0 ms-3 d-flex  '>
                                <Clock className='h4'/>
                                <p className='d-inline-block ms-1 small'>12 часов</p></div>
                            <div className='col p-0 me-3 d-flex ' >
                                <Play className='h3' />
                                <p className='d-inline-block ms-1 small'>24 урока</p>
                            </div>
                        </div>
                          {/* Cost of the 1 course */}
                        <Card.Title className='new-price d-inline-block ms-1 ' ><p>500р</p></Card.Title>
                        <Card.Subtitle className='old-price text-secondary small d-inline-block ms-1 '><p><s>700р</s></p></Card.Subtitle>
                    </Card.Body>
                </Card>

                {/* Second card */}
                <Card className='card2-bg-card mx-1 mt-3 bg-transparent col-md'>
                    <Card.Body className='card2-body'>
                        <Card.Img variant="start" src={require('./../../../media/img/speech.png')}  className='cards2-img ms-1 mb-3 mt-2' />
                        <div className='bestseller'>
                            <img className='bestseller-img' src={require('./../../../media/img/bestseller-tape.png')} alt='bestseller-tape'></img>
                            <p className='h6 text-white bestseller-text'>Хит продаж!</p>
                        </div>
                        <Card.Title className='mb-2 mt-1 course2-title'>Ораторское искусство</Card.Title>

                        <Card.Text className='card2-text small mb-3'>
                            Онлайн-курсы научат воздействовать на публику и убеждать её в в вашей правоте.
                        </Card.Text>
                        {/* Duration of the 2 course */}
                        <div className='duration row mb-2  '>
                            <div className='col p-0 ms-3 d-flex '>
                                <Clock className='h4'/>
                                <p className='d-inline-block ms-1'>8 часов</p></div>
                            <div className='col p-0 me-3 d-flex ' >
                                <Play className='h3'  />
                                <p className='d-inline-block ms-1'>10 урока</p>
                            </div>
                        </div>
                          {/* Cost of the 2 course */}
                        <Card.Title className='new-price d-inline-block ms-1 ' ><p>710р</p></Card.Title>
                        <Card.Subtitle className='old-price text-secondary small d-inline-block ms-1 '><p><s>900р</s></p></Card.Subtitle>
                    </Card.Body>
                </Card>

                {/* Third card */}
                <Card className='card2-bg-card ms-1 me-3 mt-3 bg-transparent col-md '>
                    <Card.Body className='card2-body'>
                        <Card.Img variant="start" src={require('./../../../media/img/space.png')} className='cards2-img ms-1 mb-3 mt-2' />
                        <Card.Title className='mb-3 course2-title'>Астрономия и космос</Card.Title>

                        <Card.Text className='card2-text small mb-3 '>
                            Узнаете, как появилась Вселенная, наша Галактика, Солнечная система и Земля.
                        </Card.Text>
                        {/* Duration of the 3 course */}
                        <div className='duration row  mb-2'>
                            <div className='col p-0 ms-3 d-flex '>
                                <Clock className='h4' />
                                <p className='d-inline-block ms-1'>7 часов</p></div>
                            <div className='col p-0 me-3 d-flex ' >
                                <Play className='h3'  />
                                <p className='d-inline-block ms-1'>15 урока</p>
                            </div>
                        </div>
                          {/* Cost of the 3 course */}
                        <Card.Title className='new-price d-inline-block ms-1 ' ><p>100р</p></Card.Title>
                        <Card.Subtitle className='old-price text-secondary small d-inline-block ms-1 '><p><s>250р</s></p></Card.Subtitle>
                    </Card.Body>
                </Card>

                </div>
                <Button className='btn btn-all-courses2  mt-3'> Посмотреть все курсы</Button>

            
        </>
    )
}

export default CoursesV2
