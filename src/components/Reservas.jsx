import { useState } from 'react';
import './Reserva.css'; 

const Reservas = () => {
  const [panelActual, setPanelActual] = useState(1);
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [zona, setZona] = useState('');
  const [accesibilidad, setAccesibilidad] = useState('');
  const [tipoCliente, setTipoCliente] = useState('');
  const [documento, setDocumento] = useState('');
  const [sexo, setSexo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [requerimiento, setRequerimiento] = useState('');
  const [necesidad, setNecesidad] = useState('');
  const [alergia, setAlergia] = useState('');
  const [cantidadPersonas, setCantidadPersonas] = useState(1);
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const manejarSiguiente = () => {
    if (panelActual === 1 && cantidadPersonas === 0) {
      alert("Por favor, selecciona la cantidad de personas.");
      return;
    }
    if (panelActual === 2 && !fecha) {
      alert("Por favor, selecciona una fecha.");
      return;
    }
    if (panelActual === 3 && !hora) {
      alert("Por favor, selecciona una hora.");
      return;
    }
    if (panelActual === 4 && !zona) {
      alert("Por favor, selecciona una zona favorita.");
      return;
    }
    if (panelActual === 5 && (!sexo || !fechaNacimiento || !accesibilidad || !tipoCliente || !documento)) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    if (panelActual < 6) {
      setPanelActual(panelActual + 1);
    }
  };

  const manejarAnterior = () => {
    if (panelActual > 1) {
      setPanelActual(panelActual - 1);
    }
  };

  const manejarConfirmar = async () => {
    if (!nombres || !apellidos || !email || !telefono) {
      alert("Por favor, completa todos los campos de contacto.");
      return;
    }
  
    const reserva = {
      cantidad_personas: cantidadPersonas, // snake_case
      fecha: fecha,
      hora: hora,
      zona: zona,
      sexo: sexo,
      fecha_nacimiento: fechaNacimiento, // snake_case
      accesibilidad: accesibilidad,
      tipo_cliente: tipoCliente, // snake_case
      documento: documento,
      alergia: alergia,
      requerimiento: requerimiento,
      necesidad: necesidad,
      cliente_nombre: `${nombres} ${apellidos}`, // Nuevo campo combinado
      cliente_telefono: telefono, // Nuevo nombre
      cliente_email: email // Nuevo nombre
    };
  
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/reservas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reserva),
      });
  
      if (!response.ok) {
        throw new Error("Error al realizar la reserva");
      }
  
      const data = await response.json();
      alert("¡Reserva realizada correctamente!");
  
      // Reiniciar estados después de confirmar
      setCantidadPersonas(1);
      setFecha('');
      setHora('');
      setZona('');
      setAccesibilidad('');
      setTipoCliente('');
      setDocumento('');
      setSexo('');
      setFechaNacimiento('');
      setRequerimiento('');
      setNecesidad('');
      setAlergia('');
      setNombres('');
      setApellidos('');
      setEmail('');
      setTelefono('');
  
      setPanelActual(1);
    } catch (error) {
      console.error("Error al enviar la reserva:", error);
      alert("Hubo un error al procesar la reserva. Inténtalo nuevamente.");
    }
  };


  const horasDisponibles = [];
  for (let h = 12; h <= 23; h++) {
    for (let m = 0; m < 60; m += 15) {
      const horaFormateada = `${h % 12 === 0 ? 12 : h % 12}:${m === 0 ? "00" : m} ${h >= 12 ? "PM" : "AM"}`;

      horasDisponibles.push(horaFormateada);
    }
  }

  const manejarSeleccionarHora = (horaSeleccionada) => {
    setHora(horaSeleccionada);
  };

  const progreso = (panelActual - 1) * (100 / 5);

  return (
    <section id="reservas" className="section">
      <br />
      <div className="progreso">
        <p>{panelActual} / 6</p>
        <div className="progreso-bar-container">
          <div
            className={`progreso-bar ${panelActual === 6 ? 'progreso-bar-final' : ''}`}
            style={{ width: `${progreso}%` }}
          ></div>
        </div>
      </div>

      {/* Panel 1 */}
      {panelActual === 1 && (
        <div className="panel">
          <p>Selecciona la cantidad de personas:</p>
          <div className="zona-buttons-container">
            {[1, 2, 3, 4, 5].map((cantidad) => (
              <button
                key={cantidad}
                className={`zona-button ${cantidad === cantidadPersonas ? 'seleccionado' : ''}`}
                onClick={() => setCantidadPersonas(cantidad)}
              >
                {cantidad}
              </button>
            ))}
          </div>
          <button onClick={manejarSiguiente} className="boton-siguiente">Siguiente</button>
        </div>
      )}

      {/* Panel 2 */}
      {panelActual === 2 && (
        <div className="panel">
          <p>Selecciona la fecha para tu reserva:</p>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="fecha-input"
          />
          <br />
          <button onClick={manejarAnterior} className="boton-anterior">Anterior</button>
          <button onClick={manejarSiguiente} className="boton-siguiente">Siguiente</button>
        </div>
      )}

      {/* Panel 3 */}
      {panelActual === 3 && (
        <div className="panel">
          <p>Elige la hora de tu reserva:</p>
          <div className="hora-buttons-container">
            {horasDisponibles.map((horaOption, index) => (
              <button
                key={index}
                className={`hora-button ${horaOption === hora ? 'seleccionado' : ''}`}
                onClick={() => manejarSeleccionarHora(horaOption)}
              >
                {horaOption}
              </button>
            ))}
          </div>
          <br />
          <button onClick={manejarAnterior} className="boton-anterior">Anterior</button>
          <button onClick={manejarSiguiente} className="boton-siguiente">Siguiente</button>
        </div>
      )}

      {/* Panel 4 */}
      {panelActual === 4 && (
        <div className="panel">
          <p>Selecciona tu zona favorita:</p>
          <div className="zona-buttons-container">
            <button
              className={`zona-button ${zona === 'Salon Principal' ? 'seleccionado' : ''}`}
              onClick={() => setZona('Salon Principal')}
            >
              Salón Principal
            </button>
            <button
              className={`zona-button ${zona === 'Terraza' ? 'seleccionado' : ''}`}
              onClick={() => setZona('Terraza')}
            >
              Terraza
            </button>
          </div>
          <br />
          <button onClick={manejarAnterior} className="boton-anterior">Anterior</button>
          <button onClick={manejarSiguiente} className="boton-siguiente">Siguiente</button>
        </div>
      )}

      {/* Panel 5 */}
      {panelActual === 5 && (
        <div className="panel">
          <p>Ayúdanos a personalizar tu experiencia</p>
          <form>
            <div>
              <label>Sexo: <span style={{ color: 'red' }}>(*)</span></label>
              <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label>Fecha de nacimiento: <span style={{ color: 'red' }}>(*)</span></label>
              <input
                type="date"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
              />
            </div>
            <div>
              <label>¿Necesitas una mesa con fácil accesibilidad? <span style={{ color: 'red' }}>(*)</span></label>
              <input
                type="text"
                value={accesibilidad}
                onChange={(e) => setAccesibilidad(e.target.value)}
              />
            </div>
            <div>
              <label>Tipo de cliente: <span style={{ color: 'red' }}>(*)</span></label>
              <select value={tipoCliente} onChange={(e) => setTipoCliente(e.target.value)}>
                <option value="">Selecciona una opción</option>
                <option value="Nuevo">Nuevo</option>
                <option value="Regular">Regular</option>
                <option value="VIP">VIP</option>
              </select>
            </div>
            <div>
              <label>Coloca tu documento de identidad: <span style={{ color: 'red' }}>(*)</span></label>
              <input
                type="text"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
              />
            </div>

            <div>
              <label>¿Tienes algún requerimiento especial?</label>
              <input
                type="text"
                value={requerimiento}
                onChange={(e) => setRequerimiento(e.target.value)}
              />
            </div>
            <div>
              <label>¿Alguna necesidad que debemos tener en cuenta?</label>
              <input
                type="text"
                value={necesidad}
                onChange={(e) => setNecesidad(e.target.value)}
              />
            </div>
            <div>
              <label>¿Hay alguna alergia, intolerancia o restricción que debemos considerar?</label>
              <textarea
                value={alergia}
                onChange={(e) => setAlergia(e.target.value)}
              ></textarea>
            </div>
            <p><em>Campos no obligatorios</em></p>
          </form>
          <button onClick={manejarAnterior} className="boton-anterior">Anterior</button>
          <button onClick={manejarSiguiente} className="boton-siguiente">Siguiente</button>
        </div>
      )}

      {/* Panel 6 */}
      {panelActual === 6 && (
        <div className="panel">
          <h3>Ya casi terminamos</h3>
          <div className="row">
            <div className="col-sm-7">
              <p>Reservar para:</p>
              <label>Nombres</label>
              <input type="text" value={nombres} onChange={(e) => setNombres(e.target.value)} />
              <label>Apellidos</label>
              <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label>Teléfono</label>
              <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>

            <div className="col-sm-5">
              <p><strong>Don Bosco</strong><br />Av. Primavera 557<br />(01) 2425957</p>
              <p><strong>Cantidad de personas:</strong> {cantidadPersonas}</p>
              <p><strong>Fecha:</strong> {fecha}</p>
              <p><strong>Hora:</strong> {hora}</p>
              <p><strong>Zona favorita:</strong> {zona}</p>
              <button onClick={manejarAnterior} className="boton-anterior">Anterior</button>
              <button onClick={manejarConfirmar} className="boton-siguiente">Confirmar reserva</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reservas;
