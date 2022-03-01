const Employee = require("../lib/Employee");

describe("SetEmployee", () => {
  it("Parameter should be set to the right place in the Constructor function", () => {
    expect(new Employee("Manager").role).toBe("Manager")
  })
})
