import { connect } from 'react-redux';

import baseUrl from '../constants/API';
import { apiRequest, updateData } from '../store/actions';
import ActiveCurrenciesList from '../components/ActiveCurrenciesList';

const stateToProps = ({ currencies, api }) => ({ items: currencies.active, api });
const dispatchToProps = dispatch => ({
    callback: () => dispatch(apiRequest({
        url: baseUrl,
        callback: (response) => updateData(response)
    }))
});

export default connect(stateToProps, dispatchToProps)(ActiveCurrenciesList);
