import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function  PasswordResetOtp() {

    const [otp, setOtp] = useState(new Array(6).fill(""));
    const handleChange = (element, index) => {
        if(isNaN(element.value)) return false; 

        setOtp([...otp.map((d, idx) => (idx === index) ? element.value: d)])

        if(element.nextSibling) {
            element.nextSibling.focus();
        }
    }

  return (
    <div className='PasswordResetOtp'> 
     <div className='EmailConfirmation__container Container'>
            <div className='EmailConfirmation__flex'>
                <div className='Header'>
                        <Link to='/PasswordReset' className='Registration-header__arrow'></Link>
                        <div className='Registration-header-text'>
                            <p>Сброс пароля</p>
                        </div>
                        <div></div>
                </div>
                <div className='EmailConfirmation__content'>
                    <div className='EmailConfirmation__title'>
                        <p>Введите код, который мы отправили на указанный адрес электронной почты</p>
                    </div>
                    <div className='EmailConfirmation-content__OtpInput'>
                            {otp.map((data, index) => {
                                return (
                                    <input 
                                        className='EmailConfirmation-OTP__input' 
                                        type="text"
                                        name='otp'
                                        maxLength="1"
                                        key={index} 
                                        value={data}
                                        onChange={e => handleChange(e.target, index)}
                                        onFocus={e =>  e.target.select()}
                                        />
                                )
                            })}

                    </div>
                    <div className='EmailConfirmation__content-text'>
                        <Link to='/' className='EmailConfirmation__content-text-Link'>Отправить код повторно</Link>
                    </div>
                </div>
            </div>
            <div className='EmailConfirmation__height'></div>
            <div className='EmailConfirmation__buttons'>
                <Link style={{marginTop: 38}} to='/NewPassword' className='EmailConfirmation-buttons__Confirm'>
                    <p>Подтвердить</p>
                </Link>
                <div className='PasswordResetOtp__height'></div>
            </div>
        </div>
    </div>
  )
}

export default  PasswordResetOtp