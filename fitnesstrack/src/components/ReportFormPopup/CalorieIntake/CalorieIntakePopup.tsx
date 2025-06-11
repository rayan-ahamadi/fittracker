import React, { useState } from 'react';
import '../popup.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DatePicker from 'react-horizontal-datepicker';
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface CalorieIntakePopupProps {
  setShowCalorieIntakePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalorieIntakePopup: React.FC<CalorieIntakePopupProps> = ({ setShowCalorieIntakePopup }) => {
  const color = '#ffc20e';
  const [date, setDate] = useState<Date>(new Date());
  const [timeValue, setTimeValue] = useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

  const selectedDay = (val: any) => {
    const newDate = val.toDate?.() || new Date(val);
    setDate(newDate);
    console.log(newDate.toLocaleDateString('fr-FR'));
  };

  return (
    <div className="popupout">
      <div className="popupbox">
        <button
          className="close"
          onClick={() => setShowCalorieIntakePopup(false)}
          aria-label="Fermer la fenêtre"
        >
          <AiOutlineClose />
        </button>

        <DatePicker
          getSelectedDay={selectedDay}
          endDate={100}
          selectDate={new Date()}
          labelFormat="MMMM"
          color={color}
        />

        <TextField
          id="food-name"
          label="Food item name"
          variant="outlined"
          color="warning"
          fullWidth
          margin="normal"
        />
        <TextField
          id="food-amount"
          label="Food item amount (in gms)"
          variant="outlined"
          color="warning"
          fullWidth
          margin="normal"
        />

        <div className="timebox">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeClock value={timeValue} onChange={setTimeValue} />
          </LocalizationProvider>
        </div>

        <Button variant="contained" color="warning">
          Save
        </Button>

        <div className="hrline"></div>

        <div className="items">
          {[
            { name: 'Apple', amount: '100 gms' },
            { name: 'Banana', amount: '200 gms' },
            { name: 'Rice', amount: '300 gms' },
          ].map((item, index) => (
            <div className="item" key={index}>
              <h3>{item.name}</h3>
              <h3>{item.amount}</h3>
              <button aria-label={`Delete ${item.name}`}>
                <AiFillDelete />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalorieIntakePopup;
