import React, { useEffect, useState } from "react";
import { ethers } from 'ethers'

import { contractABI, contractAddress } from "utils/constant";

export const TransactionContext = React.createContext();
  const { ethereum } = window;

  const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    return transactionContract;
 }

  export const TransactionProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [currentAccount, setCurrentAccount] = useState('')
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'))

    const handleChange = (e) => {
      setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value }));
    }

    const checkIfWalletIsConnected = async () => {
      try {
        if (!ethereum) return alert('Please install metamask');
        const accounts = await ethereum.request({method: 'eth_accounts'});
        if(accounts.length) {
            setCurrentAccount(accounts[0]);
        } else {
          console.log('No Accounts found');
        }
      } catch (error) {
        console.error(error);
        throw new Error("No ethereum object");
      }
 }

   const connectWallet = async () => {
     try {
         if (!ethereum) return alert('Please install metamask');
         const accounts = await ethereum.request({method: 'eth_requestAccounts'});
         setCurrentAccount(accounts[0]);
     } catch (error) {
         console.error(error);
         throw new Error("No ethereum object");
     }
   }

   const sendTransaction = async () => {
      try {
        if (!ethereum) return alert('Please install metamask');
        const { addressTo, amount, keyword, message } = formData
        const transactionContract = getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: '0x5208', // 2100 GWEI
            value: parsedAmount._hex,
          }]
        });

        const transactionHash = await transactionContract.addToBlockChain(addressTo, parsedAmount, message, keyword);
        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        setIsLoading(false);
        console.log(`Sucess - ${transactionHash.hash}`);

        const transactionCount = await transactionContract.getTransactionCount()
        setTransactionCount(transactionCount.toNumber())

      } catch (error) {
        console.error(error);
        throw new Error('No ethereum object');
      }
   }

     useEffect(() => {
       checkIfWalletIsConnected();
     },[]);

     return (
       <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, sendTransaction, handleChange }}>
           {children}
       </TransactionContext.Provider>
     )
 }
