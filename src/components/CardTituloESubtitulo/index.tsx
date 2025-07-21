interface CardTituloESubtituloProps {
    h2?: string
    p?: string
    className?: string
}

const CardTituloESubtitulo = ({h2, p, className}: CardTituloESubtituloProps) => {
  return (
    <div className={className}>
        <h2>{h2}</h2>
        <p>{p}</p>
    </div>
  )
}

export default CardTituloESubtitulo