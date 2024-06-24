function Button(props) {
    const {type, name, onClick} = props;

    return (<button type={type} className="greenButton" onClick={onClick}>{name}</button>)
}

export default Button