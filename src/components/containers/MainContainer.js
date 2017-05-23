import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../actions/actionCreators';
import Main from './../Main/Main';

const mapStateToProps = (state) => {
	return {
		location: state.location,
		temperature: state.temperature,
		weatherDescription: state.weatherDescription,
		weatherIcon: state.weatherIcon,
		pageBackground: state.pageBackground,
		editMode: state.editMode,
		loading: state.loading
	}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer;