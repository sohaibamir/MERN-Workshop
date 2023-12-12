import React, { useEffect, useState } from "react";
import styles from "./books.module.css";
import Table from "../../Components/Table";
import Header from "../../Components/Header";
import { useLanguage } from "../../Context/languageContext";
import CustomButton from "../../Components/CustomButton";
import CustomModal from "../../Modals";
import { createBook, deleteBook, getAllBooks } from "../../Api/api";
import { toast, ToastContainer } from "react-toastify";

const Books = () => {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [isBookChanged, setIsBookChanged] = useState(false);

  const [formData, setFormData] = useState({
    ID: "",
    Name: "",
    Status: "",
    Version: "",
    // studentId: '',
    // issueDate: '',
    // returnDate: '',
    // department: '',
    // year: '',
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    createBook(formData?.ID, formData?.Name, formData?.Status, formData?.Version).then((res) => {
      console.log('res of books', res.data?.book);
      setIsBookChanged((prev) => !prev);
      setTableData([...tableData, res?.data?.book]);
      toast.success("Student Added Successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }).catch((err) => {
      console.log(err);
    })
    setOpenModal(false);
    setIsBookChanged(true);
  };

  const onModalClose = () => {
    setOpenModal((prev) => !prev);
  };

  const tableHeader = ["ID", "Name", "Status", "Version", "Actions"];

  const onDelete = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API}/delete/book`, {
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
    setIsBookChanged(true);
    toast.success("Deleted Successfully!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    getAllBooks().then((res) => {
      console.log('res.data', res.data);
      setTableData(res.data);
    });
  }, [isBookChanged]);

  return (
    <>
      <Header />
      <div className={styles.booksMainContainer}>
        <div className={styles.subHeader}>
          <h1 className={styles.heading}>{language.manageBooksHere}</h1>
          <CustomButton
            btnLabel="Add book"
            onClick={() => setOpenModal(true)}
          />
        </div>
        <Table
          tableHeader={tableHeader}
          tableData={tableData}
          onDelete={onDelete}
        />
        <ToastContainer />
      </div>
      {openModal && (
        <CustomModal
          formName={"books"}
          onClose={onModalClose}
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Books;
