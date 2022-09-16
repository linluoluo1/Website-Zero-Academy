import React from 'react'
import './AccordionCourse.scss'
import { Accordion } from 'react-bootstrap'
import {useAccordionButton} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import {PlusLg} from 'react-bootstrap-icons'


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      className='custom-toggle'
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function AccordionCourse() {
  return (
    <>
         <Accordion  className='accordion-wrapper-container' defaultActiveKey="0">
      <Card className='accordion-card-wrapper-top-radius '>
        <Card.Header className=' accordion-header-wrapper d-flex justify-content-between '>
        <div className='accordion-card-name d-flex'>
        <p className='me-3 ' >1.</p>
        <p  > Программа курса</p>
        </div>
          <CustomToggle eventKey="0"><PlusLg /></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card className='accordion-card-wrapper'>
      <Card.Header className='accordion-header-wrapper d-flex justify-content-between '>
      <div className='accordion-card-name d-flex'>
        <p className='me-3 ' >2.</p>
        <p  > Основные инструменты для приготовления кондитерских изделий</p>
        </div>
          <CustomToggle eventKey="1"><PlusLg /></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className='accordion-card-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card className='accordion-card-wrapper'>
      <Card.Header className='accordion-header-wrapper d-flex justify-content-between '>
      <div className='accordion-card-name d-flex'>
        <p className='me-3 ' >3.</p>
        <p  > Бисквиты и начинки. Теория и практика</p>
        </div>
          <CustomToggle eventKey="1"><PlusLg /></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body className='accordion-card-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card className='accordion-card-wrapper'>
      <Card.Header className='accordion-header-wrapper d-flex justify-content-between '>
      <div className='accordion-card-name d-flex'>
        <p className='me-3 ' >4.</p>
        <p  > Кремы и сборка торта</p>
        </div>
          <CustomToggle eventKey="1"><PlusLg /></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body className='accordion-card-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card className='accordion-card-wrapper'>
      <Card.Header className='accordion-header-wrapper d-flex justify-content-between '>
      <div className='accordion-card-name d-flex'>
        <p className='me-3 ' >5.</p>
        <p  > Упаковка продукта</p>
        </div>
          <CustomToggle eventKey="1"><PlusLg /></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body  className='accordion-card-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card className='accordion-card-wrapper-bottom-radius'>
      <Card.Header className='accordion-header-wrapper d-flex justify-content-between '>
        <div className='accordion-card-name d-flex'>
        <p className='me-3 ' >6.</p>
        <p  > СММ</p>
        </div>
          
          <CustomToggle eventKey="1"><PlusLg /></CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body className='accordion-card-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    </>
  )
}

export default AccordionCourse
