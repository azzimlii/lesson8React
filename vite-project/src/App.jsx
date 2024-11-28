import { useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    number: '',
    comment: '',
    message: ''
  })
  let isDisabled = data.name && data.surname && data.number && data.email && data.comment;

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const handler = (e) => {
    e.preventDefault();
    console.log(data.name);
    console.log(data.surname);
    console.log(data.number);
    console.log(data.email);
    console.log(data.comment);
    setData({
      name: '',
      surname: '',
      number: '',
      email: '',
      comment: '',
      message: "Muveffeqiyyetle tamamladiniz !"
    });
  }
  return (
    <>
    <div className="container">
      <form onSubmit={handler}>
        <label htmlFor='name'>Name:
          <input name="name" value={data.name} type="text" onChange={handleChange}></input>
        </label>
        <label htmlFor='surname'>Surname:
          <input name="surname" value={data.surname} type="text" onChange={handleChange}></input>
        </label>
        <label htmlFor='number'>Number:
          <input name="number" value={data.number} type="number" onChange={handleChange}></input>
        </label>
        <label htmlFor='email'>E-mail:
          <input name="email" value={data.email} type="text" onChange={handleChange}></input>
        </label>
        <label htmlFor='comment'>Comment:
          <input name="comment" value={data.comment} type="text" onChange={handleChange}></input>
        </label>
        <div className="message">{data.message}</div>
        <button disabled={!isDisabled}>Send</button>
      </form>
      </div>
    </>
  )
}
export default App
