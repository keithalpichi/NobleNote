import React, { Component } from 'react'
import { connect }          from 'react-redux';
import { Link }             from 'react-router';
import { setDocumentTitle } from '../../utils';

class SessionsNew extends Component {
  componentDidMount() {
    setDocumentTitle('Sign in')
  }

  _handleSubmit(e) {
    e.preventDefault()
    const { email, password } = this.refs;
    //this.props.signIn(email.value, password.value)
    console.warn('implement handle submit')
  }


  render() {
    return (
      <div className="view-container">
        <h1>Sign in here</h1>
        <form id="sign_in_form" onSubmit={::this._handleSubmit}>
            <div className="field">
              <input
                ref="email"
                type="Email"
                id="user_email"
                placeholder="Email"
                required="true"
              />
            </div>
            <div className="field">
              <input
                ref="password"
                type="password"
                id="user_password"
                placeholder="Password"
                required="true"
              />
            </div>
            <button type="submit">Sign in</button>
          </form>
          <Link to="/sign-up">Create new account?</Link>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  session: state.errors
})

const mapDispatchToProps = (dispatch) => ({
  signIn: (email, password) => dispatch(/*dispatch action*/)
})

export default connect(mapStateToProps)(SessionsNew)
