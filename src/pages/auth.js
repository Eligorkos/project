import React, { useContext } from 'react'
import { AuthContext } from '../context/auth'

const Auth = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) //импортируем параметры контекста и функцию для изменения
  function onSubmit(data) {
    //проверить что поля заполнены -- дополнительно

    setIsAuth(true) //если валидация прошла успешно записываем значение в контекст
    localStorage.setItem('isAuth', true) //чтобы ваша авторизация не слетала при перезагрузке
    //чтобы разлогиниться нужно удалить localStorage.setItem('isAyth', false)
    // а чтобы узнать была ли авторизация то можно вызвать localStorage.getItem('isAuth'); смотреть на страице app.jsx
  }

  if (isAuth) {
    return <div style={{ marginTop: 100 }}>Вы авторизовались</div>
  }
  return (
    <div style={{ marginTop: 100 }}>
      <form onSubmit={onSubmit}>
        <input title={'логин'} name={'login'} />
        <input title={'пароль'} name={'password'} />
        <button>Авторизация</button>
      </form>
    </div>
  )
}

export default Auth
