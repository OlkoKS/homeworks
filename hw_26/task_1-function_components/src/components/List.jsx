import Item from "./Item.jsx";

function List(props) {
    const {values, onClick} = props;

    return (<ul onClick={onClick}>
        {values.map((value, index) => {
            return <li key={Math.round(Math.random() * 10000)}><Item value={value} id={index + 1}/></li>
        })}
    </ul>)
}

export default List