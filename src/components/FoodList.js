import React, { Component } from 'react';
import TrashButton from './TrashButton';

class FoodList extends Component {
    render() {
        const {foodList, handleDeleteFood} = this.props;

        return(
            <div className="food-list">
                <h2 className="title is-3">Today's Food</h2>
                <ul>
                    {foodList.map((food, index) =>
                    <li key={index}>
                        {food.quantity} {food.name} = {food.quantity * food.calories} calories

                        <TrashButton index={index} food={food} handleDeleteFood={handleDeleteFood} />
                    </li>
                    )}
                </ul>
                <p>
                    <strong>
                    Total: {foodList.reduce((a, b) => a + (b.quantity * b.calories), 0)} calories
                    </strong>
                </p>
            </div>
        )
    }
}

export default FoodList;