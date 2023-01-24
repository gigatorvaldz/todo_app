import * as CalendarAPI from "./Calendar"
import classnames from 'classnames';
import "./Calendar.css"
import StandartButton from "../StandartButton/StandartButton";
import { useState } from "react";

function Calendar() {

    let defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
    };

    let currentDate = new Date();
    const [calendarDate, setCalendarDate] = useState({year: currentDate.getFullYear(), month: currentDate.getMonth()});
    
    let selectedDate = null;

    let monthData = CalendarAPI.getMonthData(calendarDate.year, calendarDate.month);

    let prevYear = () => {
        setCalendarDate({...calendarDate, year: calendarDate.year-1})
    }
    let nextYear = () => {
        setCalendarDate({...calendarDate, year: calendarDate.year+1})
    }

    return (
        <div>
            <div>
            <StandartButton onClick={prevYear}>{"<"}</StandartButton>
            <select onChange={el => setCalendarDate({...calendarDate, month: defaultProps.monthNames.findIndex(i => i === el.target.value)})}>
                {
                    defaultProps.monthNames.map( monthName => <option key={monthName}>{`${monthName} (${calendarDate.year})`}</option>)
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
                                        className={classnames('day', {
                                            'today': CalendarAPI.areEqual(date, currentDate),
                                            'selected': CalendarAPI.areEqual(date, selectedDate)
                                        })}
                                    >{date.getDate()}</td>
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