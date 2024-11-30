import './App.css';
import DescriptionComponent from './DescriptionComponent.js';

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <DescriptionComponent />
    </div>
  );
}

export default App;