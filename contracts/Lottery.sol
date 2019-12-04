pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    function Inbox(string initialString) public {
        message = initialString;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
}
