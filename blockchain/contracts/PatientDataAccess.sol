// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title Patient-centric data access control for healthcare records
/// @notice Stores permissions on-chain; keeps PHI off-chain.
contract PatientDataAccess {
    address public patient;
    // provider => (dataTypeHash => allowed)
    mapping(address => mapping(bytes32 => bool)) private permissions;

    event AccessGranted(address indexed provider, bytes32 indexed dataType);
    event AccessRevoked(address indexed provider, bytes32 indexed dataType);
    event DataAccessed(address indexed provider, bytes32 indexed dataType, string purpose);

    modifier onlyPatient() {
        require(msg.sender == patient, "Only patient");
        _;
    }

    constructor(address _patient) {
        require(_patient != address(0), "Invalid patient");
        patient = _patient;
    }

    function grantAccess(address provider, string calldata dataType) external onlyPatient {
        bytes32 key = keccak256(abi.encodePacked(dataType));
        permissions[provider][key] = true;
        emit AccessGranted(provider, key);
    }

    function revokeAccess(address provider, string calldata dataType) external onlyPatient {
        bytes32 key = keccak256(abi.encodePacked(dataType));
        permissions[provider][key] = false;
        emit AccessRevoked(provider, key);
    }

    function checkAccess(address provider, string calldata dataType) external view returns (bool) {
        return permissions[provider][keccak256(abi.encodePacked(dataType))];
    }

    /// @notice Provider logs that they accessed off-chain data (audit trail). Requires permission.
    function logAccess(string calldata dataType, string calldata purpose) external {
        bytes32 key = keccak256(abi.encodePacked(dataType));
        require(permissions[msg.sender][key], "Not authorized for this data type");
        emit DataAccessed(msg.sender, key, purpose);
    }
}
