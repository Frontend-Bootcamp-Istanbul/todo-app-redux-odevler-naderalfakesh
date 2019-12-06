import React from 'react';
import {connect} from 'react-redux';
import {removeAllTodos,showNotification} from "./actionCreators/actionCreaters";


class RemoveAll extends React.Component {
    render() {
        return <button className="remove-all" onClick={() => {this.props.removeAllTodos();this.props.showNotification("Tüm todos silidi")}}>
                Tümünü Sil
        </button>
    }
}

const mapDispatchToProps = dispatch => ({
    removeAllTodos: ( ) => {dispatch(removeAllTodos( ))},
    showNotification: (yazi) => {dispatch(showNotification(yazi))}
});

export default connect(null,mapDispatchToProps)(RemoveAll);
