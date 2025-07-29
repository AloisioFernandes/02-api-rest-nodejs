// eslint-disable-next-line
import { Knex } from "knex";

declare module "knex/types/tables" {
  interface Transaction {
    id: string;
    title: string;
    amount: number;
    created_at: Date;
    session_id?: string;
  }

  interface Tables {
    transactions: Transaction;
  }
}