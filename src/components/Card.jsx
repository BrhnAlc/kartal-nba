import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import {data} from "../helper/data";
import PlayerCard from './PlayerCard';


const Card = () => {
    const [ara,setAra] = useState("")
    console.log(data)
    const handleChange = (e) =>{
        console.log(e.target.value)
        setAra(e.target.value) //! setter mtodları asenkron olarak çalışır.
        // console.log(ara);
        
    }
    console.log(ara);

    const filteredData = data.filter(item=> item.name.toLowerCase().includes(ara.trim().toLowerCase()))

    console.log("filter",filteredData)

  return (
    <>
      <Form.Control
        type="ara"
        placeholder="Oyuncu Ara..."
        onChange={handleChange}
      />
      <Container className="p-3 rounded-4 card-container my-3">
        <Row xs={1} sm={2} md={3} lg={4}  className="justify-content-center ">
          
          {filteredData.map((item, i) => (
            <PlayerCard key={i} {...item} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Card;


