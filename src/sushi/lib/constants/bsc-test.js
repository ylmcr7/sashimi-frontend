export const contractAddresses = {
  sushi: {
    42: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1', // aelf sushi new one 9.9
    1: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1', // aelf sashimi
    97: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1', // aelf sashimi bsc testnet
    56: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1', // aelf sashimi bsc mainnet
  },
  // useless in heco & bsc
  sashimiBar: {
    42: '0xfaC2681cB05Ba08De504e7FDBc2186B22d868f2A', // aelf sushi new one 9.18
    1: '0x6ed306DbA10E6c6B20BBa693892Fac21f3B91977', // aelf sashimi
    97: '0x6ed306DbA10E6c6B20BBa693892Fac21f3B91977', // aelf sashimi
    56: '0x6ed306DbA10E6c6B20BBa693892Fac21f3B91977', // aelf sashimi
  },
  sashimiRouter: {
    42: '0xb3598412392a422970D02Bd68B2Cd8eAeb41fCf3',
    1: '0xb3598412392a422970D02Bd68B2Cd8eAeb41fCf3',
    97: '0xb3598412392a422970D02Bd68B2Cd8eAeb41fCf3',
    56: '0xb3598412392a422970D02Bd68B2Cd8eAeb41fCf3',
  },
  // useless in heco & bsc
  investment: {
    42: '0x3F966FA1c0606e19047ed72068D2857677E07EF4',
    1: '0x3F966FA1c0606e19047ed72068D2857677E07EF4',
    97: '0x3F966FA1c0606e19047ed72068D2857677E07EF4',
    56: '0x3F966FA1c0606e19047ed72068D2857677E07EF4',
  },
  masterChef: {
    42: '0x0449dF5a5e69D61584dd6A6b486a5cF5E33EC1ED', // aelf sushi new one 9.9
    1: '0x0449dF5a5e69D61584dd6A6b486a5cF5E33EC1ED', // aelf master
    97: '0x0449dF5a5e69D61584dd6A6b486a5cF5E33EC1ED', // aelf master
    56: '0x0449dF5a5e69D61584dd6A6b486a5cF5E33EC1ED', // aelf master
  },
  // WHT for heco, WBNB for bsc
  weth: {
    42: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // aelf sushi
    1: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // sushi use
    97: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // sushi use
    56: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // sushi use
  },
}

export const supportedInvestmentPools = [];
// These pools get 0 point; [type pid]
export const unStakeOnlyPools = [];
// If is xxx-Sashimi Pool; [type pid]
// Support sashimi pair only. Used in FarmCards.tsx
export const notETHPairPools = [];

export const hiddenPools = [];

export const doublePools = [];
export const unStakeOnlyDoublePools = [];

const getWaitingPools = (start, end) => {
  const array = [];
  for (let i = 0; i <= end - start; i++) {
    array.push(start + i);
  }
  return array;
};
export const waitingInfo = {
  waitingPool: getWaitingPools(10, 10),
  startTime: 1619232713763
};

