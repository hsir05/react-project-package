import { connect } from 'react-redux';
import Me from './me.jsx'

export default connect(state => ({
  content: state.home.content
}
), {})(Me);
