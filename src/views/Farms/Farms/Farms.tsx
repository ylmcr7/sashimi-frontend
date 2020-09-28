import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import {
  Button
} from 'antd';
import { useWallet } from 'use-wallet'

import chef from '../../../assets/img/chef.png'

import Page from '../../../components/Page'
import PageHeader from '../../../components/PageHeader'
import WalletProviderModal from '../../../components/WalletProviderModal'

import useModal from '../../../hooks/useModal'

import Farm from '../Farm'

import FarmCards from './components/FarmCards'
import styled from "styled-components";

const Migration: React.FC = () => {
  return <div>
    <h3>The liquidity migration will begin at Monday, Sep 28 2020 11:10 AM UTC and will be completed shortly!</h3>
    <p>What this means for you:</p>
    <p>  1⃣️ You don't have to do anything!</p>
    <p>  2⃣️The tokens you're staking on uniswap will automatically get migrated to SashimiSwap Exchange.</p>
    <p>After the migration, you will start to earn trasanction fees from Sashimi and all of Sashimi 2.0’s features will be available for public, stay tuned!</p>
  </div>;
};

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  return (
    <Switch>
      <Page>
        {!!account ? (
          <>
            <Route exact path={path}>
              <PageHeader
                icon={<img src={chef} height="120" />}
                subtitle="Earn SASHIMI tokens by staking Uniswap V2 LP Tokens."
                title="Select Your Favorite Dishes"
              />
              <Migration/>
              <FarmCards />
            </Route>
            <Route path={`${path}/:farmId`}>
              <Farm />
            </Route>
          </>
        ) : (
          <>
            <Migration/>
            <StyledDiv>
              <Button
                onClick={onPresentWalletProviderModal}
                type="primary"
                size="large"
                // disabled={true}
                disabled={(new Date()).getTime() > 1601291400000}
              >
                { (new Date()).getTime() > 1601291400000 ? 'Migrating...' : '🔓 Unlock Wallet'}
                {/*🔓 Unlock Wallet*/}
              </Button>
            </StyledDiv>
          </>
        )}
      </Page>
    </Switch>
  )
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`

export default Farms
