import { Container } from "@mui/system";
import {DoubleRightOutlined} from '@ant-design/icons'
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { API } from "../../api";
import './question.css'

function Question() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [question,setQuestion] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function registerFaq(e){
    e.preventDefault();
    const response = await fetch(`${API}/register`,{
      headers: {'Content-Type':'application/json'},
        method:'POST',
        body: JSON.stringify({name, email, question, message}),
        credentials: 'include',
    });
    if (response.status === 200){
        alert("Message Recieved, Please refresh the page") 
    } else {
        alert('Failed, Try Again!')
    }
  }
  return (
    <div className="question__bg">
        <Container>
            <h1> Ask You Question </h1>
            
    <form className="register" onSubmit={registerFaq}>
        <div className="flex__boxes">
            <input type="text" 
            placeholder="Name" 
            value={name} 
            onChange={e=>setName(e.target.value)} 
            />

            <input type="text" 
            placeholder="Email"
            value={email} 
            onChange={e=>setEmail(e.target.value)} 
            />
        </div>

            <input type="text" 
            placeholder="Question"
            value={question} 
            onChange={e=>setQuestion(e.target.value)} 
            />

            <input type="text" 
            placeholder="Message"
            value={message} 
            onChange={e=>setMessage(e.target.value)} 
            />

        <div className="form__button">
            <button > Submit Now <DoubleRightOutlined /> </button>
        </div>
    </form>         
    </Container>
    </div>
  )
}

export default Question