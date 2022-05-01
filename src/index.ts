import {  Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} from "@solana/web3.js";

const wallet: Keypair = new Keypair();

const publicKey = wallet.publicKey;
const secretKey = wallet.secretKey;

