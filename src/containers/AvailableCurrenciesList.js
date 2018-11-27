import { connect } from 'react-redux';

import { fetchAvailable } from'../store/actions';
import AvailableCurrenciesList from '../components/AvailableCurrenciesList';

const stateToProps = ({ currencies }) => ({ items: currencies.available });
const dispatchToProps = dispatch => ({
    fetchAvailable: (payload) => dispatch(fetchAvailable(payload))
});

export default connect(stateToProps, dispatchToProps)(AvailableCurrenciesList);
