import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {
  Button
} from 'antd';
import BigNumber from 'bignumber.js';

import { Contract } from 'web3-eth-contract'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Label from '../../../components/Label'
import Value from '../../../components/Value'

import {
  getBalanceNumber,
} from '../../../utils/formatBalance'
import {LogoImg} from "../../../components/Logo/Logo";
import WithdrawModal from './WithdrawModal'
import useModal from "../../../hooks/useModal";
import {useWallet} from "use-wallet";

interface HarvestProps {
  sashimiBarContract: Contract
  walletLocked: React.ReactElement
  // pid: number
}

const Harvest: React.FC<HarvestProps> = ({sashimiBarContract, walletLocked}) => {

  const { account } = useWallet();
  const [tokenBalance, setTokenBalance] = useState(new BigNumber(0));

  useEffect(() => {
    (async () => {
      if (!sashimiBarContract || !account) {
        setTokenBalance(new BigNumber(0));
        return;
      }
      const tokenBalance = await sashimiBarContract.methods
        .balanceOf(account)
        .call();
      setTokenBalance(new BigNumber(tokenBalance));
    })();
  }, [account, sashimiBarContract]);

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={tokenBalance}
      onConfirm={async (amount) => {
        console.log('amount', amount)
        if (!amount || parseFloat(amount) <= 0) {
          return;
        }

        await sashimiBarContract.methods.leave(
          new BigNumber(amount).times(new BigNumber(10).pow(18)).toString()
        ).send({ from: account }).on('transactionHash', () => {});

      }}
      tokenName={'SASHIMI'}
    />,
  )

  const covertButton = <Button
    disabled={!tokenBalance.toNumber() || tokenBalance.isEqualTo(0)}
    type="primary"
    size="large"
    block
    onClick={onPresentWithdraw}
  >
    {'Covert to SASHIMI'}
  </Button>;

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>
              <LogoImg />
            </CardIcon>
            <Value value={getBalanceNumber(tokenBalance)} />
            <Label text="xSASHIMI(Sashimi Bar) Available" />
          </StyledCardHeader>
          <StyledCardActions>
            { account ? covertButton : walletLocked}
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Harvest
