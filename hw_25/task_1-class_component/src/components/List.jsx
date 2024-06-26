import {Component} from "react";
import Item from "./Item.jsx";

class List extends Component {
    render() {
        const {values, onClick} = this.props;
        let iconNumber = 0;
        return (<ul onClick={onClick}>
            {values.map((value) => {
                ++iconNumber;
                return <li key={Math.round(Math.random() * 10000)}><Item value={value} id={iconNumber}/></li>
            })}
        </ul>)
    }
}

export default List