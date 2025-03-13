import { Roles__factory } from "../typechain";
import { BytesLike } from "ethers";
export function executeWithRole(
  roleKey: BytesLike,
  target: `0x${string}`,
  operation: bigint,
  data: BytesLike,
  value: bigint
): BytesLike {
  return Roles__factory.createInterface().encodeFunctionData(
    "execTransactionWithRole",
    [target, value, data, operation, roleKey, false]
  );
}
