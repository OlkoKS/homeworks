import Image from "./Image.jsx";
import getSrc from "../helpers.js";
import {useMemo} from "react";

function Result(props) {
    const {alt, winner, value} = props;

    const getImageSrc = useMemo(() => getSrc(winner), [winner]);

    return (<>
        <h3 className='results'>Результати голосування:</h3>
        {value === null ? (<p className='neutral-result'>Нічия!</p>) : (<>
            <h4 className='winner'>Переможець:</h4>
            <Image alt={alt} src={getImageSrc}/>
            <div className='result'>
                <p>Кількість голосів:</p>
                <span>{value}</span>
            </div>
        </>)}
    </>)
}

export default Result