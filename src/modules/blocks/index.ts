import { Router, Response } from 'express';
import Helpers from '../../shared/helper';
// import { IBlock } from './block.model'

const blocksRouter = Router();

const getBlock = () => {
  return {
    blockHeight: Helpers.faker.datatype.number({ min: 135683, max: 283733 }),
    timestamp: Helpers.faker.datatype.datetime(),
    minedBy: Helpers.faker.datatype.hexaDecimal(30),
    transactions: [],
    blockReward: Helpers.faker.datatype.number({
      min: 1,
      max: 6,
      precision: 0.1,
    }),
    unclesReward: Helpers.faker.datatype.number({
      min: 0,
      max: 2,
      precision: 0.1,
    }),
    difficulty: Helpers.faker.datatype.number({ min: 1199999, max: 5587900 }),
    totalDifficulty: Helpers.faker.datatype.number({
      min: 546789087656,
      max: 96576867546576,
    }),
    size: Helpers.faker.datatype.number({ min: 378383, max: 9474848 }),
    gasUsed: Helpers.faker.datatype.number({ min: 68790, max: 973733 }),
    gasLimit: Helpers.faker.datatype.number({ min: 96637, max: 993737 }),
    baseFeePerGas: Helpers.faker.datatype.number({
      min: 0,
      max: 7,
      precision: 0.1,
    }),
    burntFees: Helpers.faker.datatype.number({
      min: 0,
      max: 7,
      precision: 0.1,
    }),
    extraData: Helpers.faker.datatype.hexaDecimal(66),
    hash: Helpers.faker.datatype.hexaDecimal(66),
    parentHash: Helpers.faker.datatype.hexaDecimal(66),
    sha3Uncles: Helpers.faker.datatype.hexaDecimal(66),
    stateRoot: Helpers.faker.datatype.hexaDecimal(66),
    nonce: Helpers.faker.datatype.hexaDecimal(16),
  };
};

blocksRouter.get('', (_, res: Response) => {
  const blocks = Array.from({ length: 100 }, (_) => getBlock());

  res.status(200).json(blocks);
});

blocksRouter.get('/:id', (_, res: Response) => {
  const block = getBlock();

  res.status(200).json(block);
});

export default blocksRouter;
