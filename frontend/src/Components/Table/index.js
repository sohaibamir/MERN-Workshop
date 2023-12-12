import React, { useState } from 'react';
import styles from './table.module.css';
import { MdDelete, MdDone, MdEdit } from 'react-icons/md';
import CustomModal from '../../Modals';

const Table = ({ tableHeader, tableData, onDelete, editRecord, updateTableData, setUpdateTableData }) => {

  const [editRowID, setEditRowID] = useState(null);

  const onEdit = (data) => {
    setEditRowID(data?.id);
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
                  <td>{row[key]}</td>
                )
              }
            })}
            <td className={styles.actionsColumn}>
              <MdDelete onClick={() => onDelete(_id)} />
              <MdEdit onClick={() => onEdit(_id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table >
  );
};

export default Table;
