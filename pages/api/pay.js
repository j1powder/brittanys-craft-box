import { Client } from "square";
import { randomUUID } from 'crypto';


const { paymentsApi } = new Client({
    accessToken: EAAAEClinDzPBqnNrnWN6ZGbgcSvn9FS1eNf9Uh0W2vZvnjkSrQMib_xEfmbRW04,
    environment: 'sandbox'
  });

  
  export default async function handler(req, res) {
    if ( req.method === 'POST' ) {
      const { result } = await paymentsApi.createPayment({
        idempotencyKey: randomUUID(),
        sourceId: req.body.sourceId,
        amountMoney: {
          currency: 'USD',
          amount: 100
        }
      })
      console.log(result);
      res.status(200).json(result);
    } else {
      res.status(500).send();
    }
  }