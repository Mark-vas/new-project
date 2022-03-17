import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const myEventsList = [];

const MyCalendar = (props) => {
  const [newEvent, setNewEvent] = useState({
    start: "",
    end: "",
    title: "",
  });

  const [allEvents, setAllEvents] = useState(myEventsList);

  function aaa(e) {
    let copyAllEvents = [...allEvents];
    let newFilterEvents = copyAllEvents.filter((fff) => {
      return e.target.value == fff.title;
    });
    debugger;
    setAllEvents([...newFilterEvents]);
  }

  function addEvent() {
    debugger;
    if (newEvent.start == "" || newEvent.end == "" || newEvent.title == "") {
      alert("err");
    } else setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div>
      <h1>Calendar H2O</h1>
      <h2>Add New Event</h2>
      <select
        required
        onChange={(e) => {
          setNewEvent({ ...newEvent, title: e.target.value });
        }}
      >
        <option value="">Type</option>
        <option value="House cleaning">House cleaning</option>
        <option value="Office cleaning">Office cleaning</option>
      </select>
      <DatePicker
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mmaa"
        selected={newEvent.start}
        placeholderText="Start"
        onChange={(date) => setNewEvent({ ...newEvent, start: date })}
      />
      <DatePicker
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mmaa"
        selected={newEvent.end}
        minDate={newEvent.start}
        placeholderText="End"
        onChange={(date) => setNewEvent({ ...newEvent, end: date })}
      />
      <button onClick={addEvent}>Add Event</button>
      <br />
      <select
        required
        onChange={(e) => aaa(e)}
        //   setNewEvent({ ...newEvent, title: e.target.value });
        // }}
      >
        <option value="">Type</option>
        <option value="House cleaning">House cleaning</option>
        <option value="Office cleaning">Office cleaning</option>
      </select>
      {/* <input
        onChange={(e) => aaa(e)}
        type="checkbox"
        id="House cleaning"
        value={"House cleaning"}
      />
      <label htmlFor="House cleaning">House cleaning</label>
      <br />
      <input
        onChange={(e) => aaa(e)}
        type="checkbox"
        id="Office cleaning"
        value={"Office cleaning"}
      />
      <label htmlFor="Office cleaning">Office cleaning</label>
      <br /> */}
      <button onClick={addEvent}>DEL</button>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, marginTop: 20 }}
      />
    </div>
  );
};

export default MyCalendar;
