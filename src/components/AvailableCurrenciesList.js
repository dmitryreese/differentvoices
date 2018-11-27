import React, { Component } from 'react';

import baseUrl from '../constants/API';
import AvailableCurrencyItem from '../containers/AvailableCurrencyItem';

class AvailableCurrenciesList extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        if (this.props.items.length === 0) {
            const response = await fetch(baseUrl).then(data => data.json());
            this.props.fetchAvailable(response);
        }
    }

    render() {
        return (
            <div>
                <div className={'list-header'}>Доступные валюты:</div>
                {this.props.items.length === 0 && <div>Загружаю...</div>}
                <div className={'list-items available-currencies'}>
                    {this.props.items.map((item, idx) => <AvailableCurrencyItem key={idx} item={item} />)}
                </div>
            </div>
        )
    }
}

export default AvailableCurrenciesList;