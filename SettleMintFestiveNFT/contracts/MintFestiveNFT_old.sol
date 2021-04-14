pragma solidity 0.5.16;

//import './ERC721Token';

contract MintFestiveNFT_old {


  string  public name = "Test Coin";
  string  public symbol = "TEST";
  uint8   public decimals = 6;
  uint256 public INITIAL_SUPPLY = 3000 * (10 ** uint256(decimals)); //need to check

  mapping (address => uint256) balances;
  mapping (address => mapping (address => uint256)) allowed;
  
  constructor() public {

  //  totalSupply = INITIAL_SUPPLY;
      balances[msg.sender] = INITIAL_SUPPLY;

    }   

  

/*

function _mint(address _to, uint256 _tokenId) internal {
      require(_to != address(0));
      addTokenTo(_to, _tokenId);
      emit Transfer(address(0), _to, _tokenId);
    }

function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value && balances[_to] + _value > balances[_to]);
        require(_to != 0x0);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
  }

function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(balances[_from] >= _value && allowed[_from][msg.sender] >= _value);
        balances[_to] += _value;
        balances[_from] -= _value;
        allowed[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
  }
  */


}