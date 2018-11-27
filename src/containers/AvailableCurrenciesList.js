import { connect } from 'react-redux';

import { fetchAvailable } from'../store/actions';
import AvailableCurrenciesList from '../components/AvailableCurrenciesList';

const stateToProps = ({ currencies }) => ({
    items: currencies.available,
    shouldFetch: (currencies.available.length === 0 && currencies.active.length === 0)
});
const dispatchToProps = dispatch => ({
    fetchAvailable: (payload) => dispatch(fetchAvailable(payload))
});

export default connect(stateToProps, dispatchToProps)(AvailableCurrenciesList);
