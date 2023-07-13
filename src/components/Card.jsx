
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import {data} from  "../helper/data";
import PlayerCard from './PlayerCard';





const Card = () => {
const [ara , setAra]= useState("")
console.log(data);
const handleChange=(e)=>{
  console.log(e.target.value);

  setAra(e.target.value)
  console.log(ara);

  const filteredData=data.filter(item=>item.name.toLowerCase().includes(ara.trim().toLowerCase()))

  console.log("filter",filteredData);

}

  return (
    <div >

<Form.Control type="search" placeholder="Oyuncu Ara ..." onChange={handleChange}  />
<Container className='p-3 rounded-4 card-container my-3'>
      <Row xs={2} md={4} lg={6} className='justify-content-center g-3 my-3 '>
        <Col>1 of 2</Col>
       {filteredData.map((item , i)=>(
          <PlayerCard key={i}  {...item}/>
        ))
       }
      </Row>
   
    </Container>

    </div >
  )
}

export default Card

