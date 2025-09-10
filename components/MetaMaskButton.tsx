//@ts-nocheck
"use client"

import { useState, useEffect } from 'react'
import Web3 from 'web3'

// You'll need to define these elsewhere or import them
const contractABI = [] // Replace with your contract ABI
const contractAddress = '' // Replace with your contract address

const MetaMaskButton = () => {
  const [walletStatus, setWalletStatus] = useState<string>('')
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [account, setAccount] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [web3, setWeb3] = useState<Web3 | null>(null)
  const [contract, setContract] = useState<any>(null)

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        
        const accounts = await web3Instance.eth.getAccounts();
        const userAccount = accounts[0];
        setAccount(userAccount);
        
        // Check current chain ID
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        const sepoliaChainId = '0xaa36a7'; // 11155111 in hex
        
        // Switch to Sepolia if not already connected
        if (chainId !== sepoliaChainId) {
          try {
            // Try to switch to Sepolia
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: sepoliaChainId }],
            });
          } catch (switchError: any) {
            // If Sepolia is not added to MetaMask, add it
            if (switchError.code === 4902) {
              try {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [{
                    chainId: sepoliaChainId,
                    chainName: 'Sepolia Testnet',
                    nativeCurrency: {
                      name: 'SepoliaETH',
                      symbol: 'ETH',
                      decimals: 18,
                    },
                    rpcUrls: ['https://rpc.sepolia.org'],
                    blockExplorerUrls: ['https://sepolia.etherscan.io/'],
                  }],
                });
              } catch (addError: any) {
                setError(`Failed to add Sepolia network: ${addError.message}`);
                return;
              }
            } else {
              setError(`Failed to switch to Sepolia: ${switchError.message}`);
              return;
            }
          }
        }
        
        const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
        setContract(contractInstance);
        
        setIsConnected(true);
        setWalletStatus(`Connected to Sepolia: ${userAccount}`);
        
      } catch (error: any) {
        setError(`Error: ${error.message}`);
      }
    } else {
      setError('Please install MetaMask!');
    }
  }

  return (
    <div className="metamask-container">
      <button 
        onClick={connectWallet} 
        className="connect-button"
      >
        {isConnected ? 'Connected to MetaMask' : 'Connect MetaMask'}
      </button>
      
      {walletStatus && (
        <div className="success-message">{walletStatus}</div>
      )}
      
      {error && (
        <div className="error-message">{error}</div>
      )}
      
      <style jsx>{`
        .metamask-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .connect-button {
          background-color: #f6851b;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }
        .connect-button:hover {
          background-color: #e2761b;
        }
        .success-message {
          color: green;
          padding: 8px;
          border-radius: 4px;
          background-color: rgba(0, 255, 0, 0.1);
        }
        .error-message {
          color: red;
          padding: 8px;
          border-radius: 4px;
          background-color: rgba(255, 0, 0, 0.1);
        }
      `}</style>
    </div>
  )
}

export default MetaMaskButton