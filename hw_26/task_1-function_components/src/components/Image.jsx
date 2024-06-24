function Image(props) {
    const {alt, src, width, height, id} = props;

    return (<img alt={alt} src={src} width={width} height={height} id={id}/>)
}

export default Image