import React, { Component } from 'react';

import '../css/App.css';
import {CSSTransition} from 'react-transition-group';
class Fade extends Component{
    state={
        show:true
    }

    showDiv =()=>{
        
                this.setState(prevState =>({
                    show:!prevState.show
                }));
            }
    render() {
        return (
            <div>

                <CSSTransition
                in={this.state.show}
                timeout={5000}
                classNames="square"
                >

                    <div className={`square ${this.state.show}`}>
                        Hello
                    </div>
                </CSSTransition>

                <div className="showDiv" onClick={this.showDiv}>
                    Show or Hide
                </div>
            </div>

        )
    }
}


export default Fade;