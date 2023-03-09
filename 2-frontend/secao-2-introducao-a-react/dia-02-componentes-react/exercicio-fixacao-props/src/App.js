import './App.css';
import Greeting from './Greeting';
import Image from './Image';
import cat from './images/cat.jpg'

function App() {
  return (
    <main>
      <Greeting name="Eduardo" lastName="de Almeida Fernandes"/>
      <Image  source={ cat } alternativeText="Cute cat staring"/>
    </main>
  );
}

export default App;
