import React from 'react';
import {connect} from "react-redux";
import { removeTodo,toggleCompleteStatus,showNotification} from "./actionCreators/actionCreaters";

function Todo(props) {
    const {content, id, checked} = props;
    let itemClass= "todo-item";
    if(checked){
        itemClass += " checked";
    }
    return (
        <div className={itemClass} onClick={() => {props.toggleCompleteStatus(id);}}>
            {content}
            <span
                className="remove-todo"
                onClick={(e) => {e.stopPropagation();props.removeTodo(id);props.showNotification("bir tane todo silindi")}}>X</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => {dispatch(removeTodo(id))},
    toggleCompleteStatus: (id) => {dispatch(toggleCompleteStatus(id))},
    showNotification: (yazi) => {dispatch(showNotification(yazi))}
});

export default connect(null, mapDispatchToProps)(Todo);
