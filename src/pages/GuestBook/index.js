import React, { useState } from "react";
import { useSelector } from "react-redux";

import entries from '../../utils/GBEntries'


const GuestBook = () => {

  const theme = useSelector((state) => state.changeTheme.theme);
  const padding = "px-[25px] sm:px-[40px] xl:px-[55px] 3xl:px-[60px] ";

  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (event) => {

    event.preventDefault();
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { timeZone: 'America/New_York' });
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'America/New_York' });
    console.log(`${date} ${time} EST`);
    const newEntry = { 
      name: formData.name, 
      message: formData.message,
      date: date,
      time: time + " EST"
     };
    entries.push(newEntry);
    setFormData({ name: '', message: '' });
  };

  console.log(entries)

  return (
    <>
      <div className={`min-h-[100vh] mx-auto ${padding}`}>
        <h1 className={`text-[55px] sm:text-[72px] md:text-[90px] text-${theme}-special `}>
          Guest Book
        </h1>

        <hr className={`border-${theme}-special border-[1.5px] rounded mb-8`} />
        <hr className={`border-${theme}-special border-[1.5px] rounded  mb-8`} />


        <div className={` bg-${theme}-med text-${theme}-dark rounded-lg p-5`} >
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4" >
            <label>
              Name:
              <input
                type="text"
                value={formData.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
              />
            </label>
            <label>
              Message:
              <textarea
                value={formData.message}
                onChange={(event) =>
                  setFormData({ ...formData, message: event.target.value })
                }
              />
            </label>
            <button type="submit">Submit</button>
          </form>

        </div>

        <div className={` bg-${theme}-med text-${theme}-dark my-5`} >

          {entries.map((e) => {

            return (
              <>
                {e.name}<br />
                {e.message}<br />
                {e.date}<br />
                {e.time}<br /><br />
              </>
            )
          }
          )}

        </div>




      </div>
    </>
  );
}
export default GuestBook;