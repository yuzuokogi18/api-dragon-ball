function Blue({ size = '10px', color }) {
    const style = {
        display: 'inline-block',
        width: size, 
        height: size,
        borderRadius: '50%', 
        backgroundColor: color, 
        marginBottom: '0', 
        marginRight: '5px', 
    };

    return <span style={style}></span>;
}

export default Blue;
