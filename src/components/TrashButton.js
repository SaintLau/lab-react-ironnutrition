import React, { Component } from 'react';

class TrashButton extends Component {

    handleDelete = () => {
        const {index, handleDeleteFood, food} = this.props;
        food.quantity = 0;
        handleDeleteFood(index);
    }

    render() {
        const {handleDelete} = this;
        const {food} = this.props;

        return(
            <img className='trash-img'
            src={`./trash.png`}
            alt={`${food.name} trash`}
            onClick={handleDelete} 
            />
        )
    }
}

export default TrashButton;