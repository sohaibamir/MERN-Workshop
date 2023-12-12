import React, { useEffect, useState } from 'react'
import { useLanguage } from '../../Context/languageContext';
import Table from '../../Components/Table';
import Header from '../../Components/Header';
import styles from "./students.module.css"
import CustomButton from '../../Components/CustomButton';
import CustomModal from '../../Modals';
import { createStudent, deleteStudent, getAllStudents, updateStudent } from '../../Api/api';
import { toast, ToastContainer } from 'react-toastify';

const Students = () => {
    const { language } = useLanguage()
    const [openModal, setOpenModal] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [isStudentChanged, setIsStudentChanged] = useState(false);

    const [formData, setFormData] = useState({
        ID: '',
        department: '',
        name: '',
        rollNo: '',
        year: '',

    });

    const [updateTableData, setUpdateTableData] = useState({
        id: '',
        department: '',
        name: '',
        roll_no: '',
        year: '',
    });

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        createStudent(formData?.ID, formData?.department, formData?.name, formData?.rollNo, formData?.year).then((res) => {
            console.log('res of students', res.data?.student);
            setIsStudentChanged((prev) => !prev);
            setTableData([...tableData, res?.data?.student]);
            toast.success("Student Added Successfully!", {
                position: toast.POSITION.TOP_CENTER,
            });
        }).catch((err) => {
            console.log(err);
        })
        setOpenModal(false);
        setIsStudentChanged(true);
    };

    const onModalClose = () => {
        setOpenModal((prev) => !prev);
    }
    const tableHeader = ['ID', 'Department', 'Name', 'Roll Number', 'Year', 'Actions'];

    const onDelete = (id) => {
        deleteStudent(id).then((res) => {
            console.log('res', res);
            setIsStudentChanged((prev) => !prev);
            toast.success('Student Deleted Successfully!', {
                position: toast.POSITION.TOP_CENTER
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    const onEdit = (data) => {
        updateStudent(data?.id).then((res) => {
            console.log('res of student edit', res.data);
        })
    }

    useEffect(() => {
        getAllStudents().then((res) => {
            console.log('students', res.data);
            setTableData(res.data);
        })
    }, [isStudentChanged]);

    return (
        <>
            <Header />
            <div className={styles.studentMainContainer}>
                <div className={styles.subHeader} >
                    <h1 className={styles.heading} >{language.manageStudentsHere}</h1>
                    <CustomButton btnLabel="Add student" onClick={() => setOpenModal(true)} />
                </div>

                <Table updateTableData={updateTableData} setUpdateTableData={setUpdateTableData} tableHeader={tableHeader} tableData={tableData} onDelete={onDelete} editRecord={onEdit} />
                <ToastContainer />
            </div>
            {openModal && <CustomModal formName={'students'} onClose={onModalClose} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />}
        </>
    )
}

export default Students;