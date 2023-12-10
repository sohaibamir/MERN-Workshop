import React, { useState } from 'react';
import styles from './table.module.css';
import { MdDelete, MdEdit } from 'react-icons/md';

const Table = ({ tableHeader, tableData, onDelete }) => {

  const [editRowID, setEditRowID] = useState()
  const [isEditable, setIsEditable] = useState(false)

  const onEdit = (data) => {
    setEditRowID(data.ID)
    // if(data.ID === editRowID){
    //   setIsEditable(true)
    // }
  }

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
        {tableData?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row)?.map((value) => {
              if (row?.ID === editRowID ) {
                console.log("HERE")
                return (
                  <td contentEditable >{value}</td>
                )
              } else {
                return (
                  <td contentEditable={isEditable} >{value}</td>
                )
              }
            })}
            <td className={styles.actionsColumn}>
              <MdDelete onClick={() => onDelete(row)} />
              <MdEdit onClick={() => onEdit(row)} />

            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
