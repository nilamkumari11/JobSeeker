import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSeekerById, updateSeeker } from "./api/seeker-api";

const UpdateSeeker = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const navigate = useNavigate();

  // Initialize state variables
  const [serialNo, setSerialNo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [jobType, setJobType] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch seeker data if the id exists (edit mode)
      getSeekerById(id)
        .then((response) => {
          const { serialNo, name, email, skills, jobType } = response.data;
          setSerialNo(serialNo);
          setName(name);
          setEmail(email);
          setSkills(skills);
          setJobType(jobType);
          setLoading(false);
        })
        .catch((err) => {
          setError("Error fetching seeker data");
          setLoading(false);
        });
    } else {
      setLoading(false); // If there's no 'id', it's for adding a new seeker
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const seekerData = { serialNo, name, email, skills, jobType };

    if (id) {
      updateSeeker(seekerData, id)
        .then((response) => {
          console.log("Updated Seeker:", response.data);
          navigate("/read");
        })
        .catch((err) => console.error("Error updating seeker:", err));
    }

    console.log("Seeker object:", JSON.stringify(seekerData));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <div className="card-body">
            <h2>{id ? "Update Seeker" : "Add Seeker"}</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label className="form-label">Serial Number</label>
                <input
                  type="text"
                  placeholder="Enter Serial Number"
                  name="serialNo"
                  value={serialNo}
                  className="form-control"
                  onChange={(e) => setSerialNo(e.target.value)}
                  disabled={id} // Disable serialNo input in update mode
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={name}
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Skills</label>
                <input
                  type="text"
                  placeholder="Enter Skills"
                  name="skills"
                  value={skills}
                  className="form-control"
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Job Type</label>
                <input
                  type="text"
                  placeholder="Enter Job Type"
                  name="jobType"
                  value={jobType}
                  className="form-control"
                  onChange={(e) => setJobType(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-success">
                {id ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSeeker;
