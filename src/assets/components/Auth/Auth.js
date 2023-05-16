import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Auth() {

//   const validation = () => { 
//     let errors = {}; 
//     let errorsTwo = {}; 

//     if(!values.fullname) {
//         errors.fullname = "Имя пользователя должно состоять только из букв, цифр и знаков подчеркивания";
//     }else if (values.fullname === /^[a-z0-9_-]{3,16}$/.test(values.fullname)) {
//         errorsTwo.fullname = "Все четко"
//     }else if (/^[a-z0-9_-]{3,16}$/.test(values.fullname)) {
//         errors.fullname = "Имя пользователя должно состоять только из букв, цифр и знаков подчеркивания"
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = "Email is invalid"
//     }
//     if (!values.password) {
//         errors.password = "Password is required.";
//     } else if (values.password.length < 5) {
//         errors.password = "Password must bo more than five"
//     } if(values.confirm_password === "" || values.confirm_password !== values.password) 
//     {
//         errors.confirm_password = "Password not matched"
//     }
//     return errors;
//     return errorsTwo;

// };

// const [values, setValues] = useState({
//     fullname: "", 
//     email: "", 
//     password: "", 
//     confirm_password: "", 
// })


// const [errors, setErrors] = useState({})




// const handleChange = (event) => {
//     setValues({
//         ...values, 
//         [event.target.name]: event.target.value, 
//     })
// }

// const handleFormSubmit = (event) => {
//     event.preventDefault(); 
//     setErrors(validation(values));
// }
  
  return (
    <div className='Auth'>
    <div className='Container'>
      <div className='Header'>
          <Link to='/' className='Registration-header__arrow'></Link>
              <div className='Registration-header-text'>
                  <p>Вход</p>
              </div>
          <div></div>
        </div>
        <div className='Auth__form'>
        <div className='Registration-form__input-block'>
                    <p>Имя пользователя</p>
                    <input
                    type="text" 
                    placeholder='Madfan99jj'
                    // value={values.fullname}
                    // onChange={handleChange}   
                    name="fullname"
                    />
                    {/* {errors.fullname && <div className='err-icon__block'><p className='error_icon'></p></div>} */}
                    {/* {errors.fullname && <p className='error'>{errors.fullname }</p>} */}
                    {/* {errorsTwo.fullname && <div className=''><p style={{color: '#fff'}}>{errorsTwo.fullname}</p></div>} */}
          </div>

          <div className='Registration-form__input-block'>
                    <p>Введите пароль</p>
                    <input
                     className='input-error'
                     type="password"
                     placeholder='Введите свой пароль'
                    //  value={values.password}
                    //  onChange={handleChange}
                     name="password"
                     />
                    {/* {errors.password && <div className='err-icon__block'><p className='error_icon'></p></div>} */}
                    {/* {errors.password && <p className='error'>{errors.password }</p>} */}
              </div>
              <Link className='Auth__ForgotPassword' to='/PasswordReset'>Забыли пароль?</Link>

              <div className='Auth__Button'>
                  <p>Войти</p>
              </div>

              <div className='Registration-form__images'>
                 <div className='Registration-form__images-flex'>
                    <div className='Registration-form__image-block'>
                        <img src={require('./images/Union.svg').default} alt='mops'/>
                    </div>
                    <div className='Registration-form__image-block'>
                        <img src={require('./images/path4.svg').default} alt='mops'/>
                    </div>
                    <div className='Registration-form__image-block'>
                        <img src={require('./images/Object.svg').default} alt='mops'/>
                    </div>
                 </div>
                <Link to='/Registration' className='Registration-form__text'>
                    <p><span>Нет аккаунта? </span> Зарегистрироваться</p>
                </Link>
              </div>
        </div>
    </div>
      
    </div>
  )
}

export default Auth