import { useState } from "react";
import Modal from "./modal";
import TextInput from "../button/textInput";

type EmployeeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  employee?: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  };
  onSave: (updated: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }) => void;
};

export default function EmployeeModal({
  isOpen,
  onClose,
  employee,
  onSave,
}: EmployeeModalProps) {
  if (!employee) return null;

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [isActive, setIsActive] = useState(employee.isActive);

  const handleSave = () => {
    onSave({
      id: employee.id,
      name,
      email,
      isActive,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Update ${employee.name}`}>
      <div className="flex flex-col gap-4">
        <TextInput
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="inline-flex items-center cursor-pointer">
          <span className="pr-4 text-sm font-medium text-gray-900 ">
            Status
          </span>
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        </label>

        <button
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </Modal>
  );
}
