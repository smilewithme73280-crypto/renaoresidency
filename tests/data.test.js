import assert from "node:assert/strict";
import { test } from "node:test";
import pgData from "../src/data.js";

test("pg data includes two room types", () => {
    assert.strictEqual(pgData.rooms.length, 3);
    assert.ok(pgData.rooms.every((room) => room.rentPerMonth > 0));
});

test("electricity rate is defined", () => {
    assert.equal(pgData.electricityRatePerUnit, 8.68);
});

test("visiting card includes contact", () => {
    assert.ok(pgData.visitingCard.contactName);
    assert.ok(pgData.visitingCard.email);
});

test("eligibility includes foreigners", () => {
    assert.ok(
        pgData.eligibility.some((x) => /foreign/i.test(String(x))),
        "Expected eligibility to include foreigners"
    );
});

