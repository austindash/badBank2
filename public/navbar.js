function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light navatd">
      <a className="navbar-brand" href="#" title="home" >ATDBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" title="new users can create an account here">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" title="you can deposit money here">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" title="you can withdraw money here">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/" title="you can check your balance here">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" title="you can view all your data here">All Data</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}