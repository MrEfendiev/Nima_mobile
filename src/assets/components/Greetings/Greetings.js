import React from 'react'
import { Link } from 'react-router-dom'

function Greetings() {
  return (
    <div className='Greetings'>
    <div className='Greetings__Images-flex'>
        <div className='Greetings__Images-block'>
        </div>
        <div className='Greetings__Images'>
            <img className='Greetings__Images-One' src={require('./images/image 7.svg').default} alt='mops'/>
            <img className='Greetings__Images-Three' src={require('./images/image 9.svg').default} alt='mops'/>
            <img className='Greetings__Images-Two' src={require('./images/image 8.svg').default} alt='mops'/>
        </div>
    </div>
        <div className='Greetings__container'>
            <div className='Greetings__title'>
                <h1>Всемирная площадка проведения кибертурниров</h1>
                <p>Играй в свои любимые игры и круши соперников в ежедневных турнирах</p>
            </div>
            <div className='Greetings__buttons'>
                <Link to='/Registration' className='Greetings__buttonOne'>
                    <p>Регистрация</p>
                </Link>
                <Link to='/Auth' className='Greetings__buttonTwo'>
                     <p>Войти</p>
                </Link>
            </div>
        </div>

        <div className='Greetings__height'></div>
  
    </div>
  )
}

export default Greetings