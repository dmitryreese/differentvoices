import { connect } from 'react-redux';

import { deleteCurrency } from '../store/actions';
import ActiveCurrencyItem from '../components/ActiveCurrencyItem';

const dispatchToProps = (dispatch, ownProps) => ({
    callback: () => dispatch(deleteCurrency({ currency: ownProps.item }))
});

export default connect(null, dispatchToProps)(ActiveCurrencyItem);
