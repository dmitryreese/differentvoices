import React from 'react';

const AvailableCurrencyItem = ({ item, callback }) => {
    return (
        <div className={'cursor-pointer'} onClick={callback}>
            <span>{item.name}</span>
        </div>
    );
}

export default AvailableCurrencyItem;
