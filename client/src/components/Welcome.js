import { AiFillPlayCircle } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';

import avax from '../images/Avalanche_AVAX_RedWhite.png';
import { TransactionContext } from "../context/TransactionContext";
import { useContext } from "react";

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange } = useContext(TransactionContext);
    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData
        console.log('===>', formData)
        e.preventDefault()
        if (!addressTo || !amount || !keyword || !message) return;
        console.log('hehehe')
        sendTransaction();
    }

    return (
        <div className="welcome">
            {!currentAccount && (
                <button
                    type="button"
                    onClick={connectWallet}
                    className="connect-wallet-button">
                    Connect Wallet
                </button>
            )}
            <div>
                <div>
                    <input type="text" placeholder="Address to" name="addressTo" onChange={handleChange}  />
                    <input type="number" placeholder="amount" name="amount" onChange={handleChange} />
                    <input type="text" placeholder="keyword" name="keyword" onChange={handleChange} />
                    <input type="text" placeholder="Enter message" name="message" onChange={handleChange} />
                </div>
                <button onClick={handleSubmit}>
                    Send !
                </button>
            </div>
        </div>
    );
}

export default Welcome;
