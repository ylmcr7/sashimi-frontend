export const contractAddresses = {
  sushi: {
    42: '0x4986843fde2b0dae6bdc54c8e16567614ea8786f',
    1: '0x4986843fde2b0dae6bdc54c8e16567614ea8786f', // aelf sashimi
  },
  sashimiBar: {
    42: '0x345Ce8Cf8b161aC7782B2316723140573E08901d',
    1: '0x345Ce8Cf8b161aC7782B2316723140573E08901d', // staging
  },
  sashimiRouter: {
    42: '0xe4FE6a45f354E845F954CdDeE6084603CEDB9410',
    1: '0xe4FE6a45f354E845F954CdDeE6084603CEDB9410'
  },
  investment: {
    42: '0xc16121A9e3fC61037ee83b4C4d0AE06ef92326A5',
    1: '0xc16121A9e3fC61037ee83b4C4d0AE06ef92326A5' // staging
  },
  masterChef: {
    42: '0x9e41322574f00232f4f092b8d29db11c46fe7496',
    1: '0x9e41322574f00232f4f092b8d29db11c46fe7496', // staging
  },
  weth: {
    42: '0xA050886815CFc52a24B9C4aD044ca199990B6690',
    1: '0xA050886815CFc52a24B9C4aD044ca199990B6690',
  },
}

export const supportedInvestmentPools = [
  {
    // CANDY - SASHIMI? pair
    // lpAddresses: {
    //   42: '0x965b23da5dc4f3fce4a4615376efde3b2a39716b',
    //   1: '0x965b23da5dc4f3fce4a4615376efde3b2a39716b', // TODO: replace ETH-SASHIMI -> GOLFF-SASHIMI
    // },
    // pivotLpAddresses: {
    //   42: '0x7c2580099eF4c34B788d3f3A192817f35dd68f8A',
    //   1: '0x9776a214272ab452f8c88c7576dcd0c6ffbfee14' // GOF-ETH
    // },
    // depositAddresses: {
    //   42: '0xA050886815CFc52a24B9C4aD044ca199990B6690', // WETH in kovan, ERC20
    //   1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
    // },
    // depositTokenSymbol: 'WETH',
    // tokenSymbol: 'GOF', // Which token will I get, when I do the harvest？
    // icon: '👜',
    // sashimiIndex: 1,
    // pivotTokenIndex: 0,
  },
  {
    // CANDY - SASHIMI? pair
    // lpAddresses: {
    //   42: '0x965b23da5dc4f3fce4a4615376efde3b2a39716b',
    //   1: '0x965b23da5dc4f3fce4a4615376efde3b2a39716b', // TODO: replace ETH-SASHIMI -> GOLFF-SASHIMI
    // },
    // pivotLpAddresses: {
    //   42: '0x7c2580099eF4c34B788d3f3A192817f35dd68f8A',
    //   1: '0x9776a214272ab452f8c88c7576dcd0c6ffbfee14' // GOF-ETH
    // },
    // depositAddresses: {
    //   42: '0xA050886815CFc52a24B9C4aD044ca199990B6690', // WETH in kovan, ERC20
    //   1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
    // },
    // depositTokenSymbol: 'WETH',
    // tokenSymbol: 'GOF', // Which token will I get, when I do the harvest？
    // icon: '👜',
    // sashimiIndex: 1,
    // pivotTokenIndex: 0,
  }
];
// These pools get 0 point; [type pid]
export const unStakeOnlyPools = [];
// If is xxx-Sashimi Pool; [type pid]
// Support sashimi pair only. Used in FarmCards.tsx
export const notETHPairPools = [];

export const hiddenPools = [101, 102];

export const doublePools = [0, 1];
export const unStakeOnlyDoublePools = [];

const xLPSupportedPools = [
  // xLP supported start
  {
    pid: 0,
    lpAddresses: {
      42: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
      1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
    },
    tokenAddresses: {
      42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    },
    lpBarAddresses: {
      42: '0xA696eE9d188938Baa655052bB8727fA8702E59EE',
      1: '0xA696eE9d188938Baa655052bB8727fA8702E59EE',
    },
    name: 'Double Sashimi Party 1!',
    symbol: 'USDC-ETH UNI-V2 LP 1',
    tokenSymbol: 'WETH',
    icon: '🍣',
  },
  {
    pid: 1,
    lpAddresses: {
      42: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
      1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
    },
    tokenAddresses: {
      42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    },
    lpBarAddresses: {
      42: '0x6e1B4632d83E5443F853Fe647AE671a6Ea8b35B6',
      1: '0x6e1B4632d83E5443F853Fe647AE671a6Ea8b35B6',
    },
    name: 'Double Sashimi Party 2!',
    symbol: 'USDC-ETH UNI-V2 LP 2',
    tokenSymbol: 'WETH',
    icon: '🍣',
  },
];

export const supportedPools = [
  ...xLPSupportedPools,
  {
    pid: 2,
    lpAddresses: {
      42: '0x965b23da5dc4f3fce4a4615376efde3b2a39716b',
      1: '0x965b23da5dc4f3fce4a4615376efde3b2a39716b',
    },
    tokenAddresses: {
      42: '0x4986843fde2b0dae6bdc54c8e16567614ea8786f',
      1: '0x4986843fde2b0dae6bdc54c8e16567614ea8786f',
    },
    name: 'SASHIMI-ETH Party!',
    symbol: 'SASHIMI-ETH UNI-V2 LP',
    tokenSymbol: 'SASHIMI',
    icon: '🍣',
  },
  {
    pid: 2,
    lpAddresses: {
      42: '0x14c584c0cc856232606356e98985c45e594122fc',
      1: '0x14c584c0cc856232606356e98985c45e594122fc',
    },
    // Can not get eth value now;
    tokenAddresses: {
      42: '0x4bedb4cff3b8ea0474f534838e767c11d6b311f2',
      1: '0x4bedb4cff3b8ea0474f534838e767c11d6b311f2',
    },
    name: 'DAI-USDT Party!',
    symbol: 'DAI-USDT UNI-V2 LP',
    tokenSymbol: 'DAI',
    icon: '🍣',
  },
  // Get Sashimi Price only.
  // {
  //   pid: 102,
  //   lpAddresses: {
  //     42: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
  //     1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
  //   },
  //   tokenAddresses: {
  //     42: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
  //     1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
  //   },
  //   name: 'Sashimi Party!',
  //   symbol: 'SASHIMI-ETH UNI-V2 LP',
  //   tokenSymbol: 'SASHIMI',
  //   icon: '🍣',
  // },
  // UNI, Hidden
  // {
  //   pid: 101,
  //   lpAddresses: {
  //     42: '0xd3d2e2692501a5c9ca623199d38826e513033a17',
  //     1: '0xd3d2e2692501a5c9ca623199d38826e513033a17', // 0x00 actual
  //   },
  //   tokenAddresses: {
  //     42: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  //     1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', // 0x00 actual
  //   },
  //   name: 'Hidden',
  //   symbol: 'Hidden',
  //   tokenSymbol: 'UNI',
  //   icon: '🔥',
  // },
];
