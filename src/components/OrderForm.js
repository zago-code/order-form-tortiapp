import { Component } from "react";
import CostumerDetails from "./CostumerDetails";
import OrderData1 from "./OrderData1";
import OrderData2 from "./OrderData2";
import OrderData3 from "./OrderData3";
import OrderData4 from "./OrderData4";
import OrderData5 from "./OrderData5";
import OrderData6 from "./OrderData6";
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
    cake_flavor: "",
    another_flavor: "",
    do_have_fill: "",
    filling: "",
    another_filling: "",
    cake_topping: "",
    another_topping: "",
    preview_sent: "",
    detaills: "",
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

  // Handle field change type file

  handleChangeFile = (input) => (e) => {
    this.setState({ [input]: e.target.files[0] });
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
      cake_flavor,
      another_flavor,
      do_have_fill,
      filling,
      another_filling,
      cake_topping,
      another_topping,
      preview_sent,
      detaills,
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
      cake_flavor,
      another_flavor,
      do_have_fill,
      filling,
      another_filling,
      cake_topping,
      another_topping,
      preview_sent,
      detaills,
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
          <OrderData3
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <OrderData4
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <OrderData5
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return (
          <OrderData6
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleChangeFile={this.handleChangeFile}
            values={values}
          />
        );
      case 8:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 9:
        return <Success />;
      default:
      // do nothing
    }
  }
}
