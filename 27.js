const atm = function(initialBalance){
    let balance = initialBalance

    function withdraw(amt){
        if(atm > balance){
            return "Are you kidding"
        }else{
            balance -= amt
            return balance

        }
    }
    return{withdraw}
}

