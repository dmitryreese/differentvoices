import React, { Component } from 'react';

import baseUrl from '../constants/API';
import AvailableCurrencyItem from '../containers/AvailableCurrencyItem';

class AvailableCurrenciesList extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        if (this.props.shouldFetch) {
            const response = await fetch(baseUrl).then(data => data.json());
            this.props.fetchAvailable(response);
        }
    }

    render() {
        return (
            <div>
                <div className={'list-header'}>Доступные валюты:</div>
                {this.props.shouldFetch && <div>Загружаю...</div>}
                <div className={'list-items available-currencies'}>
                    {this.props.items.map((item, idx) => <AvailableCurrencyItem key={idx} item={item} />)}
                </div>
            </div>
        )
    }
}

export default AvailableCurrenciesList;
