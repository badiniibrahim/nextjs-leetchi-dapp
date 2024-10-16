// SPDX-Licence-Identifier: MIT
pragma solidity 0.8.23;

/// @title Leetchi Dapp
/// @auther SAWADOGO Badini Ibrahim


import "@openzeppelin/contracts/access/Ownable.sol";

error CollectIsFinished();
error GoalAlreadyReached();
error CollectNotFinished();
error FailledToSendEther();
error NoContribution();
error NotEnoughFunds();

contract Pool is Ownable {

    uint256 public end;
    uint256 public goal;
    uint256 public totalCollected;
    mapping(address => uint256) public contributions;

    event Contribute(address indexed contributor, uint256 amount);

    constructor(uint256 _duration, uint256 _goal)  Ownable(msg.sender){
       end = block.timestamp + _duration;
       goal = _goal;
    }


    /// @notice Allows to contribute 
    function contribut() external payable {
        if(block.timestamp >= end){
            revert CollectIsFinished();
        }

        if(msg.value  == 0){
            revert NotEnoughFunds();
        }

        contributions[msg.sender] += msg.value;
        totalCollected += msg.value;
        emit Contribute(msg.sender, msg.value);
    }

    function withdraw() external onlyOwner{
        if(block.timestamp < end || totalCollected < goal){
            revert CollectNotFinished();
        }

        (bool sent,) = msg.sender.call{value: address(this).balance}("");
        if(!sent){
            revert FailledToSendEther();
        }
    }

    function refund() external{
        if(block.timestamp < end){
            revert CollectNotFinished();
        }

        if(totalCollected >= goal){
            revert GoalAlreadyReached();
        }

        if(contributions[msg.sender] == 0){
            revert NoContribution();
        }

        uint256  amount = contributions[msg.sender];
        contributions[msg.sender] = 0;
        totalCollected -= amount;
        (bool sent,) = msg.sender.call{value: amount}("");
        if(!sent){
            revert FailledToSendEther();
        }

    }

}

