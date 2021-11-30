import Employee from "./employee";

function listCandidatesFor(documents) {
  const candidates = documents.map((document) => {
    return new Employee(document.name, document.empType);
  });

  return candidates;
}

function getLeadStaff(includeVP) {
  const leadEngineer = new Employee("Mark John", "E");
  const leadQA = new Employee("Nicole Markenssen", "E");

  if (includeVP) {
    return [leadEngineer, leadQA, new Employee("Erik Vidal", "E")];
  }

  return [leadEngineer, leadQA];
}

export { listCandidatesFor, getLeadStaff };
