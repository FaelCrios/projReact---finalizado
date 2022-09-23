//Essa é uma forma de se definir um componente
//Vem pra resolver o problema de escopo léxico
import "./CampoTexto.css"

const CampoTexto = (props) => {
  const placeholderModified = `${props.placeholder}...`
  
const aoDigitado = (evento) => {
      props.aoAlterado(evento.target.value)
  }
  return (
    <div className="campo-texto">
      <label >{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder= {placeholderModified} />
    </div>
  );
};

export {CampoTexto};
