import * as testKovan from './constants/test-kovan';
import * as online from './constants/online';
import * as onlineTest from './constants/online-test';

const CHAIN_ENV = process.env.REACT_APP_CHAIN_ENV || 'main';

const output = {
  main: online,
  kovan: testKovan,
  'online-test': onlineTest
};

const WEI_UNIT_DECIMAL = {
  mwei: 6,
  ether: 18
};

export const {
  contractAddresses,
  supportedInvestmentPools,
  unStakeOnlyPools,
  notETHPairPools,
  hiddenPools,
  doublePools,
  unStakeOnlyDoublePools,
  supportedPools,
  waitingInfo,
  // vaultController,
  vaults,
  vaultAPYAPI,
  vaultStableTokenPriceAPI,
  tokenPriceAPI,
  weiUnitDecimal
} = {
  ...output[CHAIN_ENV],
  weiUnitDecimal: WEI_UNIT_DECIMAL
};
