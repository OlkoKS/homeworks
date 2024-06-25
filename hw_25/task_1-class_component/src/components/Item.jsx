import {Component} from "react";
import getSrc from "../helpers.js";
import Image from "./Image.jsx";

class Item extends Component {
    render() {
        const {value, id} = this.props;
        const iconSrc = getSrc(id);

        return (<>
            <button type='button'>
                <Image alt='smiley' src={iconSrc} width={75} height={70} id={id}/>
            </button>
            <span>{value}</span>
        </>)
    }
}

export default Item