import axios from "axios";

export async function loginApi(email, password) {
  return axios.post(`${process.env.REACT_APP_API}/login`, {
    email,
    password,
  });
}

export async function signupApi(name, email, password) {
  return axios.post(`${process.env.REACT_APP_API}/signup`, {
    name,
    email,
    password,
  });
}

export async function getAllBooks() {
  return axios.get(`${process.env.REACT_APP_API}/books`);
}

export async function createBook(id, name, status, version) {
  return axios.post(`${process.env.REACT_APP_API}/create/book`, {
    id,
    name,
    status,
    version,
  });
}

export async function updateBook(_id) {
  return axios.put(`${process.env.REACT_APP_API}/update/book`, { _id });
}

export async function deleteBook(id) {
  return axios.delete(
    `${process.env.REACT_APP_API}/delete/book`,
    JSON.stringify({ id })
  );
}

export async function getAllStudents() {
  return axios.get(`${process.env.REACT_APP_API}/students`);
}

export async function createStudent(id, department, name, roll_no, year) {
  return axios.post(`${process.env.REACT_APP_API}/create/student`, {
    id,
    department,
    name,
    roll_no,
    year,
  });
}

export async function updateStudent(_id) {
  return axios.put(`${process.env.REACT_APP_API}/update/student`, { _id });
}

export async function deleteStudent(id) {
  return axios.delete(`${process.env.REACT_APP_API}/delete/student`, { id });
}

export async function getAllRecords() {
  return axios.get(`${process.env.REACT_APP_API}/records`);
}

export async function createRecord(
  id,
  name,
  status,
  studentId,
  issueDate,
  returnDate
) {
  return axios.post(`${process.env.REACT_APP_API}/create/record`, {
    id,
    name,
    status,
    studentId,
    issueDate,
    returnDate,
  });
}

export async function updateRecord(_id) {
  return axios.put(`${process.env.REACT_APP_API}/update/record`, { _id });
}

export async function deleteRecord(id) {
  return axios.delete(`${process.env.REACT_APP_API}/delete/record`, { id });
}
