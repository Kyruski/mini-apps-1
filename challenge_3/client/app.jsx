
const MakeOrder = (props) => {
  return (
    <div>
      Make and Order
      <div>
        <a href="#" onClick={props.changeForm()}>Checkout</a>
      </div>
    </div>
    );
};

const Form1 = (props) => {
  return (
    <div>
      Form 1
      <div>
        <a href="#" onClick={props.changeForm()}>Next</a>
      </div>
    </div>
    );
};

const Form2 = (props) => {
  return (
    <div>
      Form 2
      <div>
        <a href="#" onClick={props.changeForm()}>Next</a>
      </div>
    </div>
    );
};

const Form3 = (props) => {
  return (
    <div>
      Form 3
      <div>
        <a href="#" onClick={props.changeForm()}>Purchase</a>
      </div>
    </div>
    );
};

const OrderComplete = (props) => {
  return (
    <div>
      Your Order is Complete!
      <div>
        <a href="#" onClick={props.changeForm()}>Go to the next form</a>
      </div>
    </div>
    );
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentForm: 0,
      form1vars: { //F1 collects name, email, and password for account creation.
        name: null,
        email: null,
        password: null
      },
      form2vars: { //F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
        line1: null,
        line2: null,
        city: null,
        state: null,
        zipCode: null
      },
      form3vars: { //F3 collects credit card #, expiry date, CVV, and billing zip code.
        creditCard: null,
        expDate: null,
        cvv: null,
        billingZip: null
      }
    }
  }

  changeForm() { //determines which the next form to be loaded between 0-4, looping back to 0 if it is at 4.
    return () => {
      let nextForm = (this.state.currentForm + 1) % 5;
      this.setState({
        currentForm: nextForm
      })
    };
  }

  render() {
    let renderItem;
    switch (this.state.currentForm) {
      case 1:
        renderItem = <Form1 changeForm={this.changeForm.bind(this)} />;
        break;
      case 2:
        renderItem = <Form2 changeForm={this.changeForm.bind(this)} />;
        break;
      case 3:
        renderItem = <Form3 changeForm={this.changeForm.bind(this)} />;
        break;
      case 4:
        renderItem = <OrderComplete changeForm={this.changeForm.bind(this)} />;
        break;
      default: renderItem = <MakeOrder changeForm={this.changeForm.bind(this)} />;
    }
    return <div>{renderItem}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));