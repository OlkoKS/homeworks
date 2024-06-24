import getSrc from "../helpers.js";
import Image from "./Image.jsx";
import {useMemo} from "react";

function Item(props) {
    const {value, id} = props;
    const iconSrc = useMemo(() => getSrc(id), [id]);

    return (<>
        <button type='button'>
            <Image alt='smiley' src={iconSrc} width={75} height={70} id={id}/>
        </button>
        <span>{value}</span>
    </>)
}

export default Item