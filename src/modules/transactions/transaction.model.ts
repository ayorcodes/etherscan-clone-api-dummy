export interface ITransaction {
  hash: string;
  status: string;
  blockNumber: string;
  timestamp: Date;
  transactionAction: {
    item: string;
    from: string;
    to: string;
  };
  from: string;
  to: {
    address: string;
    isContract: boolean;
  };
  value: number;
  transactionFee: number;
  gasPrice: number;
  gasLimit: number;
  gasFees: {
    base: number;
    max: number;
    maxPriority: number;
  };
  fees: {
    burnt: number;
    txnSavings: number;
  };
  others: {
    txnType: string;
    nonce: number;
    position: number;
  };
  inputData: string;
}
