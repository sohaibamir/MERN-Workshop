import React, { useState } from 'react';
import styles from './table.module.css';
import { MdDelete, MdDone, MdEdit } from 'react-icons/md';

const Table = ({ tableHeader, tableData, onDelete, editRecord, updateTableData, setUpdateTableData }) => {

  const [editRowID, setEditRowID] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const onEdit = (data) => {
    setEditRowID(data?.id);
    setIsEdit(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateTableData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <table className={styles.table}>
      <thead>

        <tr>
          {tableHeader?.map((header, index) => {
            return (
              <th key={index}>{header}</th>
            )
          })}
        </tr>

      </thead>
      <tbody>
        {tableData?.map(({ _id, createdAt, updatedAt, __v, ...row }, rowIndex) => (
          <tr key={rowIndex}>
            {Object.keys(row)?.map((key) => {
              if (typeof row[key] == 'string' && row[key]?.includes('000Z')) {
                const dateObject = new Date(row[key]);
                const formattedDate = dateObject.toLocaleDateString();
                return (
                  <td>{formattedDate}</td>
                )
              }
              else {
                return (
                  <td contentEditable={row?.id === editRowID ? true : false}>{row[key]}</td>
                )
              }
            })}
            <td className={styles.actionsColumn}>
              <MdDelete onClick={() => onDelete(_id)} />
              {isEdit === false || (row?.id !== editRowID) ? <MdEdit onClick={() => onEdit(row)} /> : isEdit && (row?.id === editRowID) ? <MdDone onClick={() => editRecord(row)} /> : ""}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
