import React, { useState } from 'react'
import { useLanguage } from '../../Context/languageContext';
import Table from '../../Components/Table';
import Header from '../../Components/Header';
import styles from "./records.module.css"
import CustomButton from '../../Components/CustomButton';
import CustomModal from '../../Modals';

const Records = () => {
    const { language } = useLanguage()
    const [tableData, setTableData] = useState([
        { ID: 1, bookName: 'The Catcher in the Rye', Status: 'active', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { ID: 2, bookName: 'To Kill a Mockingbird', Status: 'inactive', studentId: 2, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { ID: 3, bookName: '1984', Status: 'active', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { ID: 4, bookName: 'The Great Gatsby', Status: 'active', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { ID: 5, bookName: 'One Hundred Years of Solitude', Status: 'inactive', studentId: 2, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { ID: 6, bookName: 'Brave New World', Status: 'active', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { ID: 7, bookName: 'The Lord of the Rings', Status: 'active', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { ID: 8, bookName: 'Pride and Prejudice', Status: 'inactive', studentId: 2, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { ID: 9, bookName: 'The Hobbit', Status: 'active', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { ID: 10, bookName: 'Harry Potter and the Sorcerer\'s Stone', Status: 'active', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
    ])

    const [openModal, setOpenModal] = useState(false);

    const [formData, setFormData] = useState({
        ID: '',
        bookName: '',
        Status: '',
        studentId: '',
        issueDate: '',
        returnDate: '',
    });

    const onModalClose = () => {
        setOpenModal((prev) => !prev);
    }
    const tableHeader = ['ID', 'Name', 'Status', 'Student ID', 'Issue Date', 'Return Date', 'Actions'];

    const onDelete = (data) => {
        let updatedData = tableData.filter(x=>x.ID != data.ID)
        setTableData(updatedData)
    }

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        setTableData(prev=>[...prev, formData])
        setOpenModal(false)
    };

    return (
        <>
            <Header />
            <div className={styles.recordsMainContainer}>
                <div className={styles.subHeader} >
                    <h1 className={styles.heading} >{language.manageRecordsHere}</h1>
                    <CustomButton btnLabel="Add record" onClick={() => setOpenModal(true)} />
                </div>
                <Table tableHeader={tableHeader} tableData={tableData} onDelete={onDelete}  />
            </div>
            {openModal && <CustomModal formName={'records'} onClose={onModalClose} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />}
        </>
    )
}

export default Records