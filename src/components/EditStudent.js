import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EditStudent({ updateStudent, currentStudent, studentIndex }) {
    console.log(currentStudent)
    const navigate = useNavigate()
    const [student, setStudent] = useState(currentStudent ? currentStudent : {
        name: "",
        email: "",
        mobileNumber: "",
        course: "",
        mentor: ""
    })
    const [selectedCourse, setSelectedCourse] = useState(["Select your course", "Web Development", "Android Development", "Testing"])

    const handleUpdate = (e) => {
        e.preventDefault();
        if(student.mobileNumber.length == 10){
            updateStudent(student, studentIndex);
            navigate('/')
            console.log(student)
        }else {
            alert("Enter valid credentials")
        }
       
        

    }

    const handleChange = (e) => {
        e.preventDefault()
        setStudent({ ...student, [e.target.name]: e.target.value });
        setSelectedCourse(selectedCourse)
    }

    return (
        <div className='container'>
            <h3 className='edit-text'>Edit Student</h3>
            <form className='edit-form'>

                <label className='edit-label'>Name:</label>
                <input className='edit-input' placeholder='Enter name' type='text' required name='name' onChange={handleChange} value={student.name} />


                <label className='edit-label'>Email:</label>
                <input className='edit-input' placeholder='Enter email' type='email' required name='email' onChange={handleChange} value={student.email} />


                <label className='edit-label'>Mobile Number:</label>
                <input className='edit-input' placeholder='Enter mobile number' type='number' maxLength={10} required name='mobileNumber' onChange={handleChange} value={student.mobileNumber} />


                <label className='edit-label'>Course:</label>
                <select className='edit-input' onChange={handleChange} value={student.course} name='course'>
                    <option>{selectedCourse[0]}</option>
                    <option>{selectedCourse[1]}</option>
                    <option>{selectedCourse[2]}</option>
                    <option>{selectedCourse[3]}</option>
                </select>

                <button type='submit' onClick={handleUpdate} >
                    Update
                </button>
            </form>
        </div>
    )
}

export default EditStudent