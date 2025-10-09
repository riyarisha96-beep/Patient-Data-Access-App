const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const PatientDataAccess = await hre.ethers.getContractFactory("PatientDataAccess");
  const contract = await PatientDataAccess.deploy(deployer.address);
  await contract.waitForDeployment();
  const address = await contract.getAddress();
  console.log("Contract deployed to:", address);

  const artifact = await hre.artifacts.readArtifact("PatientDataAccess");
  const info = {
    address,
    abi: artifact.abi,
    network: "localhost"
  };

  // Write for frontend to consume
  const outDir = path.join(__dirname, "..", "artifacts-app");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "contract-info.json"), JSON.stringify(info, null, 2));

  // Try to copy to ../app for convenience
  const appDir = path.join(__dirname, "..", "..", "app");
  try {
    fs.mkdirSync(appDir, { recursive: true });
    fs.writeFileSync(path.join(appDir, "contract-info.json"), JSON.stringify(info, null, 2));
    console.log("Wrote ../app/contract-info.json");
  } catch (e) {
    console.warn("Could not write to ../app directory. Create it and copy artifacts-app/contract-info.json manually.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
