import React, { useState } from 'react';
import styles from './modal.module.css';
import { ImCross } from "react-icons/im";
import CustomButton from '../Components/CustomButton';

const CustomModal = ({ onClose, formName, formData, setFormData, handleSubmit }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.closeBtn} onClick={onClose}>
                    <ImCross />
                </span>
                {formName === 'books' ?
                 <form>
                    <label>
                        ID:
                        <input
                            type="text"
                            name="ID"
                            value={formData.ID}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Status:
                        <input
                            type="text"
                            name="Status"
                            value={formData.Status}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Version:
                        <input
                            type="text"
                            name="Version"
                            value={formData.Version}
                            onChange={handleChange}
                        />
                    </label>
                    <CustomButton btnLabel={'Submit'} onClick={handleSubmit} />
                </form> 
                :
                formName === 'records' ? 
                    <form>
                        <label>
                            ID:
                            <input
                                type="text"
                                name="ID"
                                value={formData.ID}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="bookName"
                                value={formData.bookName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Status:
                            <input
                                type="text"
                                name="Status"
                                value={formData.Status}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Student ID:
                            <input
                                type="text"
                                name="studentId"
                                value={formData.studentId}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Issue Date:
                            <input
                                type="text"
                                name="issueDate"
                                value={formData.issueDate}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Return Date:
                            <input
                                type="text"
                                name="returnDate"
                                value={formData.returnDate}
                                onChange={handleChange}
                            />
                        </label>
                        <CustomButton btnLabel={'Submit'} onClick={handleSubmit} />
                    </form> :
                        <form>
                            <label>
                                ID:
                                <input
                                    type="text"
                                    name="ID"
                                    value={formData.ID}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Department:
                                <input
                                    type="text"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Roll Number:
                                <input
                                    type="text"
                                    name="rollNo"
                                    value={formData.rollNo}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Year:
                                <input
                                    type="text"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                />
                            </label>
                            <CustomButton btnLabel={'Submit'} onClick={handleSubmit}/>
                        </form>}
            </div>
        </div>
    );
};

export default CustomModal;
