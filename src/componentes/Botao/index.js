import './Botao.css'
const Botao = (props) => {
    return (
        <div className='botao'>
            <button className='botao'>
                {props.texto}
            </button>
        </div>


    )


}
export default Botao