import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './style.css'; // Import CSS file

const MyCalendar = () => {
  // Define holiday data
  const holidays = [
    { date: new Date(2024, 0, 1), name: 'New Year' },
    { date: new Date(2024, 2, 1), name: 'Cultural Diversity Day' },
    { date: new Date(2024, 2, 9), name: 'Environmental Awareness Day' },
    // Add more holidays as needed
  ];

  // Function to check if a date is a holiday
  const isHoliday = (date) => {
    return holidays.some(holiday =>
      date.getFullYear() === holiday.date.getFullYear() &&
      date.getMonth() === holiday.date.getMonth() &&
      date.getDate() === holiday.date.getDate()
    );
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Calendar
        className="custom-calendar"
        calendarClassName="custom-calendar"
        tileClassName={({ date }) => isHoliday(date) ? 'custom-holiday-tile' : null}
        value={selectedDate}
        onChange={setSelectedDate}
        tileContent={({ date }) => {
          if (isHoliday(date)) {
            return <div className="holiday-marker">{holidays.find(holiday => holiday.date.getTime() === date.getTime()).name}</div>; // Custom marker for holidays
          }
        }}
      />
    </div>
  );
};

export default MyCalendar;
