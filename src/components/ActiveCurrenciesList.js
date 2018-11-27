import React, { Component } from 'react';

import UpdateButton from '../containers/UpdateButton';
import ActiveCurrencyItem from '../containers/ActiveCurrencyItem';

class ActiveCurrenciesList extends Component {
    constructor(props) {
        super(props);
        this.state = { autoupdate: JSON.parse(localStorage.getItem('autoupdate')) || false };

        this.auto = this.auto.bind(this);
        this.updateData = this.updateData.bind(this);
        this.toggleAutoupdate = this.toggleAutoupdate.bind(this);
    }

    componentDidMount() {
        if (this.props.items.length > 0) this.updateData();
        if (this.state.autoupdate) this.auto();
    }

    auto() {
        let timeoutId = null;
        const auto = () => {
            this.updateData();
            timeoutId = setTimeout(auto, 10000);
            this.setState({ timeoutId });
        };
        timeoutId = setTimeout(auto, 10000);
        this.setState({ timeoutId });
    }

    updateData() {
        this.props.callback();
    }

    toggleAutoupdate() {
        if (this.state.autoupdate) clearTimeout(this.state.timeoutId);
        if (!this.state.autoupdate) this.auto();

        localStorage.setItem('autoupdate', JSON.stringify(!this.state.autoupdate));
        this.setState({ autoupdate: !this.state.autoupdate });
    }

    render() {
        const { items, api } = this.props;
        return (
            <div>
                <div className={'list-header'}>Отслеживаемые валюты:</div>
                <UpdateButton hasFinished={api.hasFinished} autoupdate={this.state.autoupdate} isItems={items.length < 1} />
                <label>Обновлять автоматически
                    <input type="checkbox" checked={this.state.autoupdate} onChange={this.toggleAutoupdate}/>
                </label>
                <div className={'list-items'}>
                    {items.map((item, idx) => <ActiveCurrencyItem key={idx} item={item} />)}
                </div>
            </div>
        );
    }
}

export default ActiveCurrenciesList;
