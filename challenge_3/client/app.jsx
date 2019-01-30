
const MakeOrder = (props) => {
  return (<div>Make an Order</div>);
};

const Form1 = (props) => {
  return (<div>Form 1</div>);
};

const Form2 = (props) => {
  return (<div>Form 2</div>);
};

const Form3 = (props) => {
  return (<div>Form 3</div>);
};

const OrderComplete = (props) => {
  return (<div>Your Order is complete!</div>);
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

  render() {
    let renderItem;
    switch (this.state.currentForm) {
      case 1:
        renderItem = <Form1 />;
        break;
      case 2:
        renderItem = <Form2 />;
        break;
      case 3:
        renderItem = <Form3 />;
        break;
      case 4:
        renderItem = <OrderComplete />;
        break;
      default: renderItem = <MakeOrder />
    }
    return <div>{renderItem}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));