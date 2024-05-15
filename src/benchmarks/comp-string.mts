import * as mitata from "mitata";

import zOld from "zod";
import zNew from "../../src";

const DATA = `${Math.random()}`;

const oldSchema = zOld.string();
const newSchema = zNew.string();

mitata.group("z.string().parse()", () => {
  mitata.bench("zod4", () => {
    newSchema.parse(DATA);
  });
  mitata.bench("zod3", () => {
    oldSchema.parse(DATA);
  });
});

// mitata.group("z.string().safeParse()", () => {
//   mitata.bench("zod4", () => {
//     newSchema.safeParse(DATA);
//   });
//   mitata.bench("zod3", () => {
//     oldSchema.safeParse(DATA);
//   });
// });

mitata.run();
