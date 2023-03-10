import React, { useState } from 'react';
import { Container } from '@mui/system';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
import GeneralEnquiry from './GeneralEnquiry';
import './contact.css'

function Contact() {
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
      if (value === basicActive) {
        return;
      }
      setBasicActive(value);
    };
  
  return (
    <div className='contact__bg'>
        <Container >
            <h1>
                Contact Us
            </h1>
        <MDBTabs pills style={{display:'flex', alignItems:'center', justifyContent:'center'}}className='mb-3'>
        <MDBTabsItem>
            <MDBTabsLink style={{background:'none', borderBottom:'1px solid black', color:'white'}} onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                General Enquiry
            </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
            <MDBTabsLink style={{background:'none', borderBottom:'1px solid black'}} onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
               Buisness
            </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
            <MDBTabsLink style={{background:'none', borderBottom:'1px solid black'}} onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
               Investor
            </MDBTabsLink>
            </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
            <MDBTabsPane show={basicActive === 'tab1'}><GeneralEnquiry/></MDBTabsPane>
            <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
            <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
        </Container>
        </div>
  )
}

export default Contact