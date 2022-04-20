const {response} = require("express");

function AllData(){
  //get data
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    // fetch all accounts from api
    fetch('/account/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(JSON.stringify(data));
         });
  }, []);
  
  //remove quotes
  //var dataA = data.replace(/"/g, '');
  //add space after colons
  //var dataB = dataA.replace(/:/g, ': ');
  //new array of data created
  //var data2 = dataB.split(",");
  //console.log(data2);
 

  return (
    <Card
      txtcolor="black"
      header="All Data"
      title="All Users in Store:"
      text=" "
      id="demo"
      body={<>
      CURRENT USER: <br/>
      Name: {data.name} <br/>
      Email: {data.email} <br/>
      Password: {data.password} <br/>
      Balance: ${data.balance}.00 <br/> 
      <br/> ALL USERS: <br/>
            {data}
      </>}
    />    
  );  
}
