
import EditContact from './redux/EditContact';
import Fourmailaire from './redux/Formulaire';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Fourmailaire/>}/>
      <Route path='/edit-contact/:id' element={<EditContact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
