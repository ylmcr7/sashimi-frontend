import { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

import useBlock from '../useBlock';
import { vaultAPYAPI } from '../../sushi/lib/constants';

// demo
// {
//   "USDT": "0",
//   "USDC": "0",
//   "DAI": "52.19636365587544286",
//   "WBTC": "0"
// }

export const useVaultsAPY = () => {
  const [vaultsAPY, setVaultsAPYs] = useState({
    "USDT": "0",
    "USDC": "0",
    "DAI": "0",
    "WBTC": "0"
  } as any);

  const block = useBlock();

  const fetchAPY = useCallback(async () => {
    if (block % 6 === 0) {
    // time++;
      try {
        const result: any = await axios.get(vaultAPYAPI);
        if (result.data) {
          setVaultsAPYs(result.data);
        }
        console.log('vaultsAPY time: ', result.data);
      } catch(e) {
        console.log('fetchAPY error: ', e);
      }
    }
  }, [block]);

  useEffect(() => {
    fetchAPY()
  }, [fetchAPY, block]);

  return vaultsAPY
};
