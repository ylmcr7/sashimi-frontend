export const contractAddresses = {
  sushi: {
    42: '0x89d5F2E52D36b85e72e25e8fE46d709D445c03Fc', // aelf sushi new one 9.9
    1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2', // aelf sashimi
  },
  sashimiBar: {
    42: '0xfaC2681cB05Ba08De504e7FDBc2186B22d868f2A', // aelf sushi new one 9.18
    1: '0x6ed306DbA10E6c6B20BBa693892Fac21f3B91977', // aelf sashimi
  },
  sashimiRouter: {
    42: '0xe4FE6a45f354E845F954CdDeE6084603CEDB9410',
    1: '0xe4FE6a45f354E845F954CdDeE6084603CEDB9410'
  },
  investment: {
    42: '0xC380130F2b3Fa820CE3d1092FDDBf0dA732D13C9',
    1: '0x4ce106235B6d876c66117fdA1f6025E3Fb87D3ec'
  },
  masterChef: {
    42: '0x042036D6F0b5C246aA07Dd9688b46cf86Bd179C3', // aelf sushi new one 9.9
    1: '0x1daed74ed1dd7c9dabbe51361ac90a69d851234d', // aelf master
  },
  weth: {
    42: '0xA050886815CFc52a24B9C4aD044ca199990B6690', // aelf sushi
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // sushi use
  },
}

export const supportedInvestmentPools = [
  {
    lpAddresses: {
      42: '0x7c2580099eF4c34B788d3f3A192817f35dd68f8A',
      1: '0x4b618087dae7765823bc47ffbf38c8ee8489f5ca', // WETH-SASHIMI
    },
    pivotLpAddresses: {
      42: '0x7c2580099eF4c34B788d3f3A192817f35dd68f8A',
      1: '0x9776a214272ab452f8c88c7576dcd0c6ffbfee14' // GOF-ETH
    },
    depositAddresses: {
      42: '0xA050886815CFc52a24B9C4aD044ca199990B6690', // WETH in kovan, ERC20
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
    },
    providerAddresses: {
      42: '0xeC0C65A04b985F1F162F13E7Df667bBF4804B621',
      1: '0xeC0C65A04b985F1F162F13E7Df667bBF4804B621'
    },
    depositTokenSymbol: 'WETH',
    tokenSymbol: 'GOF', // GOLFF // The token you get
    icon: '👜',
    sashimiIndex: 1,
    pivotTokenIndex: 0,
  },
  {
    lpAddresses: {
      42: '0xb819c827a0dc04e403099310317bd75b8a0a43fa',
      // 1: '0xaf46c4cf1cb2a669ce2f7bc1e7a53f0da8c7c574', // HT-SASHIMI UNI LP
      1: '0x4b618087dae7765823bc47ffbf38c8ee8489f5ca', // WETH-SASHIMI UNI LP
      // 1: '0xceea282be8da0f3f4b2bc57bfd89f4b7dd4454b1', // HT-SASHIMI SALP
    },
    pivotLpAddresses: {
      42: '0x7c2580099eF4c34B788d3f3A192817f35dd68f8A',
      1: '0x9776a214272ab452f8c88c7576dcd0c6ffbfee14' // GOF-ETH
    },
    depositAddresses: {
      42: '0x0FE180FC7548efbc2dEe32Eb208403639a01aaa5', // WETH in kovan, ERC20
      1: '0x6f259637dcd74c767781e37bc6133cd6a68aa161' // Huobi
    },
    providerAddresses: {
      42: '0x9492d7d2CB08EEF7C825a8199a4704056C808518',
      1: '0x9492d7d2CB08EEF7C825a8199a4704056C808518'
    },
    depositTokenSymbol: 'HT',
    tokenSymbol: 'GOF', // GOLFF // The token you get
    icon: '👝',
    sashimiIndex: 1,
    pivotTokenIndex: 0,
  },
  {
    lpAddresses: {
      42: '0xb819c827a0dc04e403099310317bd75b8a0a43fa',
      1: '0x4b618087dae7765823bc47ffbf38c8ee8489f5ca', // WETH-SASHIMI UNI LP
    },
    pivotLpAddresses: {
      42: '0x7c2580099eF4c34B788d3f3A192817f35dd68f8A',
      1: '0x9776a214272ab452f8c88c7576dcd0c6ffbfee14' // GOF-ETH
    },
    depositAddresses: {
      42: '0x6b175474e89094c44da98b954eedeac495271d0f',
      1: '0x6b175474e89094c44da98b954eedeac495271d0f' // DAI
    },
    // TODO: waiting contract deploy
    providerAddresses: {
      // 42: '0x9492d7d2CB08EEF7C825a8199a4704056C808518',
      // 1: '0x9492d7d2CB08EEF7C825a8199a4704056C808518'
      42: '',
      1: ''
    },
    depositTokenSymbol: 'DAI',
    tokenSymbol: 'GOF', // GOLFF // The token you get
    icon: '🧳',
    sashimiIndex: 1,
    pivotTokenIndex: 0,
  }

];
// These pools get 0 point; [type pid]
export const unStakeOnlyPools = [0, 1, 3, 4, 5, 6, 8, 13, 14, 15, 16, 18, 19, 20, 21, 25];
// If is xxx-Sashimi Pool; [type pid]
// Support sashimi pair only. Used in FarmCards.tsx
export const notETHPairPools = [10, 12, 13, 14, 15, 16, 22, 23, 24, 30];

