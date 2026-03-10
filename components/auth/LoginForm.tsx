import React from 'react';

export default function LoginForm() {
  return (
    <form>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Contraseña
        <input type="password" name="password" />
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
}
