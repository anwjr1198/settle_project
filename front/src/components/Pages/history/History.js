import React, {useState} from 'react'

const History = () => {
  const [inputs, setInputs] = useState({
    userName: '',
    userAge: '',
  })

  const handleOnChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const [users, setUsers] = useState([])

  const handleOnClick = () => {
    const {userName, userAge} = inputs

    // users 배열에 추가할 user 객체
    const user = {
      userName,
      userAge,
    }

    // spread 연산을 통해서 기존의 값을 복사하고, users State에 추가
    setUsers([...users, user])

    // 입력이 끝나고 inputs를 비워주는 역할
    setInputs({
      userName: '',
      userAge: '',
    })
  }
  return (
    <div>
      <h1>사용자를 입력하세요!</h1>
      <div>
        <input type="text" name="userName" onChange={handleOnChange} />
        <input type="text" name="userAge" onChange={handleOnChange} />
      </div>
    </div>
  )
}

export default History
