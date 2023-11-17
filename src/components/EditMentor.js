import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EditMentor({ updateMentor, currentMentor, mentorIndex }) {
  const navigate = useNavigate()
  const [mentor, setMentor] = useState(currentMentor ? currentMentor : {
    name: "",
    email: "",
    mobileNumber: "",
    course: "",
  }
  )

  const [selectedCourse, setSelectedCourse] = useState(["Web Development", "Android Development", "Testing"])

  const handleUpdate = (e) => {
    e.preventDefault()
    if(mentor.mobileNumber.length == 10){
      updateMentor(mentor, mentorIndex);
      navigate('/')
    } else {
      alert("Enter valid credentials")
    }
   
  }

  const handleChange = (e) => {
    e.preventDefault()
    setMentor({ ...mentor, [e.target.name]: e.target.value });
    setSelectedCourse(selectedCourse)
  }

  return (
    <div className='container'>
      <h3 className='edit-text'>Edit Mentor</h3>
      <form className='edit-form'>

        <label className='edit-label'>Name:</label>
        <input className='edit-input' placeholder='Enter name' type='text' required name='name' onChange={handleChange} value={mentor.name} />


        <label className='edit-label'>Email:</label>
        <input className='edit-input' placeholder='Enter email' type='email' required name='email' onChange={handleChange} value={mentor.email} />


        <label className='edit-label'>Mobile Number:</label>
        <input className='edit-input' placeholder='Enter mobile number' type='number' maxLength={10} required name='mobileNumber' onChange={handleChange} value={mentor.mobileNumber} />


        <label className='edit-label'>Course:</label>
        <select className='edit-input' onChange={handleChange} value={mentor.course} name='course'>
          <option>{selectedCourse[0]}</option>
          <option>{selectedCourse[1]}</option>
          <option>{selectedCourse[2]}</option>
          <option>{selectedCourse[3]}</option>
        </select>
        <br />
        <button type='submit' onClick={handleUpdate} >
          Update
        </button>
      </form>
    </div>
  )
}

export default EditMentor