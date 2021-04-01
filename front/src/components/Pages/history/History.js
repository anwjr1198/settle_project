import React, {useRef, useState} from 'react'
import UserList from './UserList'

function Histroy() {
  const [inputs, setInputs] = useState('')

  const onChange = e => {
    setInputs(e.target.value)

    console.log(e.target.value)
  }

  const [users, setUsers] = useState([])

  const nextId = useRef(0)
  console.log('멤버', nextId)

  const onCreate = () => {
    const user = {
      id: nextId.current,
      value: inputs,
    }
    setUsers(users.concat(user))

    setInputs('')
    nextId.current += 1
  }

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id))
  }
  return (
    <>
      <div>
        <input
          name="username"
          placeholder="계정명"
          onChange={onChange}
          value={inputs}
        />

        <button onClick={onCreate}>등록</button>
      </div>
      <UserList users={users} onRemove={onRemove} />
    </>
  )
}

export default Histroy
