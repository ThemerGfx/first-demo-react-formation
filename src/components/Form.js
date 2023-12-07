import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./Table";

export default function Form() {
  const navigate = useNavigate();

  // Manage states
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    id: 0,
  });
  const [tableData, setTableData] = useState([]);
  const [showData, setShowData] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([
      ...tableData,
      {
        ...formData,
        id: tableData.length + 1,
      },
    ]);
    setFormData({
      name: "",
      job: "",
      id: 0,
    });
  };

  // Navigate to home
  const goToHome = () => {
    navigate("/");
  };

  // Handle show table
  const showDataState = () => {
    setShowData(!showData);
  };

  return (
    <>
      {!showData ? (
        <div className="p-4 bg-white rounded-lg shadow-md w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="job"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Job
              </label>
              <input
                type="text"
                id="job"
                name="job"
                value={formData.job}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your job"
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex gap-5">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-600"
                >
                  Submit User
                </button>

                <button
                  onClick={showDataState}
                  className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-gray-600"
                >
                  Show Data
                </button>
              </div>

              <button
                onClick={goToHome}
                className="justify-end bg-gray-600 rounded-full text-white px-4 py-2 focus:outline-none hover:bg-blue-500"
              >
                Home
              </button>
            </div>
          </form>
        </div>
      ) : (
        <Table dataTable={tableData} />
      )}
    </>
  );
}
