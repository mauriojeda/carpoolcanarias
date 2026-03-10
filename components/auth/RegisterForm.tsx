import React from 'react';

export default function RegisterForm() {
  return (
    <form>
      <label>
        Nombre
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Contraseña
        <input type="password" name="password" />
      </label>
      <button type="submit">Crear cuenta</button>
    </form>
  );
}
