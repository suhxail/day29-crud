import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AssignStudent({ assignStudent, studentList, mentorList, assignMentor }) {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [mentor, setMentor] = useState(null);

  const handleAssign = () => {
    console.log(student,mentor)
    if (student && mentor) {
      assignStudent(student, mentor);
      assignMentor(mentor, student);
      navigate('/');
    } else {
      // Handle error: Student or mentor not selected
      console.error('Please select a student and a mentor.');
    }
  };

  const handleStudentChange = (e) => {
    const selectedStudent = studentList.find((s) => s.id == e.target.value);
    setStudent(selectedStudent);
  };

  const handleMentorChange = (e) => {
    const selectedMentor = mentorList.find((m) => m.id == e.target.value);
    setMentor(selectedMentor);
  };

  return (
    <div className='container'>
      <h4 className='dashboard-text'>Assign student to mentor</h4>
      <div className='create-form'>
      <div>
        <p className='create-label'>Mentor</p>
        <select className='create-input' onChange={handleMentorChange}>
          <option>Select mentor</option>
          {mentorList.map((mentor) => (
            <option key={mentor.id} value={mentor.id}>
              {mentor.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className='create-label'>Student</p>
        <select className='create-input' onChange={handleStudentChange}>
          <option>Select student</option>
          {studentList.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div>
        <button onClick={handleAssign}>Assign student</button>
      </div>
      </div>
    </div>
  );
}

export default AssignStudent;

