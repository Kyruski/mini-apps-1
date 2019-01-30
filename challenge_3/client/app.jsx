
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
      <form>
        Name <input type="text" id="name" name="name" placeholder="Real McPerson" size="30"/><br></br>
        Email <input type="email" id="email" name="email" placeholder="totallyreal@email.com" size="37"/><br></br>
        Password <input type="password" id="password" name="password" placeholder="" size="30" /><br></br>
      </form>
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
      <form>
        Address Line 1 <input type="text" id="line1" name="line1" placeholder="1234 Main St." size="37"/><br></br>
        Address Line 2 <input type="text" id="line2" name="line2" placeholder="Apt 203" size="37"/><br></br>
        City <input type="text" id="city" name="city" placeholder="San Francisco" size="22" /><br></br>
        State <input type="text" id="state" name="state" placeholder="California" size="15" /><br></br>
        Zip Code <input type="text" id="zipcode" name="zipcode" placeholder="12345" size="6"/><br></br>
      </form>
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
      <form>
        Credit-card # <input type="text" id="ccNumber" name="creditcard" placeholder="1234-5678-9012-3456" size="25"/><br></br>
        Month/Year <input type="text" id="expDate" name="exp-Date" placeholder="mm/yyyy" size="8"/><br></br>
        CVV: <input type="text" id="cvv" name="cvv" placeholder="1234" size="5" /><br></br>
        Billing Zip Code: <input type="text" id="billing" name="billing" placeholder="12345" size="6" /><br></br>
      </form>
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
        <a href="#" onClick={props.changeForm()}>Return to website</a>
      </div>
    </div>
    );
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentForm: 0,
      form1vars: { //collects name, email, and password for account creation.
        name: null,
        email: null,
        password: null
      },
      form2vars: { //collects ship to address (line 1, line 2, city, state, zip code) and phone number.
        line1: null,
        line2: null,
        city: null,
        state: null,
        zipCode: null
      },
      form3vars: { //collects credit card #, expiry date, CVV, and billing zip code.
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