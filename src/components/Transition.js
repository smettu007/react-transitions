import React, { Component } from 'react';
import '../css/App.css';
import Transition from 'react-transition-group/Transition';


class TransitionComp extends Component {

    state = {
        show: true
    }


    showDiv =()=>{
        
                this.setState(prevState =>({
                    show:!prevState.show
                }));
            }
    render() {
        return (
            <div>
                <Transition 
                in={this.state.show}
                timeout={2000}
                >
                    { state=> 
                    
                        <div className={`square square-${state}`}>

                        </div>
                    }

                </Transition>

                <div className="showDiv" onClick={this.showDiv}>
                    Show or Hide
                </div>
            </div>

        )
    }
}


export default TransitionComp;