// 0928 Normal Farm -> SASHIMI LP
export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      42: '0x4dbCb8BC649d9ef27Aa00daE17d13C9bE8dC8416',
      1: '0x4dbCb8BC649d9ef27Aa00daE17d13C9bE8dC8416',
      97: '0x4dbCb8BC649d9ef27Aa00daE17d13C9bE8dC8416',
      56: '0x4dbCb8BC649d9ef27Aa00daE17d13C9bE8dC8416',
    },
    tokenAddresses: {
      42: '0x86b8AC6E084B8fF4E851716Ca8c3F8E5BAdb099e',
      1: '0x86b8AC6E084B8fF4E851716Ca8c3F8E5BAdb099e',
      97: '0x86b8AC6E084B8fF4E851716Ca8c3F8E5BAdb099e', // ETH
      56: '0x86b8AC6E084B8fF4E851716Ca8c3F8E5BAdb099e',
    },
    name: 'ETH-BNB',
    symbol: 'ETH-BNB SALP',
    tokenSymbol: 'ETH',
    icon: '🍎',
  },
  {
    pid: 1,
    lpAddresses: {
      42: '0x9B73498a5b2eD5f5Eb28f7859ee04bF2A505EBfB',
      1: '0x9B73498a5b2eD5f5Eb28f7859ee04bF2A505EBfB',
      97: '0x9B73498a5b2eD5f5Eb28f7859ee04bF2A505EBfB',
      56: '0x9B73498a5b2eD5f5Eb28f7859ee04bF2A505EBfB',
    },
    tokenAddresses: {
      42: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1',
      1: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1',
      97: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1', // sashimi
      56: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1',
    },
    name: 'Sashimi Party!',
    symbol: 'SASHIMI-BNB SALP LP',
    tokenSymbol: 'SASHIMI',
    icon: '🍣',
  },
  // {
  //   pid: 1,
  //   lpAddresses: {
  //     42: '0xdcd6A829a705D2f022432C1A2B6532101FA37B27',
  //     1: '0xdcd6A829a705D2f022432C1A2B6532101FA37B27',
  //     97: '0xdcd6A829a705D2f022432C1A2B6532101FA37B27',
  //     56: '0xdcd6A829a705D2f022432C1A2B6532101FA37B27',
  //   },
  //   tokenAddresses: {
  //     42: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1',
  //     1: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1',
  //     97: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1',
  //     56: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1',
  //   },
  //   name: 'Sashimi Party!',
  //   symbol: 'HT-SASHIMI SALP LP',
  //   tokenSymbol: 'SASHIMI',
  //   icon: '🍣',
  // },
  // {
  //   pid: 0,
  //   lpAddresses: {
  //     42: '0xC55Eb93e887D283d3616eC47e4c783Ad57b5Dab0',
  //     1: '0xC55Eb93e887D283d3616eC47e4c783Ad57b5Dab0',
  //     97: '0xC55Eb93e887D283d3616eC47e4c783Ad57b5Dab0',
  //     56: '0xC55Eb93e887D283d3616eC47e4c783Ad57b5Dab0',
  //   },
  //   tokenAddresses: {
  //     42: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1',
  //     1: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1',
  //     97: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1',
  //     56: '0xFCB644FF1872412bff732dE4F2EBB5fa4F27f0C1',
  //   },
  //   // uniV2Pivot && uniV2LPAddress && sashimiPlateInfo,sashimiPlateInfo.type=10
  //   // eg. you can get apy from pairs like ELF-USDT through ETH-USDT.
  //   uniV2Pivot: true,
  //   uniV2LPAddress: '0xdcd6A829a705D2f022432C1A2B6532101FA37B27', // HT(WHT)-DAI SALP
  //   sashimiPlateInfo: {
  //     mainTokenIndex: 1, // eg. DAI-ETH, DAI-> 0, ETH-DAI, DAI-> 1
  //     tokensDecimal: [18, 18],
  //     type: 10, // for normal pool
  //   },
  //
  //   name: 'HUSD-Sashimi',
  //   symbol: 'HUSD-Sashimi SALP LP',
  //   tokenSymbol: 'HUSd',
  //   icon: '🍌',
  // },
  // {
  //   pid: 2,
  //   lpAddresses: {
  //     42: '0x600e1e3dcf1a5dec900c0de66bc541bc07c438ce',
  //     1: '0x600e1e3dcf1a5dec900c0de66bc541bc07c438ce',
  //     97: '0x600e1e3dcf1a5dec900c0de66bc541bc07c438ce',
  //     56: '0x600e1e3dcf1a5dec900c0de66bc541bc07c438ce',
  //   },
  //   tokenAddresses: {
  //     42: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
  //     1: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
  //     97: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
  //     56: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd',
  //   },
  //   name: 'HT-ETH',
  //   symbol: 'HT-ETH SALP',
  //   tokenSymbol: 'ETH',
  //   icon: '🍎',
  // },
];

// Vault
// TODO: replace
export const vaultController = '0x3884eab512bB0475100997271EC83163DAa944AE';
export const vaults = [];

export const vaultStableTokenPriceAPI = 'http://39.98.34.153:8081/api/price';
