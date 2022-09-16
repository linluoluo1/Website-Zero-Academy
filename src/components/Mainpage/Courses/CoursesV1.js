import React from 'react';
import './CoursesV1.scss'
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { ArrowRight } from "react-bootstrap-icons";

function CoursesV1() {
  return (
    <>
    <div className='cards-container d-flex flex-md-row flex-sm-column align-items-center justify-content-sm-between'>
        <h2  className='courses-heading'>Популярные курсы</h2>
        <a className='courses-link me-3' href='/courses'> 
        Смотреть все курсы
          <ArrowRight />
          </a>
        {/*First card */}
    <Card className='card-wrapper ' style={{ width: '18rem'}}>
       <div className='position-absolute text-white'>
       <p className=' mentor-name ms-3 mb-0 ' >С Еленой Микеевой</p>
        <p className=' ms-3 mb-1 mt-4'>Курс</p>
        <p className=' ms-3 course-name h3 mb-5'>Путь<br/>
         Косметолога</p>
        </div> 
      <Card.Img variant="end" src={require('./img/ElenaMikeeva.png')} className='cards-photo photo1' />
      <Card.Body className='card-body-V1'>
        <Card.Text>
        Станьте востребованным косметологом, пройдя наш курс по косметологии.
        </Card.Text>
        <ul>
            <li>20 уроков</li>
            <li>4 месяца обучения</li>
            <li>Бессрочный доступ к материалу</li>
        </ul>
        <Button  className='btn btn-register '>Записаться</Button>
      </Card.Body>
    </Card>

        {/*Second card */}
        <Card className='card-wrapper card-wrapper-2 ' style={{ width: '18rem'}}>
       <div className='position-absolute text-white'>
       <p className=' mentor-name ms-3 mb-0 ' >С Ириной Титовец</p>
        <p className=' ms-3 mb-1 mt-4'>Курс</p>
        <p className=' ms-3 course-name h3 mb-5'>Эмоциональное<br/>
         ЗДоровье</p>
        </div> 
      <Card.Img variant="end" src={require('./img/IrinaTitovec.png')} className='cards-photo photo2' />
      <Card.Body className='card-body-V1'>
        <Card.Text>
        Узнайте, как проявляется ваша тревога и какие есть способы работы с тревожными расстройствами. 
        </Card.Text>
        <ul>
            <li>10 уроков</li>
            <li>1 месяца обучения</li>
            <li>Прикладные знания от практикующих психологов</li>
        </ul>
        <Button  className='btn btn-register '>Записаться</Button>
      </Card.Body>
    </Card>

        {/*Third card */}
        <Card className='card-wrapper  card-wrapper-3' style={{ width: '18rem'}}>
       <div className='position-absolute text-white'>
       <p className=' mentor-name ms-3 mb-0 ' >С Катериной Ефремовой</p>
        <p className=' ms-3 mb-1 mt-4'>Курс</p>
        <p className=' ms-3 course-name h3 '>Ораторское<br/>
         Искусство</p>
        </div> 
      <Card.Img variant="end" src={require('./img/KaterinaEfremova.png')} className='cards-photo photo3' />
      <Card.Body className='card-body-V1'>
        <Card.Text>
        Онлайн-курсы ораторского искусства научат воздействовать на публику и убеждать её в в вашей правоте.
        </Card.Text>
        <ul>
            <li>8 уроков</li>
            <li>2 месяца обучения</li>
            <li>Групповые и индивидуальные занятия</li>
        </ul>
        <Button  className='btn btn-register '>Записаться</Button>
      </Card.Body>
    </Card>
    </div>
    
    </>
  )
}

export default CoursesV1
