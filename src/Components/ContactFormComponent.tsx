"use client";

import { SendMessage } from '@/app/utils/DataServices';
import React, { useEffect, useState } from 'react';

const ContactFormComponent = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    console.log(name, email, message);
  }, [name, email, message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await SendMessage(name, email, message);
      console.log(response);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <form id='Contact' onSubmit={handleSubmit} className='container flex flex-col items-center'>
      <header>
        <h2 className='text-4xl text-white text-center mb-12'>Projects</h2>
      </header>
      <div className='bg-gray-500 rounded-md'>
        <div className='gird grid-cols-2 grid-rows-1 justify-center items-center w-full columns-2 p-4'>
          <section className='flex flex-col gap-2 h-64 justify-start'>
            <label htmlFor="">Name</label>
            <input
              className='w-64 p-1 rounded-md'
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
              type="text"
            />
            <label htmlFor="">Email</label>
            <input
              className='w-64 p-1 rounded-md'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              type="text"
            />
            <div className='h-full flex justify-center items-center'>
              <button type='submit' className='w-fit p-2 bg-blue-300 rounded-md'>Submit</button>
            </div>
          </section>
          <section className='flex flex-col gap-2 h-64 justify-start'>
            <label htmlFor="">Message</label>
            <textarea
              className='w-64 h-full p-1'
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </section>
        </div>
      </div>
    </form>
  );
};

export default ContactFormComponent;
