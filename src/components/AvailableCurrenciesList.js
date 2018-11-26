import React from 'react';

import AvailableCurrencyItem from '../containers/AvailableCurrencyItem';

const AvailableCurrenciesList = ({ items }) => {
    return (
        <div>
            <div className={'list-header'}>Доступные валюты:</div>
            <div className={'list-items available-currencies'}>
                {items.map((item, idx) => <AvailableCurrencyItem key={idx} item={item} />)}
            </div>
        </div>
    )
}

export default AvailableCurrenciesList;
