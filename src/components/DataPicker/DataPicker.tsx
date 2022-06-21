import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

interface Props {
    onChange: (value: Date) => void;

}

const Example = ({onChange}: Props) => {
    const [startDate, setStartDate] = useState(new Date());
    const oDateChange = (date: Date) => {
        setStartDate(date)
        onChange(date)
    }
    return (
        <DatePicker dateFormat='yyyy/MM/dd' selected={startDate} onChange={oDateChange} />
    );
};

export default Example;
