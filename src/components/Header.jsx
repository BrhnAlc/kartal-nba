import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import logo from "../assets.js/logo.jpg"


const Header =()=>{

  return(
  
<Container>
<Image src={logo} width="200px"  />
<h1 className='my-2'>BİRGÜN DEĞİL HERGÜN BEŞİKTAŞ.</h1>
    </Container>
    
  )
}

export default Header;