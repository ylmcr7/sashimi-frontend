import { Contract } from 'web3-eth-contract'

export interface SashimiPlateInfo {
  mainTokenIndex?: number
  tokensDecimal?: number[]
  type: number
  token0?: string
  token0Decimal?: number
  token1?: string
  token1Decimal?: number
}

export interface Farm {
  pid: number
  name: string
  lpToken: string
  lpTokenAddress: string
  lpContract: Contract
  tokenAddress: string
  earnToken: string
  earnTokenAddress: string
  icon: React.ReactNode
  id: string
  tokenSymbol: string
  lpBarAddress?: string
  lpBarContract?: Contract
  isSashimiPlate?: boolean
  sashimiPlateInfo?: SashimiPlateInfo
  sashimiPlateContract?: Contract
  uniV2LPAddress?: string
  uniV2LPContract?: Contract
}

export interface FarmsContext {
  farms: Farm[]
  unharvested: number
}
