import React from 'react';

const ActiveCurrencyItem = ({ item, callback }) => {
    return (
        <div onClick={callback}>
            <span>{item.name}</span>
            <span>{item.rate}</span>
        </div>
    );
}

export default ActiveCurrencyItem;
