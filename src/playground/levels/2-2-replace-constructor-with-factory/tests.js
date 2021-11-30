import assert from "assert";

export function runTests() {
  const { listCandidatesFor, getLeadStaff } = require("./playground");

  const candidates = listCandidatesFor([
    { name: "John Doe", empType: "E" },
    { name: "Jane Din", empType: "S" },
    { name: "Mark Dong", empType: "M" },
    { name: "Frank Undefined", empType: "U" },
  ]);
  assert(candidates[0].name === "John Doe");
  assert(candidates[0].type === "Engineer");
  assert(candidates[1].name === "Jane Din");
  assert(candidates[1].type === "Salesperson");
  assert(candidates[2].name === "Mark Dong");
  assert(candidates[2].type === "Manager");
  assert(candidates[3].name === "Frank Undefined");
  assert(candidates[3].type === undefined);

  const leadStaff = getLeadStaff();
  assert(leadStaff.length === 2);
  assert(leadStaff[0].name === "Mark John");
  assert(leadStaff[0].type === "Engineer");
  assert(leadStaff[1].name === "Nicole Markenssen");
  assert(leadStaff[1].type === "Engineer");

  const leadStaffWithCEO = getLeadStaff(true);
  assert(leadStaffWithCEO.length === 3);
  assert(leadStaffWithCEO[0].name === "Mark John");
  assert(leadStaffWithCEO[0].type === "Engineer");
  assert(leadStaffWithCEO[1].name === "Nicole Markenssen");
  assert(leadStaffWithCEO[1].type === "Engineer");
  assert(leadStaffWithCEO[2].name === "Erik Vidal");
  assert(leadStaffWithCEO[2].type === "Engineer");
}
