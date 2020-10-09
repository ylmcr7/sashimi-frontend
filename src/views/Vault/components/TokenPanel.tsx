import React, {useMemo, useEffect, useState, useCallback} from 'react'
import { Row, Col, Slider, Input, Button, InputNumber } from 'antd';

import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
import chef from '../../assets/img/chef.png'

import BigNumber from "bignumber.js";

import btcImg from '../../../../src/assets/img/vault-coins/usdt.svg';

import '../Vault.less';
import {UpOutlined, DownOutlined} from "@ant-design/icons/lib";
// <DownOutlined />

function formatter(value: any) {
  return `${value}%`;
}

const TokenPanel: React.FC = () => {

  const [depositValue, setDepositValue] = useState(0);
  const [withdrawValue, setWithdrawValue] = useState(0);
  const [panelHidden, setPanelHidden] = useState(true);

  // @ts-ignore
  return (
    <>
      {/* staking */}
      <Row className="vault-card">
        <Col span={24}>
          <Row className={`vault-stable-info ${panelHidden && 'vault-stable-info-hidden'}`} onClick={() => setPanelHidden(!panelHidden)}>
            <Col span={9} md={7}>
              <Row>
                <Col className="vault-info-subtitle">
                  <img src={btcImg} alt="btc-logo" style={{width: '40px', height: '40px', marginRight: '8px'}}/>
                </Col>
                <Col className="vault-info-title">
                  <div className="vault-info-title">USDT</div>
                  <div className="vault-info-subtitle">USDT Stable</div>
                </Col>
              </Row>
            </Col>

            <Col span={9} md={7}>
              <Row justify="center" style={{flexDirection: "column", alignItems: "center"}}>
                <Col span={24} className="vault-info-subtitle">APY</Col>
                <Col span={24} className="vault-info-title">0.0000%</Col>
              </Row>
            </Col>

            <Col span={0} md={8}>
              <Row justify="end" style={{flexDirection: "column", alignItems: "flex-end"}}>
                <Col span={24} className="vault-info-subtitle">Available to deposit</Col>
                <Col span={24} className="vault-info-title">999990.0000 USDT</Col>
              </Row>
            </Col>
            <Col span={6} md={2}>
              <Row align="middle" justify="end" style={{height: "100%"}}>
                <Col>
                  <Button
                    type="primary"
                    icon={panelHidden ? <DownOutlined/> : <UpOutlined />}
                    onClick={() => {}}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        {/* Deposit */}
        <Row className={`vault-operation-panel ${panelHidden && 'vault-operation-panel-hidden'}`}>
          <Col span={24} md={12} className="vault-operation-card">
            <div className="vault-balance">Your Wallet: 999989.999999 USDT</div>
            <div className="vault-blank"/>
            <Input placeholder="0"/>
            <div className="vault-blank"/>
            <Row>
              <Col span={2} md={2}>
                <Row align="middle" justify="start" style={{"height": "100%"}}>
                  <Col>
                    {depositValue}%
                  </Col>
                </Row>
              </Col>
              <Col span={18} md={19}>
                <Slider
                  tipFormatter={formatter}
                  min={0}
                  max={100}
                  onChange={(value: number) => {
                    setDepositValue(value);
                  }}
                  value={typeof depositValue === 'number' ? depositValue : 0}
                />
              </Col>
              <Col span={4} md={3}>
                <Row align="middle" justify="end" style={{height: "100%"}}>
                  <Col>
                    <Button size="small" type="primary" onClick={() => {
                      setDepositValue(100);
                    }}>
                      MAX
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="vault-blank"/>
            <div>41.19% = 411901.457406362 USDT</div>
            <div className="vault-blank"/>
            <div className="vault-button-container">
              <Button size="large" type="primary" style={{ width: '60%'}}>
                Deposit
              </Button>
            </div>
          </Col>
          {/* Withdraw */}
          <Col span={24} md={12} className="vault-operation-card">
            <div className="vault-balance">Your Balance: 999989.999999 USDT</div>
            <div className="vault-blank"/>
            <Input placeholder="0"/>
            <div className="vault-blank"/>
            <Row>
              <Col span={2} md={2}>
                <Row align="middle" justify="start" style={{"height": "100%"}}>
                  <Col>
                    {withdrawValue}%
                  </Col>
                </Row>
              </Col>
              <Col span={18} md={19}>
                <Slider
                  tipFormatter={formatter}
                  min={0}
                  max={100}
                  onChange={(value: number) => {
                    setWithdrawValue(value);
                  }}
                  value={typeof withdrawValue === 'number' ? withdrawValue : 0}
                />
              </Col>
              <Col span={4} md={3}>
                <Row align="middle" justify="end" style={{height: "100%"}}>
                  <Col>
                    <Button size="small" type="primary" onClick={() => {
                      setWithdrawValue(100);
                    }}>
                      MAX
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="vault-blank"/>
            <div>41.19% = 411901.457406362 USDT</div>
            <div className="vault-blank"/>
            <div className="vault-button-container">
              <Button size="large" type="primary" style={{ width: '60%'}}>
                Withdraw
              </Button>
            </div>
          </Col>
        </Row>
      </Row>
    </>
  )
}

export default TokenPanel
