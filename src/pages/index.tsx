import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import EmployeeTable from "@/components/table/employeeTable";
import { fetchEmployees, updateEmployee } from "@/lib/api";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees().then(setEmployees).catch(console.error);
  }, []);

  const onUpdate = async (updatedEmployee) => {
    const result = await updateEmployee(updatedEmployee.id, updatedEmployee);
    setEmployees((prev) => prev.map((e) => (e.id === result.id ? result : e)));
  };
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <EmployeeTable data={employees} onUpdate={onUpdate} />
      </main>
    </div>
  );
}
