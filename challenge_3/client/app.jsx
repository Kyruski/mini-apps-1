const MakeOrder = (props) => {
  return (
    <div>
      Make and Order
      <form>
        <input type="submit" value="Checkout" onClick={(e) => {
          e.preventDefault();
          props.changeForm();
          }} /> <br></br>
      </form>
    </div>
    );
};

const Form1 = (props) => {
  const grabValues = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    return [name, email, password]
  }
  return (
    <div>
      Form 1
      <form>
        Name <input type="text" id="name" name="name" placeholder="Real McPerson" size="30"/><br></br>
        Email <input type="email" id="email" name="email" placeholder="totallyreal@email.com" size="37"/><br></br>
        Password <input type="password" id="password" name="password" placeholder="" size="30" /><br></br>
        <input type="submit" value="Next" onClick={(e) => {
          e.preventDefault();
          props.submitForm(grabValues());
          props.changeForm();
          }} /> <br></br>
      </form>
    </div>
    );
};

const Form2 = (props) => {
  const grabValues = () => {
    const line1 = document.getElementById('line1').value;
    const line2 = document.getElementById('line2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipcode = document.getElementById('zipcode').value;
    return [line1, line2, city, state, zipcode]
  }
  return (
    <div>
      Form 2
      <form>
        Address Line 1 <input type="text" id="line1" name="line1" placeholder="1234 Main St." size="37"/><br></br>
        Address Line 2 <input type="text" id="line2" name="line2" placeholder="Apt 203" size="37"/><br></br>
        City <input type="text" id="city" name="city" placeholder="San Francisco" size="22" /><br></br>
        State <input type="text" id="state" name="state" placeholder="California" size="15" /><br></br>
        Zip Code <input type="text" id="zipcode" name="zipcode" placeholder="12345" size="6"/><br></br>
        <input type="submit" value="Next" onClick={(e) => {
          e.preventDefault();
          props.submitForm(grabValues());
          props.changeForm();
          }} /> <br></br>
      </form>
    </div>
    );
};

const Form3 = (props) => {
  const grabValues = () => {
    const credit = document.getElementById('credit').value;
    const expiration = document.getElementById('expiration').value;
    const cvv = document.getElementById('cvv').value;
    const billing = document.getElementById('billing').value;
    return [credit, expiration, cvv, billing];
  }
  return (
    <div>
      Form 3
      <form>
        Credit Card # <input type="text" id="credit" name="creditcard" placeholder="1234-5678-9012-3456" size="25"/><br></br>
        Month/Year <input type="text" id="expiration" name="exp-Date" placeholder="mm/yyyy" size="8"/><br></br>
        CVV: <input type="text" id="cvv" name="cvv" placeholder="1234" size="5" /><br></br>
        Billing Zip Code: <input type="text" id="billing" name="billing" placeholder="12345" size="6" /><br></br>
        <input type="submit" value="Purchase" onClick={(e) => {
          e.preventDefault();
          props.submitForm(grabValues());
          props.changeForm();
          }} /> <br></br>
      </form>
    </div>
    );
};

const ConfirmationForm = (props) => {
  const one = props.data.form1vars;
  const two = props.data.form2vars;
  const three = props.data.form3vars;

  return (
    <div>
      Is this information correct?
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{one.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{one.email}</td>
          </tr>
          <tr>
            <td>Address Line 1</td>
            <td>{two.line1}</td>
          </tr>
          <tr>
            <td>Address Line 2</td>
            <td>{two.line2}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{two.city}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{two.state}</td>
          </tr>
          <tr>
            <td>Zip Code</td>
            <td>{two.zipCode}</td>
          </tr>
          <tr>
            <td>Credit Card #</td>
            <td>{three.creditCard}</td>
          </tr>
          <tr>
            <td>Expiration Date</td>
            <td>{three.expDate}</td>
          </tr>
          <tr>
            <td>Billing Zip Code</td>
            <td>{three.billingZip}</td>
          </tr>
        </tbody>
      </table>
      <form>
        <input type="submit" value="Yes" onClick={(e) => {
          e.preventDefault();
          props.sendData();
        }} />
        <input type="submit" value="No" onClick={(e) => {
          e.preventDefault();
          props.resetData();
          props.returnToForm1();
        }} /> <br></br>
      </form>
    </div>
    );
};

const OrderComplete = (props) => {
  return (
    <div>
      Your Order is Complete!
      <form>
        <input type="submit" value="Return to Store" onClick={(e) => {
          e.preventDefault();
          props.changeForm();
          }} /> <br></br>
      </form>
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

  returnToForm1() {
    this.setState({
      currentForm: 1
    });
  }

  changeForm() {
      let nextForm = (this.state.currentForm + 1) % 5;
      this.setState({
        currentForm: nextForm
      });
  }

  submitForm1(array) {
    this.setState({
      form1vars: {
        name: array[0],
        email: array[1],
        password: array[2]
      }
    });
  }

  submitForm2(array) {
    this.setState({
      form2vars: {
        line1: array[0],
        line2: array[1],
        city: array[2],
        state: array[3],
        zipCode: array[4]
      }
    });
  }

  submitForm3(array) {
    this.setState({
      form3vars: {
        creditCard: array[0],
        expDate: array[1],
        cvv: array[2],
        billingZip: array[3]
      }
    });
  }

  resetData() {
    this.setState({
      form1vars: {
        name: null,
        email: null,
        password: null
      },
      form2vars: { 
        line1: null,
        line2: null,
        city: null,
        state: null,
        zipCode: null
      },
      form3vars: {
        creditCard: null,
        expDate: null,
        cvv: null,
        billingZip: null
      }
    })
  }

  makeData() {
    const one = this.state.form1vars;
    const two = this.state.form2vars;
    const three = this.state.form3vars;
    return {
      name: one.name,
      email: one.email,
      password: one.password,
      line1: two.line1,
      line2: two.line2,
      city: two.city,
      state: two.state,
      zipCode: two.zipCode,
      creditCard: three.creditCard,
      expDate: three.expDate,
      cvv: three.cvv,
      billingZip: three.billingZip
    };
  }

  sendData() {
    const data = this.makeData();
    fetch('/submit', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(data => {
      console.log('success');
      this.resetData();
      this.changeForm();
    }).catch(err => console.log('error, ', err));
  }

  render() {
    let renderItem;
    switch (this.state.currentForm) {
      case 1:
        renderItem = <Form1 changeForm={this.changeForm.bind(this)} submitForm={this.submitForm1.bind(this)} />;
        break;
      case 2:
        renderItem = <Form2 changeForm={this.changeForm.bind(this)} submitForm={this.submitForm2.bind(this)} />;
        break;
      case 3:
        renderItem = <Form3 changeForm={this.changeForm.bind(this)} submitForm={this.submitForm3.bind(this)} />;
        break;
      case 4:
        renderItem = <ConfirmationForm data={this.state} returnToForm1={this.returnToForm1.bind(this)} sendData={this.sendData.bind(this)} resetData={this.resetData.bind(this)} />;
        break;
      case 5:
        renderItem = <OrderComplete changeForm={this.changeForm.bind(this)} />;
        break;
      default: renderItem = <MakeOrder changeForm={this.changeForm.bind(this)} />;
    }
    return <div>{renderItem}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));