import React from 'react';

class StreamWindow extends React.Component {

    shouldComponentUpdate() {
        return false;
    }


    render() {
        return (
            <div className="col s12 m7">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/wwMDvPCGeE0?autoplay=1"
                        frameBorder="0" allowFullScreen/>

            </div>
        )
    }
}

export default StreamWindow;