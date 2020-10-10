import React, {useEffect, useState, useCallback} from 'react'
import styled from 'styled-components'

import chef from '../../assets/img/chef.png'

import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'

import CardContent from "../../components/CardContent";
import Label from "../../components/Label";
import Value from "../../components/Value";
import Card from "../../components/Card";

import TokenPanel from "./components/TokenPanel";

import {vaults} from '../../sushi/lib/constants';

import './Vault.less';
import {useVaultsAPY} from "../../hooks/vault/useVaultsAPY";
import {useVaultsStableTokenPrice} from "../../hooks/vault/useVaultsStableTokenPrice";
import {getVaultContract, getVaultTotalBalance, getVaultUserBalance} from "../../utils/vault";
import {provider} from "web3-core";
import {useWallet} from "use-wallet";
import useBlock from "../../hooks/useBlock";
import BigNumber from "bignumber.js";


const weiUnitDecimal = {
  mwei: 6,
  ether: 18
};

interface Vault {
  tokenName: string,
  vaultAddr: string,
  stableCoinAddr: string,
  wei: keyof typeof weiUnitDecimal,
}

const Vault: React.FC = () => {

  const vaultsAPY = useVaultsAPY();
  const vaultsStableTokenPrice = useVaultsStableTokenPrice();
  console.log('vaultsAPY: ', vaultsAPY, vaultsStableTokenPrice);

  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet();
  const block = useBlock();

  const [totalStableValue, setTotalStableValue] = useState(new BigNumber(0));
  const [totalUserStableValue, setUserTotalStableValue] = useState(new BigNumber(0));
  // TODO: refactor
  // const [userStableValueList, setUserStableValueList] = useState([]);

  const fetchTotalStakingValue = useCallback(async () => {
    console.log('stablesBalance 2222:', ethereum);
    if (ethereum) {
      const vaultsContract = vaults.map((vault: any) => getVaultContract(ethereum, vault.vaultAddr));

      const stablesBalance = await Promise.all(vaultsContract.map((vaultContract: any) => {
        return getVaultTotalBalance(vaultContract, account);
      }));

      // TODO: refactor
      let totalStakingValue = new BigNumber(0);
      vaults.forEach((vault: Vault, index: number) => {
        const balance = (new BigNumber(stablesBalance[index] as string)).div(10 ** weiUnitDecimal[vault.wei]);
        const unitDollarValue = new BigNumber(vaultsStableTokenPrice[vault.tokenName]);
        totalStakingValue = totalStakingValue.plus(balance.times(unitDollarValue));
      });

      const stablesUserBalance = await Promise.all(vaultsContract.map((vaultContract: any) => {
        return getVaultUserBalance(vaultContract, account);
      }));
      let totalUserValue = new BigNumber(0);
      vaults.forEach((vault: Vault, index: number) => {
        const balance = (new BigNumber(stablesUserBalance[index] as string)).div(10 ** weiUnitDecimal[vault.wei]);
        const unitDollarValue = new BigNumber(vaultsStableTokenPrice[vault.tokenName]);
        totalUserValue = totalUserValue.plus(balance.times(unitDollarValue));
      });

      setTotalStableValue(totalStakingValue);
      setUserTotalStableValue(totalUserValue);
    }
  }, [block, vaultsStableTokenPrice, ethereum]);

  useEffect(() => {
    fetchTotalStakingValue();
  }, [fetchTotalStakingValue]);

  return (
    <>
      <PageHeader
        icon={<img src={chef} height="120" alt="Sashimi" />}
        subtitle={'Welcome to the Sashimi Vault, stake token to earn token.'}
        title='Sashimi Vault(Beta)'
      />
      <StyleSubTitle>
        <a
          target="_blank"
          href="https://etherscan.io/address/0x6ed306DbA10E6c6B20BBa693892Fac21f3B91977">
          Click To Review The Contract
        </a>
      </StyleSubTitle>

      <StyledWrapper>
        <StyledCard>
          <CardContent>
            <StyledBalances>
              <StyledBalance>
                <div style={{ flex: 1 }}>
                  <Label text="Total Staking Value" />
                  <Value
                    value={ethereum ? `$${totalStableValue.toNumber().toLocaleString('currency', {
                      minimumFractionDigits: 4,
                      maximumFractionDigits: 4,
                    })}` : 'Unlock Wallet'}
                  />
                </div>
              </StyledBalance>
            </StyledBalances>
          </CardContent>
        </StyledCard>

        <Spacer />

        <StyledCard>
          <CardContent>
            <StyledBalances>
              <StyledBalance>
                <div style={{ flex: 1 }}>
                  <Label text="Your Staking Value" />
                  <Value
                    value={ethereum ? `$${totalUserStableValue.toNumber().toLocaleString('currency', {
                      minimumFractionDigits: 4,
                      maximumFractionDigits: 4,
                    })}` : 'Unlock Wallet'}
                  />
                </div>
              </StyledBalance>
            </StyledBalances>
          </CardContent>
        </StyledCard>
      </StyledWrapper>

      <div className="vault-blank"/>
      <div className="vault-blank"/>

      {vaults.map((vault: any) =>
        <TokenPanel
          key={vault.tokenName}
          tokenName={vault.tokenName}
          vaultAddr={vault.vaultAddr}
          stableCoinAddr={vault.stableCoinAddr}
          weiUnit={vault.wei}
          apy={Number.parseFloat(vaultsAPY[vault.tokenName])}
          tokenPrice={0.0}
        />
      )}
    </>
  )
}

const StyleSubTitle = styled.div`
  color: #aa9585;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
`


const StyledWrapper = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
    padding: 0 16px;
  }
`

const StyledCard = styled(Card)`
  max-width: 450px;
`

const StyledBalances = styled.div`
  display: flex;
`

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export default Vault
