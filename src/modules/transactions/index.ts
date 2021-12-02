import { Router, Response } from 'express';
import Helpers from '../../shared/helper';
import { ITransaction } from './transaction.model';
// import { IBlock } from './block.model'

const transactionsRouter = Router();

// Helpers.faker.datatype.hexaDecimal(16),

const getTransaction = (): ITransaction => {
  return {
    timestamp: Helpers.faker.datatype.datetime(),
    gasLimit: Helpers.faker.datatype.number({ min: 96637, max: 993737 }),
    hash: Helpers.faker.datatype.hexaDecimal(66),
    blockNumber: Helpers.faker.datatype
      .number({ min: 96637, max: 993737 })
      .toString(),
    fees: {
      burnt: Helpers.faker.datatype.number({ min: 96637, max: 993737 }),
      txnSavings: Helpers.faker.datatype.number({ min: 96637, max: 993737 }),
    },

    from: Helpers.faker.datatype.hexaDecimal(66),
    to: {
      address: Helpers.faker.datatype.hexaDecimal(66),
      isContract: Helpers.faker.datatype.boolean(),
    },
    gasFees: {
      base: Helpers.faker.datatype.number({ min: 96637, max: 993737 }),
      max: Helpers.faker.datatype.number({ min: 96637, max: 993737 }),
      maxPriority: Helpers.faker.datatype.number({ min: 96637, max: 993737 }),
    },
    gasPrice: Helpers.faker.datatype.number({ min: 96637, max: 993737 }),
    inputData: Helpers.faker.lorem.paragraph(),
    others: {
      nonce: Helpers.faker.datatype.number({ min: 96637, max: 993737 }),
      position: Helpers.faker.datatype.number({ min: 96637, max: 993737 }),
      txnType: Helpers.faker.lorem.word(),
    },
    status: Helpers.faker.lorem.word(),
    transactionAction: {
      from: Helpers.faker.datatype.hexaDecimal(66),
      item: Helpers.faker.datatype.hexaDecimal(66),
      to: Helpers.faker.datatype.hexaDecimal(66),
    },
    transactionFee: Helpers.faker.datatype.number({ min: 96637, max: 993737 }),
    value: Helpers.faker.datatype.number({ min: 96637, max: 993737 }),
  };
};

transactionsRouter.get('', (_, res: Response) => {
  const transactions = Array.from({ length: 100 }, (_) => getTransaction());

  res.status(200).json(transactions);
});

transactionsRouter.get('/:id', (_, res: Response) => {
  const transaction = getTransaction();

  res.status(200).json(transaction);
});

export default transactionsRouter;
