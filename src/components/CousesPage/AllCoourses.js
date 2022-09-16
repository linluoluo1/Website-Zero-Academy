import React from 'react'
import './AllCourses.scss'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import DropdownCoursesButtons from './DropdownCoursesButtons'
import Footer from '../Mainpage/Footer/Footer'
import AllCoursesSlider from './CoursesPages/AllCoursesSlider'

function AllCoourses() {
    return (
        <>
            <section className='all-couses-wrapper'>
                <h1>Все курсы</h1>
                <InputGroup className=" input-group-wrapper mb-3">
                    <Form.Control
                        placeholder="Какой курс вам нужен?"
                        aria-label="Какой курс вам нужен?"
                        aria-describedby="basic-addon2"
                        className='form-placeholder'
                    />
                    <Button className='form-search-courses-btn text-white' id="button-addon2">
                        Найти курс
                    </Button>
                </InputGroup>

                <DropdownCoursesButtons />


<AllCoursesSlider />

<Footer className='m-auto mt-0 mb-0' />
            </section>

        </>

    )
}

export default AllCoourses
