import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const Salvar = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  };

  return (
    <section className="formulario">
      <form onSubmit={Salvar}>
        <h2>Preencha os dados</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Entre com o seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Entre com o seu Cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Endereço de imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)} />
        
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export { Formulario };
