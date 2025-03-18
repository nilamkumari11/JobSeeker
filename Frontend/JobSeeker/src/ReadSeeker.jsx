import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from './api/seeker-api.js';

const ReadSeeker = () => {
  const [seekData, setSeekData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const seekdata = await api.getSeekerApi();
      console.log("API Response Data:", seekdata.data);
      setSeekData(seekdata.data);
    } catch (error) {
      console.error("Error fetching seeker data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateSeeker = (id) => navigate(`/edit-seeker/${id}`);

  const deleteSeeker = (id) => {
    if (window.confirm("Are you sure you want to delete this seeker?")) {
      api.deleteSeeker(id).then(() => {
        getData(); // Refresh list after deletion
      }).catch((error) => {
        console.error("Error deleting seeker:", error);
      });
    }
  };

  return (
    <div>
      <h2>Seeker List</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Skills</th>
            <th>Job Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {seekData.length > 0 ? (
            seekData.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.serialNo}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.skills}</td>
                <td>{data.jobType}</td>
                <td>
                  <button onClick={() => updateSeeker(data.id)}>Update</button>
                  <button onClick={() => deleteSeeker(data.id)} style={{ marginLeft: '10px' }}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No seekers found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReadSeeker;
