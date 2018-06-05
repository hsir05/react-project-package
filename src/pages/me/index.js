import { connect } from 'react-redux';
import { getData } from '../../store/home/reducers'
import Me from './me.jsx'

export default connect(state => ({
  content: state.home.content
}
), {getData})(Me);