export const hiddenPools = [101];

export const doublePools = [26, 27, 28, 29, 101];
export const unStakeOnlyDoublePools = [];

export const waitingInfo = {
  waitingPool: [2, 34],
  // startTime: 1601479800000
  startTime: 1601559000000
};

// 0928 UNI LP
const xLPSupportedPools = [
  // xLP supported start
  {
    pid: 26,
    lpAddresses: {
      42: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
    },
    tokenAddresses: {
      42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    },
    lpBarAddresses: {
      42: '0xE835db5C6145f6AC2CD1f697C271bcab022766Ad',
      1: '0xE835db5C6145f6AC2CD1f697C271bcab022766Ad',
    },
    name: 'Double happiness!',
    symbol: '\xa0DAI-ETH UNI-V2 LP', // and blank to make it different with the normal farm symbol
    tokenSymbol: 'WETH',
    icon: '🍗',
  },
  // 0925
  {
    pid: 27,
    lpAddresses: {
      42: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
      1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    },
    tokenAddresses: {
      42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    },
    lpBarAddresses: {
      42: '0xD4F7CA1e212c5203074ECD9912dD803426eF4e10',
      1: '0xD4F7CA1e212c5203074ECD9912dD803426eF4e10',
    },
    name: 'Double happiness!',
    symbol: '\xa0USDC-ETH UNI-V2 LP', // and blank to make it different with the normal farm symbol
    tokenSymbol: 'WETH',
    icon: '🍖',
  },
  {
    pid: 28,
    lpAddresses: {
      42: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
      1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
    },
    tokenAddresses: {
      42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    },
    lpBarAddresses: {
      42: '0x9EC7De79572312d00f536b856B9E6fE7d0a37AF1',
      1: '0x9EC7De79572312d00f536b856B9E6fE7d0a37AF1',
    },
    name: 'Double happiness!',
    symbol: '\xa0ETH-USDT UNI-V2 LP', // and blank to make it different with the normal farm symbol
    tokenSymbol: 'WETH',
    icon: '🥩',
  },
  {
    pid: 29,
    lpAddresses: {
      42: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
      1: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
    },
    tokenAddresses: {
      42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    },
    lpBarAddresses: {
      42: '0xc8b5B728165F5e59690bA486e4086027f34635Bd',
      1: '0xc8b5B728165F5e59690bA486e4086027f34635Bd',
    },
    name: 'Double happiness!',
    symbol: '\xa0WBTC-ETH UNI-V2 LP', // and blank to make it different with the normal farm symbol
    tokenSymbol: 'WETH',
    icon: '🥓',
  },
];

const newNormalPool0939 = [
  {
    pid: 34,
    lpAddresses: {
      42: '0x001e091D98aC592a13Bf2eF4e727044E9824C1f5',
      1: '0x001e091D98aC592a13Bf2eF4e727044E9824C1f5',
    },
    tokenAddresses: {
      42: '0x88ef27e69108b2633f8e1c184cc37940a075cc02',
      1: '0x88ef27e69108b2633f8e1c184cc37940a075cc02',
    },
    name: 'LEGO in the DeFi!',
    symbol: 'DEGO-ETH SALP LP',
    tokenSymbol: 'DEGO',
    icon: '🧑‍🦱',
  },
  {
    pid: 2,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x51214310ac356b26df2a9caf3895398e533c4fa9',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Donald DAI',
    symbol: 'DAI-ETH SALP LP',
    tokenSymbol: 'DAI',
    icon: '🦆',
  },
];

