const Button = ({estilo, handler, text}) => {

    return (
        <button className={estilo} onClick={handler}>{text}</button>
    )
}

export default Button;

