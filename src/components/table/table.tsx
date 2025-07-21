import { ReactNode } from "react";

type Column<T> = {
  label: string;
  accessor: keyof T;
  render?: (value: any, row: T) => ReactNode;
};

type TableProps<T> = {
  columns: ReadonlyArray<Column<T>>;
  data: T[];
};

export default function Table<T extends { id: number }>({
  columns,
  data,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto w-full border border-black">
      <table className="min-w-full table-fixed border-collapse">
        <thead>
          <tr className="bg-white">
            {columns.map((col, i) => (
              <th
                key={i}
                className="px-4 py-2 text-left font-semibold border border-black"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {columns.map((col, i) => (
                <td key={i} className="px-4 py-2 border border-black">
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : (row[col.accessor] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
