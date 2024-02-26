import React, { useState } from 'react';

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the specified endpoint
      const response = await fetch("https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      // Handle response as needed
      if (response.ok) {
        console.log("Form submitted successfully!");
        // Clear form fields after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' value={formData.message} onChange={handleChange}></textarea>
        <button type="submit" className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
