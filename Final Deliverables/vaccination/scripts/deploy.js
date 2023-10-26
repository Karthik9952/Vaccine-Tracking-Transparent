const main = async () => {
  const Vaccination = await hre.ethers.getContractFactory("Vaccination");
  const vaccination = await Vaccination.deploy();

  await vaccination.deployed();

  console.log( "Transaction deployed to:" ,vaccination.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();