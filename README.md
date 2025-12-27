# 📂 Decentralized File Storage & Identity Workflow

## 📖 Project Overview
This project implements a **Decentralized Application (DApp)** that solves the problem of storing data immutably without relying on centralized servers (like AWS or Google Drive).

Because storing large files (like images or videos) directly on the Ethereum blockchain is prohibitively expensive, this project uses a **Hybrid Architecture**:
1.  **IPFS (InterPlanetary File System):** Handles the efficient storage of the raw file data.
2.  **Ethereum Blockchain:** Handles the security and ownership by storing the **Reference Hash (CID)** of the file.

---

## 🏗️ Architecture & Workflow

The system follows a 3-step decentralized workflow:

### 1. The Storage Layer (IPFS)
*   **Action:** The user uploads a file to the IPFS network (via IPFS Desktop).
*   **Mechanism:** IPFS uses **Content Addressing**. Instead of saving a file by name (`my_photo.jpg`), it generates a cryptographic hash based on the content (e.g., `QmUfV...`).
*   **Integrity:** If a single pixel in the image changes, the Hash changes completely. This guarantees that the file retrieved is exactly the same as the file uploaded.

### 2. The Logic Layer (Smart Contract)
*   **File:** `contracts/FileStorage.sol`
*   **Mechanism:** I deployed a Solidity smart contract to a local blockchain. This contract acts as a global, immutable database.
*   **Functions:**
    *   `setHash(string)`: Takes the IPFS CID and saves it to the blockchain state. This action requires a transaction and costs Gas.
    *   `getHash()`: Retrieves the stored CID. This is a "view" function and is free to call.

### 3. The Identity Layer (HD Wallet - Bonus Feature) 🏆
*   **Standard approach:** Usually, developers let Ganache automatically unlock accounts. This is insecure and unrealistic.
*   **My approach (Bonus):** I implemented an **HD (Hierarchical Deterministic) Wallet Provider**.
    *   I used the `@truffle/hdwallet-provider` library.
    *   I configured the project with a **12-word Mnemonic (Seed Phrase)**.
    *   **Result:** Transactions in this project are **cryptographically signed** locally using a Private Key derived from the seed phrase, simulating a real-world production environment (similar to how MetaMask works).

---

## 🚀 How to Run the Project

### Prerequisites
*   Node.js
*   Ganache (Running on port 7545)
*   IPFS Desktop

### Step 1: Installation
``` bash
git clone https://github.com/Hazemserry90/decentralized-file-storage.git
cd decentralized-file-storage
npm install
```
### Step 2: Configuration
Create a secret configuration for the HD Wallet. Open truffle-config.js and ensure your 12-word mnemonic is set:

JavaScript

```const mnemonic = "theory rabbit ceiling kite ..."; // Your Ganache words
```

### Step 3: Deployment (The Bonus Workflow)
Run the migration using the custom network. This proves the HD Wallet integration works:

``` Bash

npx truffle migrate --network bonus_network
Output will show the contract being deployed by the specific account associated with your mnemonic.
```
### Step 4: Verification
Interact with the contract to store and retrieve data:

``` Bash

npx truffle console
Inside the console, run these commands:
```
## JavaScript
```
let instance = await FileStorage.deployed()
await instance.setHash("QmUfV2qm2amkDN93JBoaM8MC8DWfFXiSuTmEuBNm6g7fUL") // Example IPFS Hash
await instance.getHash()
```
## 🎓 Learning Outcomes
By building this project, I have demonstrated:

Blockchain interaction: Writing and deploying Smart Contracts.
Decentralized Storage: Understanding how IPFS CIDs work compared to HTTP URLs.
Key Management: Moving beyond default development accounts to managing Private Keys and Seed Phrases programmatically.







