import React, {useMemo, useEffect} from 'react'
import styled from 'styled-components'

import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
import chef from '../../assets/img/chef.png'

import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'

import useYam from '../../hooks/useYam'
import {getSashimiBarContract, getSushiContract} from '../../sushi/utils'

import Harvest from './components/Harvest'
import Stake from './components/Stake'
import {Button} from "antd";

const Staking: React.FC = () => {
  const yam = useYam()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { ethereum } = useWallet()
  const sashimiBarContract: Contract = useMemo(() => {
    return getSashimiBarContract(yam)
  }, [ethereum, yam])
  const sushiContract: Contract = useMemo(() => {
    return getSushiContract(yam)
  }, [ethereum, yam])

  const walletLocked = <Button
    disabled={true}
    type="primary"
    size="large"
    block
  >Locked</Button>;

  return (
    <>
      <PageHeader
        icon={<img src={chef} height="120" />}
        subtitle={'Welcome to the Sashimi Bar, stake Sashimi to earn Sashimi.'}
        title='Sashimi Staking'
      />
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <Harvest
              walletLocked={walletLocked}
              sashimiBarContract={sashimiBarContract}
            />
          </StyledCardWrapper>
          <Spacer />
          <StyledCardWrapper>
            <Stake
              sashimiBarContract={sashimiBarContract}
              sushiContract={sushiContract}
              walletLocked={walletLocked}
            />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg" />
        <StyledInfo>
          ⭐️ You will earn a portion of the swaps fees based on the amount of xSashimi held relative the weight of the staking.
          xSashimi can be minted by staking Sashimi. To redeem Sashimi staked plus swap fees convert xSashimi back to Sashimi.
          {/*There are currently {getBalanceNumber(xSashimiTotal)} xSashimi in the whole pool.*/}
        </StyledInfo>
        <Spacer size="lg" />
      </StyledFarm>
    </>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default Staking
