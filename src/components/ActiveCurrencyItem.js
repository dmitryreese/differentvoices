import React from 'react';

const ActiveCurrencyItem = ({ item, callback }) => {
    return (
        <div className={'cursor-pointer'} onClick={callback}>
            <span className={'item-name mr15'}>{item.name}</span>
            <span>{item.rate}</span>
        </div>
    );
}

export default ActiveCurrencyItem;
