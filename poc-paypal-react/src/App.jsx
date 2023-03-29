import './App.css'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

function App() {
  const CLIENT_ID = "AWBfBF6lwcqZtRWLiZ7U4PKJKQWNpopmwS6o_5h2Xd4dfMhgYxrqpwYrv4IqAOPqLj5nQk3r4Fo-LhYS"
  const secret = "ENyoZZ3yXJaFkWqXv9pOIIDwLh_G-EQB7FUlG9EezX3x2a1SkUEmztlkls1xGAel8TpWQHJ7tZ3On7J6"

  const paypalOptions = {
    "client-id": CLIENT_ID,
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    color: "gold",
    shape: "rect",
    label: "checkout",
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
            currency_code: "USD",
          },
        },
      ],
    });
  };
  
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function(details) {
      alert("Transaction completed by " + details.payer.name.given_name);
    });
  };

  return (
    <div className="App">
      <div className='login__card'>
        <PayPalScriptProvider options={paypalOptions} >
          <PayPalButtons 
            styles={buttonStyles}
            createOrder={createOrder}
            onApprove={onApprove}
          />
        </PayPalScriptProvider>
      </div>      
    </div>
  )
}

export default App
