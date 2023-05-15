import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    
    const setBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }

    return (
        <div className='alert alert-secondary'>
            Budget: {currency}<input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        step="10"
                        onChange={(event) => setBudget(event.target.value)}
                        >
                        </input>
        </div>
    );
};
export default Budget;
