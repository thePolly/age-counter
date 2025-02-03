import React from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateSelector = ({ birthDate, setBirthDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
   <DatePicker
  label="Choose your birth date"
  value={birthDate}
  onChange={(newDate) => setBirthDate(newDate)}
  slotProps={{ textField: { InputLabelProps: { style: { color: "#f8fafc" } } } }}
  sx={{
    "& .MuiInputBase-input": {
      backgroundColor: "#1e293b",
      color: "#f8fafc",
      borderRadius: "15px",
      padding: "10px",
      textAlign: "center",
    },
    "& .MuiSvgIcon-root": {
      color: "#175d7c",
    },
 
  }}
/>
    </LocalizationProvider>
  );
};

export default DateSelector;
