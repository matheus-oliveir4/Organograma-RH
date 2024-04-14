import Colaborador from '../Colaborador'
import './Time.css'

const  Time = (props) =>{
  const css ={backgroundColor: props.corSecundaria}

    return(
      
      /* div só vai sugir se o tamanho for maior que 1*/
     (props.colaboradores.length > 0) && <section className='time' style={css}>
      <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
      <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome = {colaborador.nome} 
            cargo = {colaborador.cargo}
            superior = {colaborador.superior} 
            imagem = {colaborador.imagem}/>)}
        </div>  
    </section>
    )
}
export default Time