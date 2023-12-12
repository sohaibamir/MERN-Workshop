import React, { useState } from 'react';
import styles from './table.module.css';
import { MdDelete, MdDone, MdEdit } from 'react-icons/md';

const Table = ({ setIndex, tableHeader, tableData, onDelete, editRecord, updateTableData, setUpdateTableData }) => {

  const [editRowID, setEditRowID] = useState(null);


  const onEdit = (id) => {
    setEditRowID(id);
    setIndex(id - 1);
  }

  const handleChange = (key, e) => {
    setUpdateTableData((prevData) => ({
      ...prevData,
      [key]: e.target.innerHTML,
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
                  <td contentEditable={row?.id === editRowID ? true : false} onKeyUp={(e) => handleChange(key, e)}>{row[key]}</td>
                )
              }
            })}
            <td className={styles.actionsColumn}>
              <MdDelete onClick={() => onDelete(_id)} />
              <MdEdit onClick={() => onEdit(row?.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table >
  );
};

export default Table;
