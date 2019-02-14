import { connect } from 'react-redux';
import { setVisiableFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, props) => ({
    active: props.filter === state.visiableFilter,
    text: props.text
});

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(setVisiableFilter(props.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
