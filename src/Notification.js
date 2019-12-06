import React, { Component } from 'react';
import {connect} from "react-redux";
import {hideNotification} from "./actionCreators/actionCreaters"

export class Notification extends Component {
    
    componentDidUpdate(prevProps){
        if(this.props.notification !== ""){
            setTimeout(()=>{this.props.hideNotification();},2000)
        }
    }

    render() {
        if(this.props.notification !== "")
        return (<div id="Notification" style={{opacity: 100}}  >{this.props.notification}</div>);
        else
        return (<div id="Notification" style={{opacity: 0}}  > </div>);
    }
}



const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
};

const mapDispatchToProps = dispatch => ({
    hideNotification: () => {dispatch(hideNotification())}
  });


export default  connect(mapStateToProps , mapDispatchToProps)(Notification);
