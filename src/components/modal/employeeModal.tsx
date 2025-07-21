import { useState } from "react";
import Modal from "./modal";

type EmployeeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  employee: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  };
};

export default function EmployeeModal({
  isOpen,
  onClose,
  employee,
}: EmployeeModalProps) {
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);

  const handleSave = () => {
    console.log("Saving update for", { id: employee.id, name, email });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Update ${employee.name}`}>
      <div className="flex flex-col gap-4">
        <input
          className="border rounded px-3 py-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border rounded px-3 py-2"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
