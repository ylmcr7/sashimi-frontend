import {useCallback, useEffect, useState} from 'react'

import { useWallet } from 'use-wallet'

import BigNumber from "bignumber.js";
import {wethAddress} from "../sushi/lib/constants";

export const useTokenWethPriceByRouter = (sashimiRouterContract: any, lpAddress: string, tokenAddress: string): BigNumber => {
  const [tokenWethPrice, setTokenWethPrice] = useState(new BigNumber(0));
  const { ethereum }: { ethereum: any } = useWallet();
  const fetchTokenWETHPrice = useCallback(async () => {
    if (!ethereum || !sashimiRouterContract || !lpAddress || !tokenAddress) {
      return;
    }
    if (tokenAddress.toLowerCase() === wethAddress.toLowerCase()) {
      setTokenWethPrice(new BigNumber(1));
    }

    const tokenAmountWholeLPPromise = sashimiRouterContract.methods
      .getTokenInPair(
        lpAddress,
        tokenAddress
      ).call();
    const lpContractWethPromise = sashimiRouterContract.methods
      .getTokenInPair(
        lpAddress,
        wethAddress
      ).call();

    const [tokenAmountWholeLP, lpContractWeth] = await Promise.all([tokenAmountWholeLPPromise, lpContractWethPromise]);

    setTokenWethPrice(new BigNumber(lpContractWeth).div(tokenAmountWholeLP));
  }, [ethereum, sashimiRouterContract, lpAddress, tokenAddress]);
  useEffect(() => {
    fetchTokenWETHPrice();
  }, [fetchTokenWETHPrice]);

  return tokenWethPrice;
};

export type IConverterOptions = {
  lpAddresses?: string[]
  pivotTokenAddresses?: string[]
};
export const useTokenWethPriceByRouterByConverter = (sashimiRouterContract: any, lpAddress: string, tokenAddress: string, options?: IConverterOptions): BigNumber => {
  const [tokenWethPrice, setTokenWethPrice] = useState(new BigNumber(0));
  const { ethereum }: { ethereum: any } = useWallet();
  const fetchTokenWETHPrice = useCallback(async () => {
    if (!ethereum || !sashimiRouterContract || !lpAddress || !tokenAddress) {
      return;
    }
    if (tokenAddress.toLowerCase() === wethAddress.toLowerCase()) {
      setTokenWethPrice(new BigNumber(1));
    }

    const tokenAmountWholeLPPromise = sashimiRouterContract.methods
      .getTokenInPair(
        lpAddress,
        tokenAddress
      ).call();

    let converterAmountWholeLPPromise = 0;
    let converterAmountInLpPromise = 0;
    let converterWethPromise = 0;
    if (options) {
      converterAmountWholeLPPromise = sashimiRouterContract.methods
        .getTokenInPair(
          options.lpAddresses[0],
          options.pivotTokenAddresses[0]
        ).call();
      converterWethPromise = sashimiRouterContract.methods
        .getTokenInPair(
          options.lpAddresses[0],
          wethAddress
        ).call();

      converterAmountInLpPromise = sashimiRouterContract.methods
        .getTokenInPair(
          lpAddress,
          options.pivotTokenAddresses[0]
        ).call();
    }

    const lpContractWethPromise = sashimiRouterContract.methods
      .getTokenInPair(
        lpAddress,
        wethAddress
      ).call();

    const [
      tokenAmountWholeLP, lpContractWeth,
      converterAmountWholeLP, converterWeth, converterAmountInLp
    ] = await Promise.all([
      tokenAmountWholeLPPromise, lpContractWethPromise,
      converterAmountWholeLPPromise, converterWethPromise, converterAmountInLpPromise
    ]);

    let converterWethPrice = new BigNumber(0);
    let tokenWethPrice = new BigNumber(0);
    if (options) {
      converterWethPrice = new BigNumber(converterWeth).div(converterAmountWholeLP);
      tokenWethPrice = new BigNumber(converterWethPrice).times(converterAmountInLp).div(tokenAmountWholeLP);
    } else {
      tokenWethPrice = new BigNumber(lpContractWeth).div(tokenAmountWholeLP);
    }

    // setTokenWethPrice(new BigNumber(lpContractWeth).div(tokenAmountWholeLP));
    setTokenWethPrice(tokenWethPrice);
  }, [ethereum, sashimiRouterContract, lpAddress, tokenAddress]);
  useEffect(() => {
    fetchTokenWETHPrice();
  }, [fetchTokenWETHPrice]);

  return tokenWethPrice;
};
