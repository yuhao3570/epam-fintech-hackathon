import PeopleCard from './PeopleCard'
import actions from 'actions/users'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return{
    addUser: (info) => dispatch(actions.addUser(info))
  }
}

const mapStateToProps = state => {
  return({
    num: state.peopleCount.number
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleCard)