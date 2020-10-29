import React from 'react';


const AppImage = props => {
        return (
            <div className="ui centered images">
                <iframe title={props.title} id={props.id} src={props.url}></iframe>
            </div>
        );
}

export default AppImage;