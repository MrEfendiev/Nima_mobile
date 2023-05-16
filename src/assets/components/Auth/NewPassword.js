import React from 'react'
import { Link } from 'react-router-dom'

function NewPassword() {
  return (
    <div className='NewPassword'>
        <div className='Container'>
                <div className='Header'>
                    <Link to='/PasswordResetOtp' className='Registration-header__arrow'></Link>
                    <div className='Registration-header-text'>
                        <p>Новый пароль</p>
                    </div>
                    <div></div>
                </div>
                <div className='NewPassword__inputs'>
                <div className='Registration-form__input-block'>
                    <p>Придумайте пароль</p>
                    <input
                     className='input-error'
                     type="password"
                     placeholder='Минимум 8 знаков'
                    //  value={values.password}
                    //  onChange={handleChange}
                     name="password"
                     />
                    {/* {errors.password && <div className='err-icon__block'><p className='error_icon'></p></div>} */}
                    {/* {errors.password && <p className='error'>{errors.password }</p>} */}
              </div>
              <div className='Registration-form__input-block'>
                    <p>Подтвердите пароль</p>
                    <input 
                    type="password" 
                    placeholder='Минимум 8 знаков'
                    // value={values.confirm_password}
                    // onChange={handleChange}
                    name="confirm_password"
                    />
                    {/* {errors.confirm_password && <div className='err-icon__block'><p className='error_icon'></p></div>} */}
                    {/* {errors.confirm_password && <p className='error'>{errors.confirm_password }</p>} */}
              </div>
                </div>
                <div className='NewPassword__button'>
                    <p>Сбросить пароль</p>
                </div>
                <div className='NewPassword__height'></div>
        </div>
    </div>
  )
}

export default NewPassword