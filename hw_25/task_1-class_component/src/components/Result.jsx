import {Component} from "react";
import Image from "./Image.jsx";

class Result extends Component {
    render() {
        const {alt, src, value} = this.props;
        return (<>
            <h3 className='results'>Результати голосування:</h3>
            {value === null ? (<p className='neutral-result'>Нічия!</p>) : (<>
                <h4 className='winner'>Переможець:</h4>
                <Image alt={alt} src={src}/>
                <div className='result'>
                    <p>Кількість голосів:</p>
                    <span>{value}</span>
                </div>
            </>)}
        </>)
    }
}

export default Result