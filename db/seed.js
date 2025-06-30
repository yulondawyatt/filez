import db from "#db/client";
import { createFolder } from './queries/folders.js';

await db.connect();
await seed();


createFolder();

await db.end();
console.log("🌱 Database seeded.");
console.log('DISCONNECTED SUCCESSFULLY')

async function seed() {
  // TODO
}
