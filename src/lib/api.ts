const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchEmployees() {
  const res = await fetch(`${API_URL}/emloyees`);
  if (!res.ok) throw new Error("Failed to fetch employees");
  return res.json;
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
