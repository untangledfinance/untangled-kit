import { BytesLike } from "ethers";
import { SparkPSM__factory } from "../../typechain";

export function swapExactIn(
  assetIn: `0x${string}`,
  assetOut: `0x${string}`,
  amountIn: bigint,
  minAmountOut: bigint,
  recipient: `0x${string}`
): BytesLike {
  return SparkPSM__factory.createInterface().encodeFunctionData("swapExactIn", [
    assetIn,
    assetOut,
    amountIn,
    minAmountOut,
    recipient,
    0,
  ]);
}

export function swapExactOut(
  assetIn: `0x${string}`,
  assetOut: `0x${string}`,
  amountOut: bigint,
  maxAmountIn: bigint,
  recipient: `0x${string}`
): BytesLike {
  return SparkPSM__factory.createInterface().encodeFunctionData(
    "swapExactOut",
    [assetIn, assetOut, amountOut, maxAmountIn, recipient, 0]
  );
}
