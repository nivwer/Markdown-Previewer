import "./styles/style-default.css"
import Container from "./components/layout/container/container";
import Navbar from "./components/layout/navbar/navbar";
import "./styles/style-active.css"


function App() {
  return (
    <>
      <Navbar /> 
      <Container />
    </>
  );
}

export default App;