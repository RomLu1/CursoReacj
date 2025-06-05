import { useState } from 'react';
import '../styles/registro.css';

export default function Registro() {
  // Estado para cada campo
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');

  // Función que maneja el submit (solo evita recargar la página)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Por ahora solo mostramos los datos en consola
    console.log({ nombre, apellido, email, telefono, password, confirmarPassword });
  };

  return (
    <div className="registro-container">

      <h2>INGRESE SUS DATOS</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        />

        <label htmlFor="apellido">Apellido:</label>
        <input
          id="apellido"
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="ejemplo@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          id="telefono"
          type="tel"
          placeholder="123456789"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        />

        <label htmlFor="confirmarPassword">Confirmar Contraseña:</label>
        <input
          id="confirmarPassword"
          type="password"
          placeholder="Repetir Contraseña"
          value={confirmarPassword}
          onChange={(e) => setConfirmarPassword(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        />

        <button type="submit" style={{ width: '100%', padding: '10px', marginTop: 10, cursor: 'pointer' }}>
          Registrarse
        </button>
      </form>
    </div>
  );
}
