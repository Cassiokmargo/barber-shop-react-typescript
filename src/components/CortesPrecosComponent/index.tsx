import './CortesPrecos.Module.css'

interface CortesPrecosProps {
    corte?: string    
    preco?: string    
    className?: string
}

const CortesPrecos = ({corte, preco}: CortesPrecosProps) => {
  return (
    <div className="cortes_precos">
        <p>{corte}</p>
        <p>{preco}</p>
    </div>
  )
}

export default CortesPrecos