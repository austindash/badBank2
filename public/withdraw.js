function Withdraw(){
  
  const ctx = React.useContext(UserContext);

  var bal = ctx.users[0].balance

  const [withdraw, setWithdraw] = React.useState(0);

  function validate(field, label){
    var x = withdraw;
    console.log('x = ' + x);

    if (isNaN(x)) {
      alert('ERROR: withdraw amount must be a number');
      return false;
    }

    else if (!field) {
      alert('ERROR: withdraw amount cannot be left blank');
      return false;
    }

    else if (x < 0) {
      alert('ERROR: withdraw amount must be a positive number');
      return false;
    }

    else if (x > bal) {
      alert('ERROR: withdraw amount must be less than your account balance');
      return false;
    }


    else {
      return true;
    }
  };


  const handleWithd = (event) => {
    var withd = withdraw
    if (!validate(withdraw, 'withdraw')){
      return
    };
    let newTotal = +bal - +withd;
    ctx.users[0].balance = newTotal;
    console.log(newTotal)
  };
  return (
    <Card
      header="Withdraw"
      body={ 
      <>
        Your Current Balance is: ${bal}.00
        <br/>
        <br/>
        enter withdraw amount:
        <input 
          type="input" 
          className="form-control" 
          id="withdraw" 
          placeholder="0.00" 
          value={withdraw} 
          onChange={e => setWithdraw(e.currentTarget.value)}/>
        <br/>
        <button 
          type="submit" 
          className="btn btn-light" 
          onClick={handleWithd}
          >submit
        </button>
      </>
      }
    />
  )
}
