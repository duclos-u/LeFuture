const main = async () => {
    const [deployer] = await ethers.getSigners();
    const Transactions = await ethers.getContractFactory("Transactions")
    const transactions = await Transactions.deploy();
    await transactions.deployed();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
    console.log("Token address:", transactions.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}

runMain();
