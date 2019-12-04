import React from 'react';
import {connect} from 'react-redux';
import {removeAllTodos} from "./actionCreators/actionCreaters";


class RemoveAll extends React.Component {
    render() {
        return <button className="remove-all" onClick={() => {this.props.removeAllTodos()}}>
                Tümünü Sil
        </button>
    }
}

const mapDispatchToProps = dispatch => ({
    removeAllTodos: ( ) => {dispatch(removeAllTodos( ))}
});

export default connect(null,mapDispatchToProps)(RemoveAll);
