import {  Keypair } from "@solana/web3.js";
import getWalletBalance from "./utils/getBalance";
import airDropSol from "./utils/airDrop";

const wallet: Keypair = new Keypair();

const publicKey = wallet.publicKey;
const secretKey = wallet.secretKey;

const main = async () => {
    await getWalletBalance(publicKey);
    await airDropSol(publicKey);
    
    await getWalletBalance(publicKey);
}

main();