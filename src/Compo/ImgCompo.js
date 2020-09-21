import React from 'react';
import './ImgCompo.css';

class ImgCompo extends React.Component{
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <img
                src={this.props.src}
                alt={this.props.alt}
            />
        )
    }
}

export default ImgCompo;