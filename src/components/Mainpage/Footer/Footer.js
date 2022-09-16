import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <>
            <div className='footer-wrapper'>
                <div className='footer-information row ms-'>
                    <div className='footer-col col '>
                        <p className='info-heading info-heading-left h2'>Направления </p>
                        <div className='row'>
                            <ul className='courses-list-1 list col ms-2'>
                                <li><a href='/'>Дизайн</a></li>
                                <li><a href='/'>Английский язык</a></li>
                                <li><a href='/'>Общее развитие</a></li>
                                <li><a href='/'>Творчество</a></li>
                                <li><a href='/'>Школа</a></li>

                            </ul>

                            <ul className='courses-list-2 list col'>
                                <li><a href='/'>Программирование</a></li>
                                <li><a href='/'>Маркетинг</a></li>
                                <li><a href='/'>Психология</a></li>
                                <li><a href='/'>Другое</a></li>
                            </ul>
                        </div>

                        <div className='logo-img  col d-inline-block  '>
                            <div className='logo1'></div>
                           <div className='logo2'></div>
                            <div className='logo3'></div>
                        </div>

                        <div className='logo-name col  d-inline-block'>
                            <p className='h3 text-white'>Zero <span>Company</span> &</p>
                            <p className='h3 text-white'>Zero. <span>Community</span></p>
                        </div>
                    </div>

                    <div className='footer-col col'>
                        <p className='info-heading h2'> О Zero.Academy </p>
                        <ul className='info-list list'>
                            <li><a href='/'>О платформе</a></li>
                            <li><a href='/'>Центр карьеры</a></li>
                            <li><a href='/'>Отзывы</a></li>
                            <li><a href='/'>Контакты</a></li>
                            <li><a href='/'>Вакансии</a></li>
                            <li><a href='/'>Для учителей</a></li>
                        </ul></div>
                </div>

                <div className='logo row'>

                </div>
            </div>
        </>
    )
}

export default Footer
