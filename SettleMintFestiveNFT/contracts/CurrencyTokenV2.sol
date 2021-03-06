pragma solidity 0.5.16;

//created to demo how to create and update the contract via OpenZeppelin truffle upgrade

contract CurrencyTokenV2 {
    string  public name = "Currency Token";
    string  public symbol = "CT";
    string  public standard = "Currency Token v2.0";
    uint256 public totalSupply;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    address owner;

//if  usd is 78.23, then 78 will be stored in 'currencyWholePart' and 23 wl be stored in 'currencyDecimalPart'. It is like pegging CT to the current USD value.
    uint currencyWholePart;
    uint currencyDecimalPart;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
        owner = msg.sender;
    }


    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function updateCurrency(uint _wholePart, uint _decimalPart) public {
        require(owner == msg.sender);
        currencyWholePart = _wholePart;
        currencyDecimalPart = _decimalPart;        
    }
    
}