import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const airDropSol = async(publicKey: PublicKey) => {
    try {
        const connection: Connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const fromAirDropSignature: string = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL);

        await connection.confirmTransaction(fromAirDropSignature);
    } catch (error) {
        console.log(error);
    }
}

export default airDropSol;