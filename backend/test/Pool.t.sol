// SPDX-Licence-Identifier: MIT

pragma solidity 0.8.23;

import "forge-std/Test.sol";
import { Pool } from "../src/Pool.sol";

contract Pooltest is Test {

    address owner = makeAddr("User0");
    address addr1 = makeAddr("User0");
    address addr2 = makeAddr("User1");
    address addr3 = makeAddr("User2");
    address addr4 = makeAddr("User3");

    uint256 duration = 4 weeks;
    uint256 goal = 10 ether;

    Pool pool;

    function setUp() public{
        vm.prank(owner);
        pool = new Pool(duration,goal);
    }

    function test_ContractDeployed() public {
        address _owner = pool.owner();
        assertEq(owner, _owner);

        uint256 _end = pool.end();
        assertEq(block.timestamp + duration, _end);

        uint256 _goal = pool.goal();
        assertEq(goal, _goal);
    }


}