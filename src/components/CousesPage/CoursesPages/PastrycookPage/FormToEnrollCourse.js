import React from 'react'
import './FormToEnrollCourse.scss'

function FormToEnrollCourse() {
  return (
    <>
          <div className='enrollment-form-wrapper row'>
          <div className='col d-flex flex-column align-items-center'>
          <div className='course-price-card'>
                <p className='mb-0'>Цена <s>950р</s> </p>
                <p>700р </p>
            </div>
            <img className='enrollment-form-img ' src={require('./media/form-img.png')} alt='form-img'></img>
      
        </div>
  
        <div className='enrollment-form-info col-7 p-0 text-dark'>
        <h2 className='emrollment-form-heading '>Оставьте заявку</h2>
        <p className='enrollment-form-text'>Начало обучения 25 августа.</p>
        <form className='enrollment-input-form'>
            <input type='text' className='input-name enrollment-input-text' placeholder='Имя'></input>
            <input type='tel' className='input-phone enrollment-input-text' placeholder='Телефон'></input>
            <input type='email' className='input-email enrollment-input-text' placeholder='Электронная почта'></input>
            
<div className='checkbox-group'>
<input type='checkbox' className='enrollment-agreement-checkbox me-2 ms-1' id='agreement-checkbox' ></input>
            <label for='agreement-checkbox ' className='enrollment-checkbox-label'>Я соглашаюсь на <span>обработку персональных данных.</span></label>
</div>
<input type='submit' className='enrollment-submit-btn' placeholder='Отправить'></input>

        </form>
        </div>
        
    
    </div>
    </>
  )
}

export default FormToEnrollCourse
