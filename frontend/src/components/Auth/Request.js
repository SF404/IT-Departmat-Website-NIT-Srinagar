import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Request.css";
function SelectorForm() {
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/getmails/");
        setOptions(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching options", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectorChange = (e) => {
    console.log(e.target);
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(selectedOption);
    // e.preventDefault();
    // try {
    //   const response = await axios.get("http://localhost:8000/", {
    //     email: selectedOption,
    //   });
    //   //   console.log(selectedOption.value);
    // } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="label">Select an Option:</label>
      <div>
        {isLoading ? (
          <p>Loading options...</p>
        ) : Array.isArray(options) ? (
          <select value={selectedOption.email} onChange={handleSelectorChange}>
            <option value="">-- Please Select --</option>
            {options.map((option, index) => (
              <option key={index} value={option.email}>
                {option.email}
              </option>
            ))}
          </select>
        ) : (
          <p>Error loading options.</p>
        )}
        <input
          className={selectedOption.user === null ? "green" : "red"}
          readOnly
        />
      </div>

      <div>
        <button
          type="submit"
          className="button"
          //   disabled={selectedOption.user !== null}
        >
          Send Request
        </button>
      </div>
    </form>
  );
}

export default SelectorForm;
