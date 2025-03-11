import { BundlerAction } from "@morpho-org/bundler-sdk-ethers";
import { MorphoBundler__factory } from "../../typechain";
import { BytesLike, MaxUint256 } from "ethers";
export function bundlerBorrow(
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
  return MorphoBundler__factory.createInterface().encodeFunctionData(
    "multicall",
    [
      [
        BundlerAction.erc20TransferFrom(
          marketParams.collateralToken,
          collateralAmount
        ),
        BundlerAction.morphoSupplyCollateral(
          marketParams,
          collateralAmount,
          borrower,
          ["0x"]
        ),
        BundlerAction.morphoBorrow(
          marketParams,
          borrowAmount,
          0n,
          borrower,
          borrower
        ),
      ],
    ]
  );
}

export function bundlerRepay(
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
  return MorphoBundler__factory.createInterface().encodeFunctionData(
    "multicall",
    [
      [
        BundlerAction.erc20TransferFrom(marketParams.loanToken, repayAmount),
        BundlerAction.morphoRepay(
          marketParams,
          repayAmount,
          0,
          MaxUint256,
          borrower,
          ["0x"]
        ),
      ],
    ]
  );
}

export function bundlerDeposit(
  receiver: `0x${string}`,
  depositAsset: `0x${string}`,
  amount: bigint,
  vault: `0x${string}`
): BytesLike {
  return MorphoBundler__factory.createInterface().encodeFunctionData(
    "multicall",
    [
      [
        BundlerAction.erc20TransferFrom(depositAsset, amount),
        BundlerAction.erc4626Deposit(vault, amount, 0, receiver),
      ],
    ]
  );
}
