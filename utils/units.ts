import {BigNumber} from '@ethersproject/bignumber';
export function sandWei(amount: number): BigNumber {
  return BigNumber.from(amount).mul('1000000000000000000');
}
