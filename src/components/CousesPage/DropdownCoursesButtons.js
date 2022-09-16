import React from 'react'
import './DropdownCoursesButtons.scss'
import {Dropdown} from 'react-bootstrap'
import { ChevronDown } from 'react-bootstrap-icons';

function DropdownCoursesButtons() {
  return (
    <>
      <div className='dropwodn-menu-courses mb-4'>
        <div className='first-dropdown-button dropdown-button-wrapper d-inline-flex '>
        <Dropdown >
      <Dropdown.Toggle className='drop-down btn-first-left ' variant='outline-secondary'  id="dropdown-basic">
      <div className='dropdown-inner-info'>
      Направление <ChevronDown />
      </div>
      </Dropdown.Toggle>

        <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Программирование</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Маркетинг</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Психология</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Другое</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>

        <div className='second-dropdown-button dropdown-button-wrapper d-inline-flex '>
        <Dropdown >
      <Dropdown.Toggle className='drop-down btn' variant="secondary" id="dropdown-basic">
      <div className='dropdown-inner-info'>
      Тип Курса <ChevronDown />
      </div>
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">Оффлайн</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Онлайн</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Быстрый</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>

        <div className='third-dropdown-button dropdown-button-wrapper d-inline-flex '>
        <Dropdown >
      <Dropdown.Toggle className='drop-down btn' variant="secondary" id="dropdown-basic">
      <div className='dropdown-inner-info'>
      Стоимость <ChevronDown />
      </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Супер эконом</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Эконом</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Стандарт</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Премиум</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Люкс</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>

        <div className='forth-dropdown-button dropdown-button-wrapper d-inline-flex '>
        <Dropdown >
      <Dropdown.Toggle className='drop-down btn' variant="secondary" id="dropdown-basic">
      <div className='dropdown-inner-info'>
      Длительность <ChevronDown />
      </div>
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">Быстрые</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Средней длины</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Продолжительные</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
      </div>
    </>
  )
}

export default DropdownCoursesButtons
