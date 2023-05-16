import React from 'react'
import { Link } from 'react-router-dom'

function  PasswordReset() {
  return (
    <div className='PasswordReset'>
        <div className='Container'>
            <div className='Header'>
                <Link to='/Auth' className='Registration-header__arrow'></Link>
                <div className='Registration-header-text'>
                    <p>Сброс пароля</p>
                </div>
                 <div></div>
            </div>
            <div className='PasswordReset__flex'>
                <div className='PasswordReset__title'>
                    <p>Введите адрес электронной почты, на которую был зарегистрирован аккаунт</p>
                </div>
                <div className='Registration-form__input-block'>
                        <p>Введите адрес эл. почты</p>
                        <input 
                        type="text" 
                        placeholder='Введите существующий email'
                        // value={values.email}
                        // onChange={handleChange}
                        name="email"
                        />
                        {/* {errors.email && <div className='err-icon__block'><p className='error_icon'></p></div>} */}
                        {/* {errors.email && <p className='error'>{errors.email }</p>} */}
                </div>
                <Link to='/PasswordResetOtp' className='PasswordReset__button'>
                    <p>Далее</p>
                </Link>
                <div className='PasswordReset__height'></div>
            </div>
        </div>
    </div>
  )
}

export default  PasswordReset
