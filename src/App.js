import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Card from "./components/Card"




const App = () => {
  return (
    <div>
<Container className="text-center mt-5">
<Header/>
<Card/>
</Container>
    </div>
  )
}

export default App