const newNormalPools = [
  {
    pid: 30,
    lpAddresses: {
      42: '0x96559937e9c4475160CA040b16cDA93E3EfBD75A',
      1: '0x96559937e9c4475160CA040b16cDA93E3EfBD75A',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'GAT love SASHIMI!',
    symbol: 'GAT-SASHIMI SALP LP',
    tokenSymbol: 'GAT',
    icon: '🍭',
  },
  {
    pid: 31,
    lpAddresses: {
      42: '0xd16d65266A65F6b149dE2849a1a36fe54693aD48',
      1: '0xd16d65266A65F6b149dE2849a1a36fe54693aD48',
    },
    tokenAddresses: {
      42: '0x687174f8c49ceb7729d925c3a961507ea4ac7b28',
      1: '0x687174f8c49ceb7729d925c3a961507ea4ac7b28',
    },
    name: 'Global Awards Token!',
    symbol: 'GAT-ETH SALP LP',
    tokenSymbol: 'GAT',
    icon: '🍯',
  },
  {
    pid: 32,
    lpAddresses: {
      42: '0xC57D7265f0e5239afe37c4167acF027747efD752',
      1: '0xC57D7265f0e5239afe37c4167acF027747efD752',
    },
    tokenAddresses: {
      42: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
      1: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
    },
    name: 'Huobi Token!',
    symbol: 'HT-ETH SALP LP',
    tokenSymbol: 'HT',
    icon: '🥜',
  },
  {
    pid: 33,
    lpAddresses: {
      42: '0xE24b430952bdB793B0E6753D14C4FEC9B8A41813',
      1: '0xE24b430952bdB793B0E6753D14C4FEC9B8A41813',
    },
    tokenAddresses: {
      42: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    },
    name: 'Uniswap!',
    symbol: 'UNI-ETH SALP LP',
    tokenSymbol: 'UNISWAP',
    icon: '🦄',
  }
];

// 0928 Normal Farm -> SASHIMI LP
export const supportedPools = [
  ...xLPSupportedPools,
  // xLP supported end
  {
    pid: 9,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x3fa4b0b3053413684d0b658689ede7907bb4d69d',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'Sashimi Party!',
    symbol: 'SASHIMI-ETH SALP LP',
    tokenSymbol: 'SASHIMI',
    icon: '🍣',
  },
  ...newNormalPool0939,
  ...newNormalPools,
  // 0917
  {
    pid: 22,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xCEea282be8Da0F3F4b2Bc57bFd89F4b7Dd4454b1',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'HT love Sashimi!',
    symbol: 'HT-SASHIMI SALP LP',
    tokenSymbol: 'Huobi Token',
    icon: '🥂',
  },
  {
    pid: 23,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x5dB60350383433F53147101e3E6cE1D5193c5671',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'USDT love Sashimi!',
    symbol: 'USDT-SASHIMI SALP LP',
    tokenSymbol: 'USDT',
    icon: '🍻',
  },
  {
    pid: 24,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x81e23D17f07D4D95Dcb9FD070b44332D2f34A874',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'USDC love Sashimi!',
    symbol: 'USDC-SASHIMI SALP LP',
    tokenSymbol: 'USDC',
    icon: '🍷',
  },

  // old
  {
    pid: 10,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xf7ba0272e5bdd4911c1baedb362700652959edaf',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'elf love Sashimi!🧝🍱',
    symbol: 'SASHIMI-ELF SALP LP',
    tokenSymbol: 'ELF',
    icon: '🍱',
  },
  {
    pid: 25,
    lpAddresses: {
      42: '0xd9f91070371987eee3e500e90de5333e0c43d031',
      1: '0xbD61299162735Bc01C56eA295776BfF4A03E4a46',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'MX!',
    symbol: 'MXC-ETH SALP LP',
    tokenSymbol: 'MXC',
    icon: '🌱'
  },
  // SASHIMI new
  {
    pid: 12,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x2b773b3db41971c069f79c257ab60bdc8bd1ae5f',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'GT love Sashimi!',
    symbol: 'GT-SASHIMI SALP LP',
    tokenSymbol: 'Gate Token',
    icon: '🍙',
  },
  {
    pid: 13,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xcf2bf14f541b98a36128f1021faadf22f475dd3e',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'LRC love Sashimi!',
    symbol: 'LRC-SASHIMI SALP LP',
    tokenSymbol: 'LRC',
    icon: '🍘',
  },
  {
    pid: 14,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xcc6a812a1deb467763d4cb42d7100d7ecadf752d',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'KNC love Sashimi!',
    symbol: 'KNC-SASHIMI SALP LP',
    tokenSymbol: 'KNC',
    icon: '🍥',
  },
  {
    pid: 15,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x9e8d793671bbdf376703eabff4251f3085fa1ef1',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'REN love Sashimi!',
    symbol: 'REN-SASHIMI SALP LP',
    tokenSymbol: 'REN',
    icon: '🥠',
  },
  {
    pid: 16,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x010f098d4b7e925c9490a901b52665676ced5580',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'YFII love Sashimi!',
    symbol: 'YFII-SASHIMI SALP LP',
    tokenSymbol: 'YFII',
    icon: '🦪',
  },
  // SASHIMI End

  // New ETH
  {
    pid: 17,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xb9f8077fe932e96a8572652feee35609c2809850',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xe66747a101bff2dba3697199dcce5b743b454759',
    },
    name: 'Gate Token',
    symbol: 'GT-ETH SALP LP',
    tokenSymbol: 'GT',
    icon: '🍝',
  },
  {
    pid: 18,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x2881d04e1211aed648d3fd94a76e902a29280027',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
    },
    name: 'LRC',
    symbol: 'LRC-ETH SALP LP',
    tokenSymbol: 'LRC',
    icon: '🍜',
  },
  {
    pid: 19,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xBDE0CDAB0a66378a400D2f5E3fdE0de29A11ED56',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
    },
    name: 'KNC',
    symbol: 'KNC-ETH SALP LP',
    tokenSymbol: 'KNC',
    icon: '🍲',
  },
  {
    pid: 20,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xf066f1dd4d7c0392eb7633b2c777644e09f0d3fb',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0x408e41876cccdc0f92210600ef50372656052a38',
    },
    name: 'REN',
    symbol: 'REN-ETH SALP LP',
    tokenSymbol: 'REN',
    icon: '🍛',
  },
  {
    pid: 21,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x55493cbe3aea30e6dcdffc70a736d82ed026d9e0',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
    },
    name: 'YFII',
    symbol: 'YFII-ETH SALP LP',
    tokenSymbol: 'YFII',
    icon: '🍳',
  },

  // ETH Start
  {
    pid: 7,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x28E240E04113877Bf99354E1E4f43a79E59c535A',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e',
    },
    name: 'elf garden 🧝🧝‍♂️🧝‍♀',
    symbol: 'ELF-ETH SALP LP',
    tokenSymbol: 'ELF',
    icon: '🧝',
  },
  {
    pid: 8,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x04d7eecd7decfc5cc335e4ba5fb6bb09a581be01',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    },
    name: 'BTC Satoshi',
    symbol: 'WBTC-ETH SALP LP',
    tokenSymbol: 'WBTC',
    icon: '₿',
  },

  // Others
  {
    pid: 0,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x490ccb3c835597ff31e525262235487f9426312b',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Tether Turtle',
    symbol: 'USDT-ETH SALP LP',
    tokenSymbol: 'USDT',
    icon: '🐢',
  },
  {
    pid: 1,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x64a9D29305b9847cEEE21558d3Ce1f8E85Ee4496',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Circle Snail',
    symbol: 'USDC-ETH SALP LP',
    tokenSymbol: 'USDC',
    icon: '🐌',
  },
  {
    pid: 3,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x18492965eef77d1a101d77a394c32178090e98a6',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'YFI Whale',
    symbol: 'YFI-ETH SALP LP',
    tokenSymbol: 'YFI',
    icon: '🐋',
  },
  {
    pid: 4,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x6ab539Bffd571AEE39D6EAeD50BA79D3627E2055',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    },
    name: 'Aave Boar',
    symbol: 'LEND-ETH SALP LP',
    tokenSymbol: 'LEND',
    icon: '🐗',
  },
  {
    pid: 5,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0xde1621bc3e8be5927e8a8be068cea62f74f876ce',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'Toadie Marine',
    symbol: 'LINK-ETH SALP LP',
    tokenSymbol: 'LINK',
    icon: '🐸',
  },
  {
    pid: 6,
    lpAddresses: {
      42: '0xb21f5d46e1756cfeb34496636d38f97dc8552415',
      1: '0x4e8Efbb0627d6816FE93A94430ed4b1e831FE4a1',
    },
    tokenAddresses: {
      42: '0xf2c73AF42FbAC096FE8F591899C5fc8bCB13884B',
      1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    name: 'Synthetic Snake',
    symbol: 'SNX-ETH SALP LP',
    tokenSymbol: 'SNX',
    icon: '🐍',
  },
  // Burn
  {
    pid: 11,
    lpAddresses: {
      42: '0x0000000000000000000000000000000000000000',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA', // 0x00 actual
    },
    tokenAddresses: {
      42: '0x0000000000000000000000000000000000000000',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2', // 0x00 actual
    },
    name: 'Reduce Mint',
    symbol: 'Nothing',
    tokenSymbol: 'SASHIMI',
    icon: '🔥',
  },
  // UNI, Hidden
  {
    pid: 101,
    lpAddresses: {
      42: '0xd3d2e2692501a5c9ca623199d38826e513033a17',
      1: '0xd3d2e2692501a5c9ca623199d38826e513033a17', // 0x00 actual
    },
    tokenAddresses: {
      42: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', // 0x00 actual
    },
    name: 'Hidden',
    symbol: 'Hidden',
    tokenSymbol: 'UNI',
    icon: '🔥',
  },
];
