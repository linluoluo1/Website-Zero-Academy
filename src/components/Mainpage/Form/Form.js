import React from 'react'
import './Form.scss'

function Form() {
  return (
    <>
    <div className='form-wrapper row'>
        <div className='form-info col-7 p-0'>
        <h2 className='form-heading'>Остались вопросы?</h2>
        <p className='form-text'>Заполните форму ниже, мы перезвоним и ответим на них.</p>
        <form className='input-form'>
            <input type='text' className='input-name input-text' placeholder='Имя'></input>
            <input type='tel' className='input-phone input-text' placeholder='Телефон'></input>
            <input type='email' className='input-email input-text' placeholder='Электронная почта'></input>
            
<div className='checkbox-group'>
<input type='checkbox' className='agreement-checkbox me-2 ms-1' id='agreement-checkbox' ></input>
            <label for='agreement-checkbox ' className=' checkbox-label text-white'>Я соглашаюсь на <span>обработку персональных данных.</span></label>
</div>
<input type='submit' className='submit-btn' placeholder='Отправить'></input>

        </form>
        </div>
        <div className='col d-flex align-items-center'>
            <img className='form-img ' src={require('./../../../media/img/form-img.png')}></img>

        </div>
    
    </div>
</>
  )
}

export default Form


