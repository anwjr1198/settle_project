import React from 'react'

// UI만 보여주는역할
function User({user, onRemove}) {
  return (
    <div>
      <b>{user.id}</b> <span>({user.value})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
}

// Map 뿌려주는역할
function UserList({users, onRemove}) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  )
}

export default UserList
