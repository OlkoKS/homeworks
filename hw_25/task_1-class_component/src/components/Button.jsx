import {Component} from "react";

class Button extends Component {
    render() {
        const {type, name, onClick} = this.props;
        return (<button type={type} className="greenButton" onClick={onClick}>{name}</button>)
    }
}

export default Button