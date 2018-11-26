import { connect } from 'react-redux';

import baseUrl from '../constants/API';
import { apiRequest, addCurrency } from '../store/actions';
import AvailableCurrencyItem from '../components/AvailableCurrencyItem';

const dispatchToProps = (dispatch, ownProps) => ({
    callback: () => dispatch(apiRequest({
        url: `${baseUrl}&symbols=${ownProps.item.name}`,
        callback: (response) => addCurrency({ currency: ownProps.item })
    }))
});

export default connect(null, dispatchToProps)(AvailableCurrencyItem);
