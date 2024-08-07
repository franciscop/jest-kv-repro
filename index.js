import { openKv } from "@deno/kv";

const db = await openKv("db/kv.db");
await db.set(["hello"], "world");
console.log(await db.get(["hello"]));
