import React from "react";
import { Button } from "react-bootstrap";

type Props = {
  projectName: string;
  onAdd: () => void;
  onImportClick: () => void;
  onDownloadBlank: () => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
};

export function ExpenseToolbar({ projectName, onAdd, onImportClick, onDownloadBlank, fileInputRef }: Props) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="d-flex gap-2">
        <Button variant="primary" onClick={onAdd}>+ Add Expense</Button>
        <Button variant="outline-secondary" onClick={onImportClick}>Import Excel</Button>
        <Button variant="outline-info" onClick={onDownloadBlank}>Download Blank Excel</Button>
        <input ref={fileInputRef} type="file" accept=".xlsx,.xls" style={{ display: "none" }} />
      </div>

      <small className="text-muted">Expenses for: {projectName}</small>
    </div>
  );
}

export default ExpenseToolbar;
