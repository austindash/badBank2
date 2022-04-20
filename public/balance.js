function Balance(){

  const ctx = React.useContext(UserContext);

  var bal = ctx.users[0].balance
  console.log(bal)

  return (
    <Card
    header="Total Account Balance"
    status={status}
    text ="Your Current Account Balance is: "
    body={ 
            <>${bal}.00</>
          }
  />
  )
}
