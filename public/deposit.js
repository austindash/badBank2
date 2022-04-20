function Deposit(){

  const ctx = React.useContext(UserContext);

  var bal = ctx.users[0].balance

  const [deposit, setDeposit] = React.useState(0);


  function validate(field, label){
    var x = deposit;
    console.log('x = ' + x);

    if (isNaN(x)) {
      alert('ERROR: deposit amount must be a number');
      return false;
    }

    else if (!field) {
      alert('ERROR: deposit amount cannot be left blank');
      return false;
    }

    else if (x < 0) {
      alert('ERROR: deposit amount must be a positive number');
      return false;
    }

    else {
      return true;
    }
  };


  const handleDepo = (event) => {
    var depo = deposit
    if (!validate(deposit, 'deposit')){
    return
    };
    let newTotal = +bal + +depo;
    ctx.users[0].balance = newTotal;
    console.log(newTotal)
  };

 
  return (
    <Card 
      header="Deposit"
      body={ 
      <>
        Your Current Balance is: ${bal}.00
        <br/>
        <br/>
        enter deposit amount:
        <input 
          type="input" 
          className="form-control" 
          id="deposit" 
          placeholder=""
          value={deposit} 
          onChange={e => setDeposit(e.currentTarget.value)}
        />
        <br/>
        <button 
          id="dbtn"
          type="submit" 
          className="btn btn-light" 
          onClick={handleDepo}
          >submit
        </button>
      </>
      }
    />
  )
} 