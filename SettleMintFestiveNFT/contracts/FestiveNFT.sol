// SPDX-License-Identifier: MIT
// pragma solidity v0.7.0;

//pragma solidity 0.5.16;
//pragma solidity >=0.5.16 <0.8.0;
pragma solidity >=0.5.16 <0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/utils/Counters.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/access/Ownable.sol";

contract FestiveNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
        
    uint maxTickets;
    uint ticketCount;
    constructor(uint maxNo) ERC721("Festive NFT", "SMF") {
        maxTickets = maxNo;
        ticketCount = 0;
    }

    function mintNft(address receiver, string memory tokenURI) external onlyOwner returns (uint256) {
        
        require(ticketCount < maxTickets);
        _tokenIds.increment();

        uint256 newNftTokenId = _tokenIds.current();
        _mint(receiver, newNftTokenId);
        _setTokenURI(newNftTokenId, tokenURI);

        return newNftTokenId;
    }
    
    function transferTo(address _to, uint256 tokenId) public {
        _transfer(msg.sender,_to,tokenId);
  }
  
    function transferFrom(address _from,address _to, uint256 tokenId) public override {
        _transfer(_from,_to,tokenId);
  }
    
   function burn(uint _tokenId) public {
       _burn(_tokenId);
   }
   
   function balanceOf(address _owner) public view override returns (uint256 balance) {
        return balanceOf(_owner);
   }
   
   function approve(address _spender, uint256 _value) public override {
         return _approve(_spender,_value);
  }

    function ownerOf(uint256 _tokenId) public override view returns (address) {
        return ownerOf(_tokenId);
  }
  
    
}