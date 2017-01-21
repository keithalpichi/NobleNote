import React, { PureComponent } from 'react';
import { connect }              from 'react-redux'
import { Link }                 from 'react-router'
import { renderErrorsFor, setDocumentTitle } from '../../utils'
import Modal from '../../components/Modal'
import Form  from '../../components/Form'

class Registration extends PureComponent {
  componentDidMount() {
    setDocumentTitle('Sign up')
  }

  _handleSubmit(e) {
    e.preventDefault()
    const data = {
      user_name: this.refs.userName.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.passwordConfirmation.value
    }
    //this.props.signUp(data)
    console.warn('Submitting form: Set this.props.signUp action')
  }

  render() {
    const { errors } = this.props

    return (
      <Modal>
          <h1>Start here</h1>

          <Form onSubmit={::this._handleSubmit}>
            <div className="field">
              <input ref="userName" type="text" placeholder="Username" required={true}/>
              {renderErrorsFor(errors, 'user_name')}
            </div>
            <div className="field">
              <input ref="email" type="email" placeholder="Email" required={true}/>
              {renderErrorsFor(errors, 'email')}
            </div>
            <div className="field">
              <input ref="password" type="password" placeholder="Password" required={true}/>
              {renderErrorsFor(errors, 'password')}
            </div>
            <div className="field">
              <input ref="passwordConfirmation" type="password" placeholder="Confirm password" required={true}/>
              {renderErrorsFor(errors, 'password_confirmation')}
            </div>

            <button type="submit">Sign up</button>
          </Form>
          <Link to="/sign-in">Sign in</Link>
      </Modal>
    )
  }
}
const mapStateToProps = (state) => ({
  errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(/*dispatch signUp action with (data)*/)
})

export default connect(mapStateToProps)(Registration)
