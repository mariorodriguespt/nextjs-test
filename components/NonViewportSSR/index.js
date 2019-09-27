import React from 'react';

export default class NonViewportSSR extends React.Component {
    state = {
        isBrowser : false
    }

    componentDidMount(){        
        setTimeout(() =>{
            this.setState({
                isBrowser : process.browser
            });

            console.log('mounted : ' , process.browser );        
        }, 200)
        
        
    }

    render() {
        console.log("state : " , this.state );
        return this.state.isBrowser ? this.props.children : null;
    }
}
