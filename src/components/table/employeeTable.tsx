import Table from "./table";

type Employee = {
  id: number;
  name: string;
  email: string;
  status: string;
};

type Props = {
  data: Employee[];
};

export default function EmployeeTable({ data }: Props) {
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
        <span className="text-blue-600 underline cursor-pointer">[Update]</span>
      ),
    },
  ] as const;

  return <Table columns={columns} data={data} />;
}
