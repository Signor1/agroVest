// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Farm {
    ERC20 public token;

    mapping(address => string) public business_name;
    mapping(string => address) public nameToAddress;
    mapping(address => string) public business_image;
    uint256 public productIndexCounter;
    mapping(uint256 => address[]) public productBuyers;

    struct Farmer {
        string business_name;
        string business_image;
        string business_location;
        uint256 business_contact;
        string business_email;
        address farmerAddress;
        bool isRegistered;
    }

    Farmer[] farms;

    struct FarmProducts {
        string product_name;
        string product_image;
        string product_description;
        uint256 product_price;
        address product_owner;
        uint256 product_id;
    }

    mapping(uint256 => Review[]) public productReviews;
    mapping(uint256 => mapping(address => bool)) public hasReviewed;
    mapping(address => mapping(uint256 => bool)) public purchases;
    mapping(address => FarmProducts[]) public farmProducts;
    mapping(address => FarmProducts[]) public purchasedProducts;

    struct Review {
        address reviewer;
        string review;
    }

    mapping(address => FarmProducts[]) cartProducts;

    mapping(address => Farmer) details;
}
