import { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

import useBlock from './useBlock'

// demo
// {
//     "msg": "success",
//     "code": 0,
//     "data": [
//         {
//             "APY": "1769.40",
//             "key": "WETH-Candy"
//         },
//         {
//             "APY": "7464032960289.86",
//             "key": "XYZ-GOLFF"
//         }
//     ]
// }
interface investmentAPY {
  APY: string,
  key: string
}
export const useInvestmentAPYs = (blockPivot = 0) => {
  const [investmentAPYs, setInvestmentAPYs] = useState([]);

  const block = useBlock();
  blockPivot += block % 10 === 0 ? 1 : 0;

  const fetchAPY = useCallback(async () => {
    try {
      const result: any = await axios.get('/api/invest/getAPY');
      setInvestmentAPYs(result.data as investmentAPY[]);
    } catch(e) {
      console.log('fetchAPY error: ', e);
    }
  }, [blockPivot]);

  useEffect(() => {
    fetchAPY()
  }, []);

  return investmentAPYs
};
