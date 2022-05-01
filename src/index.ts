import {  Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} from "@solana/web3.js";

const wallet: Keypair = new Keypair();

const publicKey = wallet.publicKey;
const secretKey = wallet.secretKey;

const getWalletBalance = async () => {
    try {
        const connection: Connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const walletBalance: number = await connection.getBalance(publicKey);

        console.log('walletBalance :>> ', walletBalance);
    } catch (error) {
        console.log(error);
    }
}

const main = async () => {
    await getWalletBalance();

}

main();