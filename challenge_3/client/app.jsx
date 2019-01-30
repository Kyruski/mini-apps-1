
const MakeOrder = (props) => {
  return (
    <div>
      Make and Order
      <div>
        <a href="#" onClick={props.changeForm()}>Go to the next form</a>
      </div>
    </div>
    );
};

const Form1 = (props) => {
  return (
    <div>
      Form 1
      <div>
        <a href="#" onClick={props.changeForm()}>Go to the next form</a>
      </div>
    </div>
    );
};

const Form2 = (props) => {
  return (
    <div>
      Form 2
      <div>
        <a href="#" onClick={props.changeForm()}>Go to the next form</a>
      </div>
    </div>
    );
};

const Form3 = (props) => {
  return (
    <div>
      Form 3
      <div>
        <a href="#" onClick={props.changeForm()}>Go to the next form</a>
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
      form1vars: {

      },
      form2vars: {

      },
      form3vars: {

      }
    }
  }

  changeForm() {
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