import { useState } from 'react';
import { createSeeker } from './api/seeker-api';
import { useNavigate } from 'react-router-dom';

const CreateSeeker = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [jobType, setJobType] = useState('');
  const [serialNo, setSerialNo] = useState('');

  const navigator = useNavigate();

  const saveSeeker = async (e) => {
    e.preventDefault(); // Prevent page reload
  
    // Debugging: Check if values are correctly captured
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Skills:", skills);
    console.log("JobType:", jobType);
    console.log("SerialNo:", serialNo);
  
    const seeker = { name, email, skills, jobType, serialNo };
    console.log("Submitting Seeker Object:", seeker);
  
    try {
      const response = await createSeeker(seeker); // Wait for the API call
      console.log("API Response:", response.data);
      navigator("/read"); // Navigate only after successful creation
    } catch (error) {
      console.error("Error creating seeker:", error);
    }
  };
  

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <h2 className="text-center">Add Job Seeker</h2>
          <div className="card-body">
            <form onSubmit={saveSeeker}>
              <div className="form-group mb-2">
                <label className="form-label">Serial Number</label>
                <input
                  type="text"
                  placeholder="Enter Serial Number"
                  value={serialNo}
                  className="form-control"
                  onChange={(e) => setSerialNo(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Skills</label>
                <input
                  type="text"
                  placeholder="Enter Skills (e.g., Java, React)"
                  value={skills}
                  className="form-control"
                  onChange={(e) => setSkills(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Job Type</label>
                <select
                  className="form-control"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  required
                >
                  <option value="">Select Job Type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              <button type="submit"  onClick={saveSeeker} className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSeeker;
