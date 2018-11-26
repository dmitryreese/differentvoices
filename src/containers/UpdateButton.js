import { connect } from 'react-redux';

import baseUrl from '../constants/API';
import { apiRequest, updateData } from '../store/actions';
import UpdateButton from '../components/UpdateButton';

const dispatchToProps = dispatch => ({
    callback: () => dispatch(apiRequest({
        url: baseUrl,
        callback: (response) => updateData(response)
    }))
});

export default connect(null, dispatchToProps)(UpdateButton);