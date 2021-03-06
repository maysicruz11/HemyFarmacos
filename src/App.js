import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import Private from './Components/UX/Private/Private';

import {store, persistor} from './Store';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/Signin/SigninPage';
import Login from './Components/Views/Login/LoginPage';
import Medicamentos from './Components/Views/Medicamentos/MedicametosPage';
import Principal from './Components/Views/Principal/PrincipalPage'
import Clientes from './Components/Views/Clientes/ClientesPage';
import Proveedores from './Components/Views/Proveedores/ProveedoresPage'
import Ventas from './Components/Views/Ventas/VentasPage'
import AddClientes from './Components/Views/Agregar/AddClientesPage';
import AddMedicamentos from './Components/Views/Agregar/AddMedicamentosPage';
import AddVentas from './Components/Views/Agregar/AddVentasPage';
import AddProveedores from './Components/Views/Agregar/AddProveedoresPage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />

            <Route path="/medicamentos" element={<Private><Medicamentos /></Private>} />
            <Route path="/clientes" element={<Private><Clientes /></Private>} />
            <Route path="/principal" element={<Private><Principal /></Private>} />
            <Route path="/proveedores" element={<Private><Proveedores /></Private>} />
            <Route path="/ventas" element={<Private><Ventas /></Private>} />
            <Route path="/addcliente" element={<Private><AddClientes/></Private>} />
            <Route path="/addmedicamentos" element={<Private><AddMedicamentos/></Private>} />
            <Route path="/addventas" element={<Private><AddVentas/></Private>} />
            <Route path="/addproveedores" element={<Private><AddProveedores/></Private>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
