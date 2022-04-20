function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        alert('ERROR: ' + label + ' cannot be left blank');
        return false;
      }
      return true;
  }

  function passwrdVali() {
    if (password.length < 8) {
      alert('ERROR: password must be at least 8 characters');
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (!passwrdVali(password)) return;
    
    console.log(name, email, password);
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      var res  = await fetch(url);
      var data = await res.json();
      console.log(data);
    })();
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      header="Create Account"
      body={show ? (  
              <>
              Name:<br/>
              <input 
                type="input" 
                className="form-control" 
                id="name" 
                placeholder="Enter name" 
                value={name} 
                onChange={e => setName(e.currentTarget.value)} 
              />
              <br/>
              Email Address:<br/>
              <input 
                type="input" 
                className="form-control" 
                id="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={e => setEmail(e.currentTarget.value)}
              />
              <br/>
              Password:<br/>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Enter password" 
                value={password} 
                onChange={e => setPassword(e.currentTarget.value)}
              />
              <br/>
              <button 
                type="submit" 
                className="btn btn-light" 
                onClick={handleCreate}
              >Create Account
              </button>
              </>
            ):(
              <>
              <h5>Success!</h5>
              <button 
                type="submit" 
                className="btn btn-light" 
                onClick={clearForm}
              >Add Another Account
              </button>
              </>
            )}
    />
  )
}