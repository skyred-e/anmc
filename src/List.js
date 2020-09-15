import React from 'react';

class List extends React.Component{

    render(){
        return(
                <option key={this.props.key} value={this.props.id}>{this.props.name}</option>
        );
    }
}

export default List;