import Test from './test.jsx';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        test: state.Test.test
    };
}

function mapDispatchToProps() {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);