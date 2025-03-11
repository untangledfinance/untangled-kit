import { BytesLike } from "ethers";
import axios from "axios";
export async function swapTokenFor(
  receiver: `0x${string}`,
  market: `0x${string}`,
  slipage: number,
  tokenIn: `0x${string}`,
  tokenOut: `0x${string}`,
  amountIn: bigint
): Promise<BytesLike> {
  return await axios
    .get(
      `https://api-v2.pendle.finance/core/v1/sdk/1/markets/${market}/swap?receiver=${receiver}&slippage=${slipage}&enableAggregator=true&tokenIn=${tokenIn}&tokenOut=${tokenOut}&amountIn=${amountIn}
`
    )
    .then((res) => res.data.tx.data);
}
