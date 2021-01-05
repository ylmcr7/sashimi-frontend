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

    const tokenAmountWholeLP = await sashimiRouterContract.methods
      .getTokenInPair(
        lpAddress,
        tokenAddress
      ).call();
    const lpContractWeth = await sashimiRouterContract.methods
      .getTokenInPair(
        lpAddress,
        wethAddress
      ).call();

    setTokenWethPrice(new BigNumber(lpContractWeth).div(tokenAmountWholeLP));
  }, [ethereum, sashimiRouterContract, lpAddress, tokenAddress]);
  useEffect(() => {
    fetchTokenWETHPrice();
  }, [fetchTokenWETHPrice]);

  return tokenWethPrice;
};
