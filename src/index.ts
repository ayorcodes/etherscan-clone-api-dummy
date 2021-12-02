import express from 'express';
import dotenv from 'dotenv';
import blocksRouter from './modules/blocks';
import transactionsRouter from './modules/transactions';

dotenv.config();

const app = express();

app.use('/blocks', blocksRouter);
app.use('/transactions', transactionsRouter);

app.listen(process.env.PORT, () => {
  console.log('Etherscan api running on port ' + process.env.PORT || 3000);
});
