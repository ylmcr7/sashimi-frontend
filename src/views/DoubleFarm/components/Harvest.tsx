import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js';
import {
  Button
} from 'antd';

import { Contract } from 'web3-eth-contract'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Label from '../../../components/Label'
import Value from '../../../components/Value'

import useEarnings from '../../../hooks/useEarnings'
import useReward from '../../../hooks/useReward'

import {
  getDisplayBalance,
  getBalanceNumber,
} from '../../../utils/formatBalance'
import Logo from "../../../components/Logo";
import {LogoImg} from "../../../components/Logo/Logo";
import {useWallet} from "use-wallet";
import useBlock from "../../../hooks/useBlock";
import useEarned from "../../../hooks/sashimiBar/useEarned";
import useLeave from "../../../hooks/sashimiBar/useLeave";

interface HarvestProps {
  pid: number
  lpBarContract: Contract
}

const Harvest: React.FC<HarvestProps> = ({ pid , lpBarContract}) => {
  const earnings = useEarned(lpBarContract);
  const [pendingTx, setPendingTx] = useState(false);
  const { onLeave } = useLeave(lpBarContract);

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>
              <LogoImg />
            </CardIcon>
            <Value value={getBalanceNumber(earnings)} />
            <Label text="SASHIMI Earned" />
          </StyledCardHeader>
          <StyledCardActions>
            <Button
              disabled={!earnings.toNumber() || pendingTx}
              type="primary"
              size="large"
              block
              onClick={async () => {
                setPendingTx(true);
                await onLeave(0);
                setPendingTx(false);
              }}
            >
              {pendingTx ? 'Collecting SASHIMI' : 'Harvest'}
            </Button>
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

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Harvest
