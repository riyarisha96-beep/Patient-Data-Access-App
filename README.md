# 🏥 Patient Data Access DApp (Hardhat + Streamlit)

A decentralized healthcare application enabling **secure and transparent patient data access** using blockchain technology.  
This DApp empowers patients to control who can access their medical records while ensuring immutable audit trails for every data request.

---

## 🚀 Project Overview

This project demonstrates a blockchain-based **Data Governance solution** for healthcare systems.  
Built with **Solidity**, **Hardhat**, and **Streamlit**, it shows how smart contracts can enforce patient consent, traceability, and data integrity in medical record management.

### ✳️ Core Features
- 🔐 **Smart Contract (Solidity)** — Rules for granting, revoking, and logging data access.  
- ⚙️ **Hardhat Backend** — Local blockchain network for deployment and testing.  
- 🧠 **Streamlit Frontend** — Interactive web interface for patient and provider operations.  
- 🔗 **Web3.py Integration** — Python ↔ Ethereum contract communication.  
- 🧾 **Contract Metadata Sync** — Automated `contract-info.json` handoff between backend and frontend.

---

## 🧰 Tech Stack
| Layer | Technology |
|---|---|
| Smart Contract | Solidity (v0.8.24) |
| Blockchain Framework | Hardhat |
| Frontend | Streamlit |
| Python Library | web3.py |
| Environment | Node.js, Python 3.10+, Git |
| Network | Local Hardhat Network |

---

## ⚙️ Local Setup (macOS / Linux)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/roseshreya22-stack/patient-data-access-app.git
cd patient-data-access-app
```

---

### 2️⃣ Smart Contract Deployment (Local Hardhat Network)

> **Prerequisites**
> - Node.js ≥ 18 and npm installed  
> - Hardhat (installed per-project)  

#### Steps:
```bash
# Navigate to the blockchain directory and install dependencies
cd blockchain
npm install

# Start a local Hardhat node (terminal A)
npx hardhat node
```

In **another terminal (B)**:
```bash
cd patient-data-access-app/blockchain
# Compile and deploy the smart contract to the local network
npx hardhat compile
npx hardhat run --network localhost scripts/deploy.js
```

This generates **artifacts** and an app-friendly **`artifacts-app/contract-info.json`** file.

Copy it to the frontend directory:
```bash
cp artifacts-app/contract-info.json ../app/contract-info.json
```

---

### 3️⃣ Run the Streamlit App
Create a Python virtual environment and install dependencies:
```bash
cd app
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Start the app:
```bash
streamlit run app.py
```

The Streamlit interface will open at:
```
http://localhost:8501
```

---

## 🧪 Using the Application

**Patient Functions**
- Use a **Hardhat test account** as a patient.  
- Grant or revoke access for specific providers.  
- Review the blockchain event logs of all data access requests.  

**Provider Functions**
- Use another **Hardhat test account** as a provider.  
- Request access to patient data.  
- Check permission and confirm transaction logs.

---

## 📚 Notes for Students / Developers
- Designed purely for **local development and testing**.  
- **No real patient data** is stored on-chain; only encrypted and pseudonymous metadata.  
- Demonstrates blockchain-based **data governance principles** such as transparency, traceability, and access control.

---

## 👩‍💻 Authors
**Shreya Singh**, **Luke Hoskins**, **Jiyu Zhong**  
Bachelor of Business Analytics, University of Newcastle  
Developed for **BUSA3007 – Data Governance Using Blockchain**

---

## 🪙 License
MIT License © 2025 Shreya Singh
