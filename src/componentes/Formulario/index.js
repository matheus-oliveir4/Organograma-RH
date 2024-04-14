import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'
const Formulario = (props) => {

        const[nome, setNome] = useState('')
        const[cargo, setCargo] = useState('')
        const[imagem, setImagem] = useState('')
        const[time, setTime] = useState('')



        const aoSalvar = (evento ) => {
            evento.preventDefault()
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
        }

    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio = {true} 
                placeholder="Digite seu nome" 
                label="Nome"  
                valor = {nome} aoAlterado ={valor => setNome(valor)} />
                <CampoTexto obrigatorio = {true} 
                placeholder="Digite seu cargo" 
                label="Cargo" 
                valor = {cargo} aoAlterado ={valor => setCargo(valor)}/>
                <CampoTexto obrigatorio = {true} 
                placeholder="Anexe o caminho do seu arquivo" 
                label= "Imagem" 
                valor = {imagem} aoAlterado ={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio = {true}
                 laceholder='Selecione seu time' 
                 label='Time' 
                 itens={props.times}
                 valor={time}
                 aoAlterado = {valor =>setTime(valor)}></ListaSuspensa>
                <Botao texto="Gerar Card"></Botao>
            </form>
        </section>
    )
}
export default Formulario