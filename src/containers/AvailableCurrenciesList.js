import { connect } from 'react-redux';

import AvailableCurrenciesList from '../components/AvailableCurrenciesList';

const stateToProps = ({ currencies }) => ({ items: currencies.available });

export default connect(stateToProps)(AvailableCurrenciesList);
