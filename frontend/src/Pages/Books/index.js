import React, { useEffect, useState } from "react";
import styles from "./books.module.css";
import Table from "../../Components/Table";
import Header from "../../Components/Header";
import { useLanguage } from "../../Context/languageContext";
import CustomButton from "../../Components/CustomButton";
import CustomModal from "../../Modals";
import { getAllBooks } from "../../Api/api";

const Books = () => {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);
  const [tableData, setTableData] = useState([]);

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
    console.log("Form submitted:", formData);
    setTableData((prev) => [...prev, formData]);
    setOpenModal(false);
  };
  const onModalClose = () => {
    setOpenModal((prev) => !prev);
  };

  const tableHeader = ["ID", "Name", "Status", "Version", "Actions"];

  const onDelete = (data) => {
    let updatedData = tableData.filter((x) => x.ID != data.ID);
    setTableData(updatedData);
  };

  useEffect(() => {
    getAllBooks().then((res) => {
      console.log('res.data', res.data);
      setTableData(res.data);
    });
  }, []);

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
