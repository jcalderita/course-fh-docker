const { syncDB } = require("../../tasks/sync-db");

describe('Test Sync-DB', () => {
  test('Execute 2 times', () => {
    syncDB();
    const times = syncDB();
    console.log("Call number", times);
    expect(times).toBe(2);
  });
});