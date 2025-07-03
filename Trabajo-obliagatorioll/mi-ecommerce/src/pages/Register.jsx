const Register = () => (
  <div style={{ padding: 20 }}>
    <h2>Registro</h2>
    <form>
      <input type="text" placeholder="Nombre" /><br />
      <input type="text" placeholder="Apellido" /><br />
      <input type="email" placeholder="Email" /><br />
      <input type="tel" placeholder="Teléfono" /><br />
      <input type="password" placeholder="Contraseña" /><br />
      <input type="password" placeholder="Confirmar contraseña" /><br />
      <button type="button">Registrarse</button>
    </form>
  </div>
);

export default Register;
