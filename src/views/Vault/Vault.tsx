import React, {useMemo, useEffect, useState, useCallback} from 'react'
import styled from 'styled-components'
import { Row, Col, Slider, Input, Button, InputNumber } from 'antd';

import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
import chef from '../../assets/img/chef.png'

import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'

import useYam from '../../hooks/useYam'
import {getSashimiBarContract} from '../../sushi/utils'

import BigNumber from "bignumber.js";
import useBlock from "../../hooks/useBlock";
import useModal from "../../hooks/useModal";
import WalletProviderModal from "../../components/WalletProviderModal";
import CardContent from "../../components/CardContent";
import Label from "../../components/Label";
import Value from "../../components/Value";
import {getBalanceNumber} from "../../utils/formatBalance";
import Card from "../../components/Card";
import {Link} from "react-router-dom";

import TokenPanel from "./components/TokenPanel";

import btcImg from '../../../src/assets/img/vault-coins/usdt.svg';

import './Vault.less';
import {UpOutlined, DownOutlined} from "@ant-design/icons/lib";
// <DownOutlined />

function formatter(value: any) {
  return `${value}%`;
}

const Vault: React.FC = () => {
  const yam = useYam();
  const block = useBlock();

  // const [setXSashimiBalanceOfSashimiBar] = useState(new BigNumber(0));

  const { ethereum } = useWallet();
  const sashimiBarContract: Contract = useMemo(() => getSashimiBarContract(yam), [ethereum, yam]);

  const getXSashimiBalanceOfSashimiBar = useCallback(() => {
    if (sashimiBarContract) {
      sashimiBarContract.methods.totalSupply().call().then((totalSupply: any) => {
        // setXSashimiBalanceOfSashimiBar(new BigNumber(totalSupply));
      }).catch((error: any) => {
        console.log('error: ', error);
      });
    }
  }, [sashimiBarContract, block]);

  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />, 'provider');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getXSashimiBalanceOfSashimiBar();
  }, [getXSashimiBalanceOfSashimiBar]);

  const walletLocked = <Button
    onClick={onPresentWalletProviderModal}
    type="primary"
    size="large"
    block
  >Unlock Wallet</Button>;

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

      {/*<StyledVaultTitle>*/}
      {/*  Staking Info*/}
      {/*</StyledVaultTitle>*/}
      {/*<Rowjustify="space-between">*/}
      {/*  <Col span={11}></Col>*/}
      {/*  <Col span={11}></Col>*/}
      {/*</Row>*/}

      <StyledWrapper>
        <StyledCard>
          <CardContent>
            <StyledBalances>
              <StyledBalance>
                <div style={{ flex: 1 }}>
                  <Label text="Total Staking Value" />
                  <Value
                    value={`$${0}`}
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
                    value={`$${0}`}
                  />
                </div>
              </StyledBalance>
            </StyledBalances>
          </CardContent>
        </StyledCard>
      </StyledWrapper>

      <div className="vault-blank"/>
      <div className="vault-blank"/>
      <TokenPanel/>
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
