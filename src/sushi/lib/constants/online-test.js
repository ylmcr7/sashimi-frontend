export const contractAddresses = {
  sushi: {
    42: '0x0FE5dA8828f7F2dFa5cdf181461E0f2039d765f5',
    1: '0x0FE5dA8828f7F2dFa5cdf181461E0f2039d765f5', // aelf sashimi
  },
  sashimiBar: {
    42: '0xfaC2681cB05Ba08De504e7FDBc2186B22d868f2A',
    1: '0xDbAc04dE5ec2C3F9f404C2CA6aC56ab0C731E640', // staging
  },
  investment: {
    42: '0x46641A3aA421beA0207Ead6d807c847a2f599943',
    1: '0x3E91Db66FE94B28941A4B076B1CF9A80fFA1c036' // staging
  },
  masterChef: {
    42: '0xFC0F93aA4E79c0c5719ce8c74Cf33872F33a5c6E',
    1: '0xFC0F93aA4E79c0c5719ce8c74Cf33872F33a5c6E', // staging
  },
  weth: {
    42: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
}

export const supportedInvestmentPools = [
  {
    // CANDY - SASHIMI? pair
    lpAddresses: {
      42: '0x7c2580099eF4c34B788d3f3A192817f35dd68f8A',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA', // TODO: replace ETH-SASHIMI -> GOLFF-SASHIMI
    },
    depositAddresses: {
      42: '0xA050886815CFc52a24B9C4aD044ca199990B6690', // WETH in kovan, ERC20
      1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
    },
    depositTokenSymbol: 'WETH',
    tokenSymbol: 'GOLFF', // Which token will I get, when I do the harvest？
    icon: '👜',
    sashimiIndex: 1,
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
      42: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
      1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
    },
    tokenAddresses: {
      42: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
      1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    },
    name: 'USDC-ETH Party!',
    symbol: 'USDC-ETH UNI-V2 LP',
    tokenSymbol: 'WETH',
    icon: '🍣',
  },
  // Get Sashimi Price only.
  {
    pid: 102,
    lpAddresses: {
      42: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
      1: '0x4b618087DaE7765823BC47fFbF38C8Ee8489F5CA',
    },
    tokenAddresses: {
      42: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
      1: '0xC28E27870558cF22ADD83540d2126da2e4b464c2',
    },
    name: 'Sashimi Party!',
    symbol: 'SASHIMI-ETH UNI-V2 LP',
    tokenSymbol: 'SASHIMI',
    icon: '🍣',
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
