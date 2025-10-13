# 🏥 Patient Data Access DApp (Hardhat + Streamlit)

A decentralized healthcare application enabling **secure and transparent patient data access** using blockchain technology.  
This DApp empowers patients to control who can access their medical records while ensuring immutable audit trails for every data request.

---

## 🚀 Project Overview

This project demonstrates a blockchain-based **Data Governance solution** for healthcare systems.  
Built with **Solidity**, **Hardhat**, and **Streamlit**, it shows how smart contracts can enforce patient consent, traceability, and data integrity in medical record management.

### ✳️ Core Features
- 🔐 **Smart Contract (Solidity)** — Rules for granting, revoking, and logging data access.
- ⚙️ **Hardhat Backend** — Local or Sepolia testnet deployment.
- 🧠 **Streamlit Frontend** — Simple, interactive web interface for patient & provider flows.
- 🔗 **web3.py Integration** — Python ↔ Ethereum contract calls.
- 🧾 **Contract Metadata Sync** — Automated `contract-info.json` handoff to the frontend.

---

## 🧰 Tech Stack
| Layer | Technology |
|---|---|
| Smart Contract | Solidity (v0.8.24) |
| Blockchain Framework | Hardhat |
| Frontend | Streamlit |
| Python Library | web3.py |
| Environment | Node.js, Python 3.10+, Git |
| Network | Ethereum Sepolia Testnet / Localhost |

---

## ⚙️ Setup (macOS / Linux)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/roseshreya22-stack/patient-data-access-app.git
cd patient-data-access-app
```

---

### 2️⃣ Smart Contract Deployment (Local or Sepolia)

> **Prereqs**
> - Node.js ≥ 18, npm
> - Hardhat (installed per-project)
> - A **Sepolia RPC** (e.g., Alchemy) and a **MetaMask** account if deploying to Sepolia

#### A) Local Hardhat Network
```bash
# go to the blockchain workspace and install deps
cd blockchain
npm install

# start a local node (terminal A)
npx hardhat node
```

In **another terminal (B)**:
```bash
cd patient-data-access-app/blockchain
# compile & deploy to localhost
npx hardhat compile
npx hardhat run --network localhost scripts/deploy.js
```

This generates **artifacts** and an app-friendly **`artifacts-app/contract-info.json`**.

Copy it to the frontend:
```bash
cp artifacts-app/contract-info.json ../app/contract-info.json
```

#### B) Sepolia Testnet (Alchemy + MetaMask)
Create **`.env`** in `patient-data-access-app/blockchain`:
```ini
SEPOLIA_RPC=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
DEPLOYER_PRIVATE_KEY=0xYOUR_METAMASK_PRIVATE_KEY   # never commit this
```

Then deploy:
```bash
cd blockchain
npm install
npx hardhat compile
npx hardhat run --network sepolia scripts/deploy.js
```

After a successful deploy, copy the generated contract metadata for the app:
```bash
cp artifacts-app/contract-info.json ../app/contract-info.json
```

> 🔐 **Security note:** Use a throwaway MetaMask account for testnets. Never expose real keys or commit `.env`.

---

### 3️⃣ Run the Streamlit App
Create a Python venv and install requirements:
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

---

## 🧪 Using the App

**Patient View**
- Connect with your **patient** private key (test account).
- Grant / revoke provider access.
- View audit logs of all data access events.

**Provider View**
- Switch to a **provider** test key.
- Attempt access and verify permission checks & logging.

---

## 📚 Notes for Students / Developers
- Prototype for **educational/demo** purposes only.  
- **No real PHI** is stored on-chain; only pseudonymous access metadata.  
- Extensible to other governance scenarios (supply chain, finance, identity).

---

## 👩‍💻 Author
**Shreya Singh**  
Bachelor of Business Analytics, University of Newcastle  
Developed for **BUSA3007 – Data Governance Using Blockchain**.

---

## 🪙 License
MIT License © 2025 Shreya Singh
