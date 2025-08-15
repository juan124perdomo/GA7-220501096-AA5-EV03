// Se importan los componentes necesarios de 'react-router-dom' para manejar el enrutamiento de la aplicación.
// BrowserRouter (renombrado como Router): Envuelve la aplicación para habilitar el enrutamiento.
// Routes: Contenedor para un conjunto de rutas.
// Route: Define una ruta específica y el componente que se debe renderizar.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// Se importan los componentes de las páginas que se usarán en las rutas.
import Login from "./pages/Login";
import Register from "./pages/Register";
import Ordenes from "./pages/Ordenes";
import OrdenForms from "./pages/OrdenForms";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";


// Se importa el AuthProvider desde el contexto de autenticación.
// Este proveedor dará acceso al estado y funciones de autenticación a toda la aplicación.
import { AuthProvider } from "./context/AuthContext";
import  ProtectedRoute  from "./ProtectedRoute";


function App() {
  return (
    <>
    {/* AuthProvider envuelve toda la aplicación. Cualquier componente dentro de él
        podrá acceder al contexto de autenticación usando el hook `useAuth`. */}
    <AuthProvider>
      {/* El componente Router es el encargado de gestionar el historial de navegación. */}
      <Router>
      {/* El componente Routes se encarga de renderizar el primer <Route> que coincida con la URL actual. */}
      <Routes>
        {/* Cada componente Route define una ruta y el elemento que se mostrará. */}
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route element={<ProtectedRoute/>}>
        <Route path="/ordenes" element={<Ordenes/>} />
        <Route path="/add-orden" element={<OrdenForms/>} />
        <Route path="/ordenes/:id" element={<OrdenForms/>} />
        <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </Router>
      </AuthProvider>
    </>
  );
}

export default App;
