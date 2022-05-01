import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const getWalletBalance = async (publicKey: PublicKey) => {
    try {
        const connection: Connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const walletBalance: number = await connection.getBalance(publicKey);

        console.log('walletBalance :>> ', walletBalance);
    } catch (error) {
        console.log(error);
    }
}

export default getWalletBalance;