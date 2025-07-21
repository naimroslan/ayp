const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchEmployees() {
  const res = await fetch(`${API_URL}/employees`);
  if (!res.ok) throw new Error("Failed to fetch employees");

  const json = await res.json();
  return Array.isArray(json) ? json : json.employees;
}

export async function updateEmployee(
  id: number,
  data: Partial<{ name: string; email: string; isActive: boolean }>,
) {
  const res = await fetch(`${API_URL}/employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update employee");
  return res.json();
}
