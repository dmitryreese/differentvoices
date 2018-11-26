import React from 'react';

import AvailableCurrencyItem from '../containers/AvailableCurrencyItem';

const AvailableCurrenciesList = ({ items }) => {
    return (
        <div>
            <div>Доступные валюты:</div>
            <div>
                {items.map((item, idx) => <AvailableCurrencyItem key={idx} item={item} />)}
            </div>
        </div>
    )
}

export default AvailableCurrenciesList;
