import { BytesLike } from "ethers";
import { MorphoBlue__factory } from "../../typechain";

export function supplyCollateral(
  marketParams: {
    collateralToken: `0x${string}`;
    loanToken: `0x${string}`;
    irm: `0x${string}`;
    oracle: `0x${string}`;
    lltv: bigint;
  },
  collateralAmount: bigint,
  borrower: `0x${string}`
): BytesLike {
  const morphoBlueInterface = MorphoBlue__factory.createInterface();
  return morphoBlueInterface.encodeFunctionData("supplyCollateral", [
    marketParams,
    collateralAmount,
    borrower,
    "0x",
  ]);
}

export function borrow(
  marketParams: {
    collateralToken: `0x${string}`;
    loanToken: `0x${string}`;
    irm: `0x${string}`;
    oracle: `0x${string}`;
    lltv: bigint;
  },
  collateralAmount: bigint,
  borrowAmount: bigint,
  borrower: `0x${string}`
): BytesLike {
  const morphoBlueInterface = MorphoBlue__factory.createInterface();
  return morphoBlueInterface.encodeFunctionData("borrow", [
    marketParams,
    collateralAmount,
    borrowAmount,
    borrower,
    borrower,
  ]);
}

export function repay(
  marketParams: {
    collateralToken: `0x${string}`;
    loanToken: `0x${string}`;
    irm: `0x${string}`;
    oracle: `0x${string}`;
    lltv: bigint;
  },
  repayAmount: bigint,
  borrower: `0x${string}`
): BytesLike {
  const morphoBlueInterface = MorphoBlue__factory.createInterface();
  return morphoBlueInterface.encodeFunctionData("repay", [
    marketParams,
    repayAmount,
    0n,
    borrower,
    "0x",
  ]);
}
