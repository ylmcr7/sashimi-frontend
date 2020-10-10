import Web3 from 'web3'
import { provider } from 'web3-core'
import { AbiItem } from 'web3-utils'

import vaultABI from '../constants/abi/vault/vaultABI.json'
// import strategyABI from '../constants/abi/vault/strategyABI.json'
// import controllerABI from '../constants/abi/vault/controllerABI.json'
import { Contract } from 'web3-eth-contract'
import BigNumber from "bignumber.js";

export const getVaultContract = (provider: provider, vaultContractAddress: string) => {
  const web3 = new Web3(provider);
  return new web3.eth.Contract(
    (vaultABI as unknown) as AbiItem,
    vaultContractAddress,
  );
};

export const vaultDeposit = (vaultContract: Contract, account: string, value: BigNumber) => {
  return vaultContract.methods
    .deposit(value.toString())
    .send({from: account})
    .on('transactionHash', (tx: any) => {
      console.log('vaultDeposit', tx);
      return tx.transactionHash;
    })
    .on('error', function (err: any) {
      return err;
    });
};

export const vaultWithdraw = (vaultContract: Contract, account: string, value: BigNumber) => {
  return vaultContract.methods
    .withdraw(value.toString())
    .send({from: account})
    .on('transactionHash', (tx: any) => {
      console.log('vaultWithdraw', tx);
      return tx.transactionHash;
    })
    .on('error', function (err: any) {
      return err;
    });
};

export const getVaultUserBalance = async function (vaultContract: Contract, account: string) {
  return await vaultContract.methods
    .balanceOf(account)
    .call({from: account});
};
export const getVaultTotalBalance = async function (vaultContract: Contract, account: string) {
  return await vaultContract.methods
    .balance()
    .call({from: account});
};
