import * as CalendarAPI from "./Calendar"
import classnames from 'classnames';
import "./Calendar.css"
import StandartButton from "../StandartButton/StandartButton";
import { useState } from "react";
import CalendarButton from "./CalendarButton/CalendarButton";
import { useTranslation } from "react-i18next";
import "../../Utils/i18next";

function Calendar({ setSelectedDate, setSelectedFullDate, selectedFullDate}) {

    const { t } = useTranslation();
    let defaultProps = {
        date: new Date(),
        monthNames: [t("calendar.January"), t("calendar.February"), t("calendar.March"), t("calendar.April"), t("calendar.May"), t("calendar.June"), t("calendar.July"), t("calendar.August"), t("calendar.September"), t("calendar.October"), t("calendar.November"), t("calendar.December")],
        weekDayNames: [t("calendar.Mo"), t("calendar.Tu"), t("calendar.We"), t("calendar.Th"), t("calendar.Fr"), t("calendar.Sa"), t("calendar.Su")],
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
            
            <select className="select" onChange={el => setCalendarDate({...calendarDate, month: defaultProps.monthNames.findIndex(i => i === el.target.value)})}>
                    {
                        defaultProps.monthNames.map( monthName => <option key={monthName}>{monthName}</option>)
                    }
                </select>
            <div className="calendarController">
                <StandartButton onClick={prevYear}>{"<"}</StandartButton>
                    <p className="yearTitle">{calendarDate.year}</p>
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
                                    ><CalendarButton className={classnames('day', {
                                        'today': CalendarAPI.areEqual(date, currentDate),
                                        'selected': CalendarAPI.areEqual(date, selectedFullDate)
                                    })} onClick={e => {setSelectedDate(e.target.innerText); setSelectedFullDate(date)}} month={calendarDate.month} year={calendarDate.year}><label
                                    
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