import { Component } from "react";
import "./Auth.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        lable: "Email",
        errorMessage: "Please, enter correct email address",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        type: "password",
        lable: "Password",
        errorMessage: "Please, enter correct password",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };

  vlidateControl(value, validation) {
    if (!validation) {
        return true;
    }
    let isValid = true;

    if (validation.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
          isValid = validateEmail(value) && isValid;
    }

    if (validation.minLength) {
        isValid = value.length >= validation.minLength && isValid; 
    }
    return isValid; 
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const constrol = { ...formControls[controlName] };

    constrol.touched = true;
    constrol.value = event.target.value;
    constrol.valid = this.vlidateControl(constrol.value, constrol.validation);

    formControls[controlName] = constrol

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
      console.log(isFormValid);
    })

    this.setState({
        formControls, isFormValid    
    })
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          lable={control.lable}
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          errorMessage={control.errorMessage}
          shouldValidation={control.validation}
          onChange={(event) => this.onChangeHandler(event, controlName)}
        />
      );
    });
  }

  submitHandler = (event) => {
    event.peventDefault();
  };
  render() {
    return (
      <div className="auth">
        <div>
          <h1>Asuthorization</h1>

          <form onSubmit={this.submitHandler} className="auth-form">
            {this.renderInputs()}
            <Button type="button_success" onClicl={this.logInHnadler} disabled={!this.state.isFormValid}>
              Log in
            </Button>
            <Button type="button_primary" onClicl={this.registrationHnadler}>
              Registration
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
