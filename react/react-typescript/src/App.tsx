import { useEffect, useState } from "react";
import Button from "./components/Button";

type User = {
  id: number,
  name: string
}

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log('RENDERED - NO ARRAY')
  // })

  useEffect(() => {
    console.log('RENDERED - EMPTY ARRAY')
    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json()
      const userData = data.map((item: User) => {
        return {
          id: item.id,
          name: item.name
        };
      });
      setUsers(userData);
      setLoading(false)
    }
    fetchUsers();
  }, [])

  console.log('users : ', users)

  // useEffect(() => {
  //   console.log('RENDERED - NON-EMPTY ARRAY count')
  // }, [count])

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  const reset = () => {
    setCount(0)
  }

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const deleteUser = (userId: number) => {
    const filteredUsers = users.filter((user) => user.id !== userId)
    setUsers(filteredUsers);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(name.trim().length === 0) {
      alert('Name cannot be empty')
      return;
    }
    const newUser = {
      id: Date.now(),
      name: name
    }
    setUsers(prevUsers => [newUser, ...prevUsers])
    setName('')
  }

  const handleUpdate = () => {
    
  }

  return (
    <>
      <h1>React TypeScript</h1>
      <h1>Count:  {count}</h1>
      <Button label="Decrement" color="red" nonClickable={true} action={decrement} />
      <Button label="Reset" action={reset} />
      <Button label="Increment" color="green" action={increment} />
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name : </label>
          <input value={name} onChange={e => setName(e.target.value)} />
          <button type="submit">Add User</button>
        </form>
      </div>
      <br />
      <br />
      <div>
        <h3>Users</h3>
        {!loading && users.length > 0 && users.map((user: User) => (
          <>
            <div key={user.id} style={{
              // border: '1px solid black',
              marginBottom: '10px',
              display: 'inline-block'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h5 style={{ display: 'inline-block' }}>{user.name}</h5>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </div>
            <br />
          </>
        ))}
        {!loading && users.length == 0 && <p> No Users Found</p>}
        {loading && <h4>Loading</h4>}
      </div>
    </>
  )
}

export default App
