import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../Context/languageContext';
import Table from '../../Components/Table';
import Header from '../../Components/Header';
import styles from "./students.module.css"
import CustomButton from '../../Components/CustomButton';
import CustomModal from '../../Modals';
import { getAllStudents } from '../../Api/api';

const Students = () => {
    const { language } = useLanguage()
    const [openModal, setOpenModal] = useState(false);
    const [tableData, setTableData] = useState([]);

    const [formData, setFormData] = useState({
        ID: '',
        department: '',
        name: '',
        rollNo: '',
        year: '',

    });

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        setTableData(prev => [...prev, formData])
        setOpenModal(false)
    };

    const onModalClose = () => {
        setOpenModal((prev) => !prev);
    }
    const tableHeader = ['ID', 'Department', 'Name', 'Roll Number', 'Year', 'Actions'];

    const onDelete = (data) => {
        let updatedData = tableData.filter(x => x.ID != data.ID)
        setTableData(updatedData)
    }

    useEffect(() => {
        getAllStudents().then((res) => {
            console.log('students', res.data);
            setTableData(res.data);
        })
    }, []);

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