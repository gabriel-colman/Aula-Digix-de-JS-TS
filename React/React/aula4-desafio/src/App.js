import React from 'react';
import PerfilUsuario from './components/PerfilUsuario';
import './App.css';



function App() { // Componente principal do aplicativo
  return (
    <div className="catalogo">
      <PerfilUsuario  
        imagem="https://th.bing.com/th/id/OIP.PFk0hiI2SIkuCBQ-lSYM3gHaE8?w=234&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.4&pid=1.7"
        nome='Maria Siva'
        bio="Desenvolvedora de Front end que gosta muito de React e js"
      />
      
    </div>
  );
}

export default App;
