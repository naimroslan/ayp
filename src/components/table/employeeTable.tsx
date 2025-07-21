import { useState } from "react";
import Table from "./table";
import EmployeeModal from "../modal/employeeModal";

type Employee = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

type Props = {
  data: Employee[];
  onUpdate: (updated: Employee) => void;
};

export default function EmployeeTable({ data, onUpdate }: Props) {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null,
  );
  const columns = [
    { label: "ID", accessor: "id" },
    { label: "Name", accessor: "name" },
    { label: "Email", accessor: "email" },
    {
      label: "Status",
      accessor: "isActive",
      render: (value: boolean) => (value ? "ACTIVE" : "DEACTIVATED"),
    },
    {
      label: "Action",
      accessor: "id",
      render: (_: any, row: Employee) => (
        <span
          onClick={() => setSelectedEmployee(row)}
          className="text-blue-600 underline cursor-pointer"
        >
          [Update]
        </span>
      ),
    },
  ] as const;

  return (
    <>
      <Table columns={columns} data={data} />
      {selectedEmployee && (
        <EmployeeModal
          isOpen={!!selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
          employee={selectedEmployee}
          onSave={async (updated) => {
            await onUpdate(updated);
            setSelectedEmployee(null);
          }}
        />
      )}
    </>
  );
}
