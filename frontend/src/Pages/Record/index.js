import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../Context/languageContext';
import Table from '../../Components/Table';
import Header from '../../Components/Header';
import styles from "./records.module.css"
import CustomButton from '../../Components/CustomButton';
import CustomModal from '../../Modals';
import { createRecord, getAllRecords } from '../../Api/api';
import { ToastContainer, toast } from 'react-toastify';

const Records = () => {
    const { language } = useLanguage()
    const [tableData, setTableData] = useState([]);

    const [openModal, setOpenModal] = useState(false);
    const [isRecordChanged, setIsRecordChanged] = useState(false);

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

    const onDelete = async (id) => {
        const response = await fetch(`${process.env.REACT_APP_API}/delete/record`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        if (!response.ok) {
            throw new Error(`Error deleting book. Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        setIsRecordChanged(true);
        toast.success("Deleted Successfully!", {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        createRecord(formData?.ID, formData?.bookName, formData?.status, formData?.studentId, formData?.issueDate, formData?.returnDate).then((res) => {
            console.log('res of books', res.data?.book);
            setIsRecordChanged((prev) => !prev);
            setTableData([...tableData, res?.data?.record]);
            toast.success("Student Added Successfully!", {
                position: toast.POSITION.TOP_CENTER,
            });
        }).catch((err) => {
            console.log(err);
        })
        setOpenModal(false);
        setIsRecordChanged(true);
    };

    useEffect(() => {
        getAllRecords().then((res) => {
            console.log('records', res.data);
            setTableData(res.data);
        })
    }, [isRecordChanged]);

    return (
        <>
            <Header />
            <div className={styles.recordsMainContainer}>
                <div className={styles.subHeader} >
                    <h1 className={styles.heading} >{language.manageRecordsHere}</h1>
                    <CustomButton btnLabel="Add record" onClick={() => setOpenModal(true)} />
                </div>
                <Table tableHeader={tableHeader} tableData={tableData} onDelete={onDelete} />
                <ToastContainer />
            </div>
            {openModal && <CustomModal formName={'records'} onClose={onModalClose} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />}
        </>
    )
}

export default Records