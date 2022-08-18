import { getByPlaceholderText } from '@testing-library/react';
import React, { useState } from 'react'
import './Contact.css';
const Contact = () => {
  const [Head, setHead] = useState("");
  const [Description, setDescription] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { Head: Head, Description: Description };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }

  return (
    <>
      <div className="center">
        <h1>Add Blog</h1>
        <form method="post" onSubmit={submitForm}>
          <div className="txt_field">
            <input type="textarea" required id="Head" name="Head" autoComplete='off'
              value={Head}
              onChange={(e) => setHead(e.target.value)}

            />
            <span></span>
            <label>Enter heading</label>
          </div>
          <div className="txt_field">
            <input type="text" required id="Head" name="Head" autoComplete='off'
              requiredvalue={Description}
              onChange={(e) => setDescription(e.target.value)}

            />
            <span></span>
            <label>Enter Description </label>
          </div>
         
           
          <form action="#" className='browser'>
            <p>browser File to upload</p>
          </form>


          <div className="pass"></div>
          <input type="submit" value="Upload Blog" />
          
          <div className="signup_link">
            For any query?
          </div>


        </form>

      </div>

    </>
  )
}

export default Contact