contract mortal {
    /* Define variable owner of the type address */
    address owner;

    /* This function is executed at initialization and sets the owner of the contract */
    function mortal() { owner = msg.sender; }

    /* Function to recover the funds on the contract */
    function kill() { if (msg.sender == owner) selfdestruct(owner); }
}

contract greeter is mortal {
    /* Define variable greeting of the type string */
    string data;
    
    /* This runs when the contract is executed */
    function setData(string _data) public {
        data = _data;
    }

    /* Main function */
    function getData() constant returns (string) {
        return data;
    }
}