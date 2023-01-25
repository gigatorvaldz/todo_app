import * as CalendarAPI from "./Calendar"
import classnames from 'classnames';
import "./Calendar.css"
import StandartButton from "../StandartButton/StandartButton";
import { useEffect, useState } from "react";
import CalendarButton from "./CalendarButton/CalendarButton";

function Calendar({selectedDate, setSelectedDate, setSelectedFullDate, selectedFullDate}) {

    let defaultProps = {
        date: new Date(),
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
    };

    let currentDate = new Date();
    const [calendarDate, setCalendarDate] = useState({year: currentDate.getFullYear(), month: currentDate.getMonth()});

    let monthData = CalendarAPI.getMonthData(calendarDate.year, calendarDate.month);

    let prevYear = () => {
        setCalendarDate({...calendarDate, year: calendarDate.year-1})
    }
    let nextYear = () => {
        setCalendarDate({...calendarDate, year: calendarDate.year+1})
    }

    return (
        <div className="CalendarWrapper">
            {calendarDate.year}
            <div className="calendarController">
                <StandartButton onClick={prevYear}>{"<"}</StandartButton>
                <select onChange={el => setCalendarDate({...calendarDate, month: defaultProps.monthNames.findIndex(i => i === el.target.value)})}>
                    {
                        defaultProps.monthNames.map( monthName => <option key={monthName}>{monthName}</option>)
                    }
                </select>
                <StandartButton onClick={nextYear}>{">"}</StandartButton>
            </div>
            <table>
                <thead>
                    <tr>
                        {
                            defaultProps.weekDayNames.map( el => <td key={el}>{el}</td> )
                        }
                    </tr>
                </thead>    
                <tbody>
                    {
                    monthData.map((week, index) =>
                            <tr key={index} className="week">
                                {week.map((date, index) => date ?
                                    <td
                                    key={index}
                                    ><CalendarButton onClick={e => {setSelectedDate(e.target.innerText); setSelectedFullDate(date)}} month={calendarDate.month} year={calendarDate.year}><label
                                    className={classnames('day', {
                                        'today': CalendarAPI.areEqual(date, currentDate),
                                        'selected': CalendarAPI.areEqual(date, selectedFullDate)
                                    })}
                                    >{date.getDate()}</label></CalendarButton></td>
                                    :
                                    <td key={index} />
                                )}
                            </tr> 
                        )
                        }
                </tbody>
            </table>
        </div>
    );
  }

export default Calendar;