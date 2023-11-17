import React, { useState } from 'react'
import Dashboard from './Dashboard'
import { Route, Routes, useNavigate } from 'react-router-dom'
import CreateStudent from './CreateStudent'
import CreateMentor from './CreateMentor'

import AssignStudent from './AssignStudent'
import EditStudent from './EditStudent'
import EditMentor from './EditMentor'

function Topbar() {
    const navigate = useNavigate()
    const students = [
        {
            id: "1",
            name: "Student1",
            email: "student1@gmail.com",
            mobileNumber: "1111111111",
            course: "Web Development",
            mentor: "Mentor1"
        },
        {
            id: "2",
            name: "Student2",
            email: "student2@gmail.com",
            mobileNumber: "222222222",
            course: "Testing",
            mentor: "Mentor3"
        },
        {
            id: "3",
            name: "Student3",
            email: "student3@gmail.com",
            mobileNumber: "333333333",
            course: "Android Development",
            mentor: "Mentor2"
        },
        {
            id: "4",
            name: "Student4",
            email: "student4@gmail.com",
            mobileNumber: "4444444444",
            course: "Web Development",
            mentor: "Mentor1"
        },
    ]

    const mentors = [{
        id: "1",
        name: "Mentor1",
        email: "mentor1@gmail.com",
        mobileNumber: "1111111111",
        course: "Web Development",
        students: ["Student1", "Student4"]
    },
    {
        id: "2",
        name: "Mentor2",
        email: "mentor2@gmail.com",
        mobileNumber: "2222222222",
        course: "Android Development",
        students: ["Student3"]
    },
    {
        id: "3",
        name: "Mentor3",
        email: "mentor3@gmail.com",
        mobileNumber: "3333333333",
        course: "Testing",
        students: ["Student2"]
    }
    ]

    const [studentList, setStudentList] = useState([...students])
    const [mentorList, setMentorList] = useState([...mentors])
    const [currentStudent, setCurrentStudent] = useState()
    const [currentMentor, setCurrentMentor] = useState()
    const [studentIndex, setStudentIndex] = useState()
    const [mentorIndex, setMentorIndex] = useState()

    const addStudent = (student) => {
        let newStudent = { ...student };
        newStudent.id = `${studentList.length + 1}`;
        setStudentList([...studentList, newStudent])
    }
    console.log(studentList)


    const addMentor = (mentor) => {
        let newMentor = { ...mentor }
        newMentor.id = `${mentorList.length + 1}`
        setMentorList([...mentorList, newMentor])
        console.log(mentorList)
    }
    console.log(mentorList)

    const deleteStudent = (id) => {
        const currentStudentList = [...studentList];
        const newStudentList = currentStudentList.filter((student, index) => index !== id)
        setStudentList(newStudentList)
    }

    const deleteMentor = (id) => {
        const currentMentorList = [...mentorList]
        const newMentorList = currentMentorList.filter((mentor, index) => index !== id)
        setMentorList(newMentorList)
    }

    const editStudent = (student, studentIndex) => {
        setCurrentStudent(student)
        setStudentIndex(studentIndex)
        console.log(student)
    }

    const updateStudent = (updatedStudent) => {
        console.log(studentIndex);
        const StudentList = [...studentList]
        StudentList[studentIndex] = { ...updatedStudent }
        console.log(StudentList)
        setStudentList([...StudentList])
    }

    const editMentor = (mentor, mentorIndex) => {
        setCurrentMentor(mentor)
        setMentorIndex(mentorIndex)
        console.log(mentor)
    }

    const updateMentor = (updatedMentor) => {
        const MentorList = [...mentorList]
        MentorList[mentorIndex] = { ...updatedMentor }
        setMentorList([...MentorList])
    }

    const assignStudent = (Student, mentor) => {
        // console.log(Student, mentor)
        const updatedStudents = studentList.map((student) => {
            // console.log(student.id,student.id == Student.id,Student.id)
            if (student.id == Student.id) {
                const a = { ...student, mentor: mentor.name };
                // console.log(a)
                return a;
            } else {
                return student;
            }

        });
        // console.log(updatedStudents)
        setStudentList(updatedStudents);
    };

    const assignMentor = (Mentor, student) => {
        console.log(Mentor, student)
        const updatedMentors = mentorList.map((mentor) => {
            if (mentor.id == Mentor.id) {
                return { ...mentor, students: [...mentor?.students, student.name] }
            }
            return mentor
        })
        console.log(updatedMentors)
        setMentorList(updatedMentors)
    }


    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id='content'>
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    {/* <!-- Sidebar Toggle (Topbar) --> */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

                    {/* <!-- Topbar Search --> */}
                    <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* <!-- Topbar Navbar --> */}
                    <ul className="navbar-nav ml-auto">

                        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </a>
                            {/* <!-- Dropdown - Messages --> */}
                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Alerts --> */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-bell fa-fw"></i>
                                {/* <!-- Counter - Alerts --> */}
                                <span className="badge badge-danger badge-counter">3+</span>
                            </a>
                            {/* <!-- Dropdown - Alerts --> */}
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 className="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-primary">
                                            <i className="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 12, 2019</div>
                                        <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-success">
                                            <i className="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="mr-3">
                                        <div className="icon-circle bg-warning">
                                            <i className="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Messages --> */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-envelope fa-fw"></i>
                                {/* <!-- Counter - Messages --> */}
                                <span className="badge badge-danger badge-counter">7</span>
                            </a>
                            {/* <!-- Dropdown - Messages --> */}
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 className="dropdown-header">
                                    Message Center
                                </h6>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                            alt="..." />
                                        <div className="status-indicator bg-success"></div>
                                    </div>
                                    <div className="font-weight-bold">
                                        <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div className="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                            alt="..." />
                                        <div className="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div className="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                            alt="..." />
                                        <div className="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <div className="dropdown-list-image mr-3">
                                        <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                            alt="..." />
                                        <div className="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                        </li>

                        <div className="topbar-divider d-none d-sm-block"></div>

                        {/* <!-- Nav Item - User Information --> */}
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img className="img-profile rounded-circle"
                                    src="img/undraw_profile.svg" />
                            </a>
                            {/* <!-- Dropdown - User Information --> */}
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
                <Routes>
                    <Route path='/' element={<Dashboard studentList={studentList} mentorList={mentorList} deleteStudent={deleteStudent} deleteMentor={deleteMentor} editStudent={editStudent} editMentor={editMentor} mentors={mentors} />} />
                    <Route path='/create-student' element={<CreateStudent addStudent={addStudent} />} />
                    <Route path='/create-mentor' element={<CreateMentor addMentor={addMentor} />} />
                    <Route path='/assign-student' element={<AssignStudent assignStudent={assignStudent} studentList={studentList} mentorList={mentorList} assignMentor={assignMentor} />} />
                    <Route path='/edit-student/:id' element={<EditStudent students={students} updateStudent={updateStudent} currentStudent={currentStudent} studentIndex={studentIndex} />} />
                    <Route path='/edit-mentor/:id' element={<EditMentor mentor={mentors} updateMentor={updateMentor} currentMentor={currentMentor} mentorIndex={mentorIndex} />} />
                </Routes>

            </div>
        </div>

    )
}

export default Topbar