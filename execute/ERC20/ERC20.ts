import { ERC20__factory } from "../../typechain";
import { BytesLike } from "ethers";

export function transfer(to: `0x${string}`, amount: bigint): BytesLike {
  return ERC20__factory.createInterface().encodeFunctionData("transfer", [
    to,
    amount,
  ]);
}

export function approve(spender: `0x${string}`, amount: bigint): BytesLike {
  return ERC20__factory.createInterface().encodeFunctionData("approve", [
    spender,
    amount,
  ]);
}

export function transferFrom(
  from: `0x${string}`,
  to: `0x${string}`,
  amount: bigint
): BytesLike {
  return ERC20__factory.createInterface().encodeFunctionData("transferFrom", [
    from,
    to,
    amount,
  ]);
}
