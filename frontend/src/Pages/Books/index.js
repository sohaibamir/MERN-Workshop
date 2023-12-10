import React, { useState } from "react";
import styles from "./books.module.css";
import Table from "../../Components/Table";
import Header from "../../Components/Header";
import { useLanguage } from "../../Context/languageContext";
import CustomButton from "../../Components/CustomButton";
import CustomModal from "../../Modals";

const Books = () => {
  const { language } = useLanguage();
  const [openModal, setOpenModal] = useState(false);
  const [tableData, setTableData] = useState([
    { ID: 1, Name: "The Catcher in the Rye", Status: "available", Version: 1 },
    { ID: 2, Name: "To Kill a Mockingbird", Status: "borrowed", Version: 2 },
    { ID: 3, Name: "1984", Status: "available", Version: 1 },
    { ID: 4, Name: "The Great Gatsby", Status: "available", Version: 1 },
    {
      ID: 5,
      Name: "One Hundred Years of Solitude",
      Status: "borrowed",
      Version: 2,
    },
    { ID: 6, Name: "Brave New World", Status: "available", Version: 1 },
    { ID: 7, Name: "The Lord of the Rings", Status: "available", Version: 1 },
    { ID: 8, Name: "Pride and Prejudice", Status: "borrowed", Version: 2 },
    { ID: 9, Name: "The Hobbit", Status: "available", Version: 1 },
    {
      ID: 10,
      Name: "Harry Potter and the Sorcerer's Stone",
      Status: "available",
      Version: 1,
    },
  ]);

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
