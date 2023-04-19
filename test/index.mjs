import request from "supertest";
import test from "node:test";
import { app } from "../src/index.mjs";

test("When I submit a file, I will receive the file size in bytes within the JSON response", async () => {
  await request(app)
    .post("/")
    .set("Content-Type", "multipart/form-data")
    .attach("file", "./test/fixtures/avatar.jpg")
    .expect(200, {
      size: 761702,
    });
});
