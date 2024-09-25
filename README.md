# Basic NFT Marketplace

The NFT marketplace is Defi platform for NFT. User can create their own NFT, Buy other NFTs and sell their NFTs. This platform is developed using the React, Javascript ans Solidity. 



To set up the repository and run the marketplace locally, follow the steps:

## Step 1:

1) Copy the following command and run it in your local terminal:
```bash
git clone https://github.com/krishansinghal/NFT_Market_platform
```
2) Go to the Repository:
```bash
cd NFT_Market_platform
```
3) open the terminal and Install the require dependencies:
```bash
npm install
```
`make sure to install all the dependecnies.`

## Step 2:

Create a `.env`  file in root folder and paste the following variables:
```bash
REACT_APP_PINATA_KEY=
REACT_APP_PINATA_SECRET=
POLYGON_AMOY_RPC_URL=
PRIVATE_KEY=
```

Paste the all require values of variables in the `.env` file.

## Step 3:

Open the `hardhat.config.js` file and select the network as per your requirement. The `default network ` is set as `ganache`.

Run the following command to `compile` the `Contract`:
```bash
npx hardhat compile
```
After succesful compilation run the following to `Deploy` the `Contract`:
```bash
npx hardhat run ./scripts/deploy.js
```
`Note: Add the network name in the command specifically if config file has multiple network.`

To run the Application on the local host:
```bash
npm start
```

It'll start the application on the localhost:3000.


Now users can create, buy and sell the NFT.

## Picture of the Application:

![alt text](/AppImages/nft1.png)
![alt text](/AppImages/nft2.png)
![alt text](/AppImages/nft3.png)
![alt text](/AppImages/nft4.png)
![alt text](/AppImages/nft5.png)
