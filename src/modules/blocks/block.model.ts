export interface IBlock {
  blockHeight: number;
  timestamp: Date;
  transactions: any[];
  minedBy: string;
  blockReward: number;
  unclesReward: number;
  difficulty: number;
  totalDifficulty: number;
  size: number;
  gasUsed: number;
  gasLimit: number;
  baseFeePerGas: number;
  burntFees: number;
  extraData: string;
  hash: string;
  parentHash: string;
  sha3Uncles: string;
  stateRoot: string;
  nonce: string;
}
