import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { API } from '../../api'
import './faq.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

function Faq() {

    const [questions, setQuestions] = useState([]);
    const [expanded, setExpanded] = useState(false);
    
    const getQuestion = async () => {
      const res = await  axios.get(`${API}/question`)
        try {
            const questionJson = await res.json();
            const data = (questionJson.data);
            console.log(data)
            setQuestions(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
   getQuestion()
},[])

  return (
    <div className='faq__bg'>
            <h1>FAQ</h1>
            {questions?.map((data,index)=>{
                return(
                    <div className='faq__main' >
                    <Accordion style={{marginBottom:"1rem", background:"none", color:'white', border:'none', boxShadow:'none', flexDirection: 'row'}}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon style={{color:'white', textAlign:'center'}} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{data.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      {data.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                )     
            })}
    </div>
  )
}

export default Faq