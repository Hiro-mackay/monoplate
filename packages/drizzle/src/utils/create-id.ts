import { init } from "@paralleldrive/cuid2";
import { PRIMARY_ID_LENGTH } from "./shared-consts";

export const createId = init({
  length: PRIMARY_ID_LENGTH,
});
