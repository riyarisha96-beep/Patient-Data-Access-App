# 🏥 Patient Data Access DApp (Hardhat + Streamlit)

A decentralized healthcare application enabling **secure and transparent patient data access** using blockchain technology.  
This DApp empowers patients to control who can access their medical records while ensuring immutable audit trails for every data request.

---

## 🚀 Project Overview

This project demonstrates a blockchain-based **Data Governance solution** for healthcare systems.  
Built with **Solidity**, **Hardhat**, and **Streamlit**, it showcases how smart contracts can enforce patient consent, traceability, and data integrity in medical record management.

### ✳️ Core Features
- 🔐 **Smart Contract (Solidity)** — Defines rules for granting, revoking, and logging data access.
- ⚙️ **Hardhat Backend** — Handles local or testnet deployment (Sepolia / localhost).
- 🧠 **Streamlit Frontend** — Simple, interactive web interface for patient and provider operations.
- 🔗 **Web3 Integration** — Seamless communication between Python and Ethereum smart contracts.
- 🧾 **Contract Metadata Sync** — Automated handoff of `contract-info.json` from backend to frontend.

---

## 🧰 Tech Stack
| Layer | Technology |
|-------|-------------|
| Smart Contract | Solidity (v0.8.24) |
| Blockchain Framework | Hardhat |
| Frontend | Streamlit |
| Python Library | web3.py |
| Environment | Node.js, Python 3.10+, Git |
| Network | Ethereum Sepolia Testnet / Localhost |

---

## ⚙️ Setup Instructions (macOS / Linux)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/roseshreya22-stack/patient-data-access-app.git
cd patient-data-access-app

# Install Dependencies 
##Backend 

cd blockchain
npm install

##Frontend
cd ../app
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

### 2. Smart Contract Deployment
##Local Deployment

cd blockchain
npx hardhat node
# In another terminal
npx hardhat run --network localhost scripts/deploy.js

##This will deploy the contract to a local Hardhat blockchain and generate:
artifacts-app/contract-info.json

##Then copy it to the app directory:
cp artifacts-app/contract-info.json ../app/contract-info.json

### 🔹 Sepolia Testnet Deployment
##1.Create a .env file in the blockchain folder:
SEPOLIA_RPC=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
DEPLOYER_PRIVATE_KEY=0xYOUR_METAMASK_PRIVATE_KEY

##2.Deploy:
npx hardhat compile
npx hardhat run --network sepolia scripts/deploy.js

### 🖥️ Run the Streamlit App
cd app
source .venv/bin/activate
streamlit run app.py

##Patient View
> Connect using your patient private key.
> Grant or revoke access to healthcare providers.
> View audit logs for all data access events.

##Provider View
> Switch to a provider private key.
> Attempt to log and verify access permissions.



### 📚 Notes for Students / Developers
	•	This prototype is for educational and demonstration purposes only.
	•	No real patient data is stored on-chain — only pseudonymous access metadata.
	•	Extensible for other governance use cases: supply chain, finance, or identity verification.



### 👩‍💻 Authors

Shreya Singh
Bachelor of Business Analytics, University of Newcastle
This project was developed as part of the BUSA3007 - Data Governance Using Blockchain course.



### 🪙 License

MIT License © 2025 Shreya Singh
