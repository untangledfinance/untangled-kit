import { Roles__factory } from "../typechain";
import { BytesLike, JsonRpcProvider } from "ethers";
export async function executeWithRole(
  provider: JsonRpcProvider,
  roleContract: `0x${string}`,
  roleKey: BytesLike,
  target: `0x${string}`,
  operation: bigint,
  data: BytesLike,
  value: bigint
): Promise<void> {
  const roles = Roles__factory.connect(roleContract, provider);
  await roles.execTransactionWithRole(
    target,
    value,
    data,
    operation,
    roleKey,
    false
  );
}
