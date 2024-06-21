import {Component} from "react";

class Image extends Component {
    render() {
        const {alt, src, width, height, id} = this.props;
        return (<img alt={alt} src={src} width={width} height={height} id={id}/>)
    }
}

export default Image