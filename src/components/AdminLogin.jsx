import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clave === import.meta.env.VITE_ADMIN_KEY) {
      localStorage.setItem('adminKey', clave);
      navigate('/admin/productos');
    } else {
      setError('Clave incorrecta');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>Acceso Administrativo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={clave}
            onChange={(e) => {
              setClave(e.target.value);
              setError('');
            }}
            placeholder="Ingrese la clave de acceso"
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Acceder</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;