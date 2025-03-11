import { MetaMorpho__factory } from "../../typechain";
import { BytesLike } from "ethers";

export function deposit(assets: bigint, receiver: `0x${string}`): BytesLike {
  return MetaMorpho__factory.createInterface().encodeFunctionData("deposit", [
    assets,
    receiver,
  ]);
}

export function redeem(
  shares: bigint,
  receiver: `0x${string}`,
  owner: `0x${string}`
): BytesLike {
  return MetaMorpho__factory.createInterface().encodeFunctionData("redeem", [
    shares,
    receiver,
    owner,
  ]);
}

export function withdraw(
  assets: bigint,
  receiver: `0x${string}`,
  owner: `0x${string}`
): BytesLike {
  return MetaMorpho__factory.createInterface().encodeFunctionData("withdraw", [
    assets,
    receiver,
    owner,
  ]);
}
