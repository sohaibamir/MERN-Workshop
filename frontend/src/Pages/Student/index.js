import React, { useState } from 'react'
import { useLanguage } from '../../Context/languageContext';
import Table from '../../Components/Table';
import Header from '../../Components/Header';
import styles from "./students.module.css"
import CustomButton from '../../Components/CustomButton';
import CustomModal from '../../Modals';

const Students = () => {
    const { language } = useLanguage()
    const [openModal, setOpenModal] = useState(false);
    const [tableData, setTableData] = useState([
        { ID: 1, department: 'Snow', name: 'Jon', rollNo: 35, year: 'TE' },
        { ID: 2, department: 'Lannister', name: 'Cersei', rollNo: 42, year: 'TE' },
        { ID: 3, department: 'Lannister', name: 'Jaime', rollNo: 45, year: 'TE' },
        { ID: 4, department: 'Stark', name: 'Arya', rollNo: 16, year: 'TE' },
        { ID: 5, department: 'Targaryen', name: 'Daenerys', rollNo: 20, year: 'TE' },
        { ID: 6, department: 'Melisandre', name: 'Test', rollNo: 150, year: 'TE' },
        { ID: 7, department: 'Clifford', name: 'TErrara', rollNo: 44, year: 'TE' },
        { ID: 8, department: 'Frances', name: 'Rossini', rollNo: 36, year: 'TE' },
        { ID: 9, department: 'Roxie', name: 'Harvey', rollNo: 65, year: 'TE' },
    ])

    const [formData, setFormData] = useState({
        ID: '',
        department: '',
        name: '',
        rollNo: '',
        year: '',

    });

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        setTableData(prev=>[...prev, formData])
        setOpenModal(false)
    };

    const onModalClose = () => {
        setOpenModal((prev) => !prev);
    }
    const tableHeader = ['ID', 'Department', 'Name', 'Roll Number', 'Year', 'Actions'];

    const onDelete = (data) => {
        let updatedData = tableData.filter(x=>x.ID != data.ID)
        setTableData(updatedData)
    }

    return (
        <>
            <Header />
            <div className={styles.studentMainContainer}>
                <div className={styles.subHeader} >
                    <h1 className={styles.heading} >{language.manageStudentsHere}</h1>
                    <CustomButton btnLabel="Add student" onClick={() => setOpenModal(true)} />
                </div>

                <Table tableHeader={tableHeader} tableData={tableData} onDelete={onDelete} />
            </div>
            {openModal && <CustomModal formName={'students'} onClose={onModalClose} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />}
        </>
    )
}

export default Students;