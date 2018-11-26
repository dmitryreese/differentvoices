import React from 'react';

const AvailableCurrencyItem = ({ item, callback }) => {
    return (
        <div onClick={callback}>
            <span>{item.name}</span>
        </div>
    );
}

export default AvailableCurrencyItem;
