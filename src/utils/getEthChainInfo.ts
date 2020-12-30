const CHAIN_ENV: string = process.env.REACT_APP_CHAIN_ENV || 'main';

interface CHAIN_INFO {
  chainId: number,
  rpcUrl: string,
  ethscanType: string,
  exploreURL: string,
  stakingPool: string
}

const CHAIN_ENV_MAP: any = {
  main: {
    chainId: 1,
    rpcUrl: 'https://mainnet.eth.aragon.network/',
    ethscanType: '',
    exploreURL: 'https://etherscan.io',
    stakingPool: '0x1DaeD74ed1dD7C9Dabbe51361ac90A69d851234D'
  },
  'online-test': {
    chainId: 1,
    rpcUrl: 'https://mainnet.eth.aragon.network/',
    ethscanType: '',
    exploreURL: 'https://etherscan.io',
    stakingPool: '0x1DaeD74ed1dD7C9Dabbe51361ac90A69d851234D'
  },
  'heco-test': {
    chainId: 256,
    rpcUrl: 'https://http-testnet.hecochain.com',
    ethscanType: '',
    exploreURL: 'https://scan-testnet.hecochain.com',
    stakingPool: '0x130989912317e155189a522beaf63cb80bc69e72'
  },
  heco: {
    chainId: 128,
    rpcUrl: 'https://http-mainnet.hecochain.com',
    ethscanType: '',
    exploreURL: 'https://scan.hecochain.com',
    stakingPool: '0x06c7b472261f788634b62214adbb6d26795d85f9'
  },
  kovan: {
    chainId: 42,
    rpcUrl: 'https://kovan.infura.io/',
    ethscanType: 'kovan.',
    exploreURL: 'https://kovan.etherscan.io',
    stakingPool: '0x1DaeD74ed1dD7C9Dabbe51361ac90A69d851234D'
  }
};

export function getEthChainInfo(): CHAIN_INFO {
  return CHAIN_ENV_MAP[CHAIN_ENV];
}
