# Patient Data Access DApp (Hardhat + Streamlit)

A minimal end-to-end demo of **patient-centric data access control** for healthcare records.

## What you get
- Solidity smart contract (`blockchain/contracts/PatientDataAccess.sol`)
- Hardhat config + deploy script (`npx hardhat node`, `npm run deploy:local`)
- Streamlit frontend (`app/app.py`) using `web3.py`
- Seamless handoff of `contract-info.json` from deploy to frontend

---

## Prerequisites (macOS)
- **Node.js 18+** (recommended via `nvm`)
- **Python 3.10+**
- **Git**
- **Homebrew** (optional)

```bash
# Node via nvm
brew install nvm       # if you don't have it
mkdir -p ~/.nvm && echo 'export NVM_DIR="$HOME/.nvm"; [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
nvm install --lts
nvm use --lts

# Python env (optional but recommended)
python3 -m venv .venv
source .venv/bin/activate
```

---

## 1) Start the blockchain (Hardhat)
```bash
cd blockchain
npm install
npx hardhat compile
npm run node
```

Keep this terminal open (it runs the local chain at `http://127.0.0.1:8545`). It will print **20 accounts** and **private keys**.

## 2) Deploy the contract
Open a **second terminal**:

```bash
cd blockchain
npm run deploy:local
```

This writes `artifacts-app/contract-info.json` and also copies it to `../app/contract-info.json`.

## 3) Run the Streamlit app
Open a **third terminal**:

```bash
cd app
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit `.env` to add:
#   RPC_URL=http://127.0.0.1:8545
#   PRIVATE_KEY=<paste one private key from the hardhat node output>
streamlit run app.py
```

Then open the local URL that Streamlit prints (usually http://localhost:8501).

### Using the DApp
1. Paste the same private key you used to **deploy** (first account) into the sidebar. This is the **patient** account.
2. Copy one of the other Hardhat account addresses to act as a **provider**.
3. **Grant Access** for a data type (e.g., `EHR`) to that provider address.
4. Switch the private key in the sidebar to the provider's key and **Log Access** with a purpose.
5. Use **Check Access** to verify permissions; see **Recent Access Events** update.

---

## Development Notes
- Patient address is set in the contract **constructor** as the deployer.
- **Do not** store PHI on-chain. Store only references or hashes if needed.
- Events create an immutable audit trail (`DataAccessed`).

## Troubleshooting
- **Connection failed**: Is `npm run node` still running?
- **Invalid private key**: paste exactly as printed by Hardhat; no quotes or 0x prefix if not shown.
- **Nonce too low**: stop and restart Streamlit, or wait for pending txs to finalize.
- **Contract not found**: delete any old `app/contract-info.json` and redeploy.
