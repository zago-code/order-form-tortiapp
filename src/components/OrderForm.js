import { Component } from "react";
import CostumerDetails from "./CostumerDetails";
import OrderData1 from "./OrderData1";
import OrderData2 from "./OrderData2";
import Confirmation from "./Confirmation";
import Success from "./Success";

export default class OrderForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone_number: "",
    address: "",
    order_date: "",
    reference_point: "",
    cake_portions: "",
    what_celebration: "",
  };
  e;
  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      phone_number,
      address,
      order_date,
      reference_point,
      cake_portions,
      what_celebration,
    } = this.state;

    const values = {
      firstName,
      lastName,
      email,
      phone_number,
      address,
      order_date,
      reference_point,
      cake_portions,
      what_celebration,
    };

    switch (step) {
      case 1:
        return (
          <CostumerDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <OrderData1
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <OrderData2
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
      default:
      // do nothing
    }
  }
}
