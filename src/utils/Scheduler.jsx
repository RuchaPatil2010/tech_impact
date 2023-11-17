import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import './Scheduler.css';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { changeUserName } from '../components/action.js';

function Scheduler() {
    const dispatch = useDispatch()
    const [date, setDate] = useState('');
    const [start_time, setStartTime] = useState('');
    const [end_time, setEndTime] = useState('');
    const [error, setError] = useState();
    
    const handleCreateEvent = (event) =>{
        setDate(event.target.value);
        setStartTime(event.target.value);
        setEndTime(event.target.value);
        event.preventDefault();
        axios.post('http://localhost:8000/shifts/create', {
            title:"temp",
            date: date,
            startTime: start_time,
            endTime: end_time,
            // location: String,
            // req_skills: String,
            max_volunteers: 2,
            // assignedVolunteers: {type: [String], default:[] },
            // requests: {type: [String], default:[] }
        })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err)
          setError(err.message)
        })
    }

    let navigate=useNavigate();
    
    const event = axios.get('http://localhost:8000/shifts/shifts')
    .then(function (response) {
        console.log(response.data);
        // I need this data here ^^
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });

    return(        
        <div id="calendar">
        <div class="form">
            <dialog class="temp" id="temp">
                <button id="temp2" 
                        class="temp2" 
                        onClick={ function() {
                                                const modal = document.querySelector('#temp'); 
                                                modal.close()
                                }}>
                    &times;
                </button> 
                
                <br/>
                Date: <br></br>
                <input type="date" 
                       id="birthday" 
                       name="birthday" 
                       class="input"/><br/><br/>
                <div class="row">
                    <div class="column">
                        Start Time <br/>
                        <input type="time" class="input" name="start_time"/>
                    </div>
                    <div class="column">
                        End Time <br/>
                        <input type="time" class="input" name="end_time"/>
                    </div>
                </div>

                Location:<br/>
                <input class="input" name="location"/><br/><br/>
                
                Required Skills:<br/>
                <input class="input" name="required_skills"/><br/><br/>
                
                Maximum Number of Volunteers:<br/>
                <input type="number" class="input" name="volunteers"/><br/><br/>
                
                Organization:<br/>
                <input class="input" name="organisation"/><br/><br/>
                
                Description:<br/>
                <input class="input" name="description"/><br/><br/><br/>
                
                <button class="add" onClick={function(event) {handleCreateEvent(event); 
                                                const modal = document.querySelector('#temp'); 
                                                modal.close();}}>ADD</button> <br/>
            </dialog>
        </div>
        <div class="fullcalendar">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={'timeGridWeek'}
                customButtons={{
                    myCustomButton: {
                      text: 'Create a New Shift',
                      click: function() {
                        const modal = document.querySelector('#temp');
                        modal.show();
                      }
                    }
                  }}
                headerToolbar={{
                    start:"myCustomButton",
                    center:"title",
                    end:"dayGridMonth,timeGridWeek,timeGridDay"
                }}
                footerToolbar={{
                    center:"today prevYear,prev,next,nextYear",
                }}
                buttonIcons={{
                    prev: 'chevron-left',
                    next: 'chevron-right',
                    prevYear: 'chevrons-left', // double chevron
                    nextYear: 'chevrons-right'
                }}
                height={"100vh"}
                selectable={true}
                dateClick={(info) => {
                    const modal = document.querySelector('#temp');
                    console.log(info);
                    modal.show();
                }}
                events={event}
                eventClick={ function(info) {
                    const modal = document.querySelector('#temp');
                    modal.show();
                  }}
                
                eventDidMount={(info) => {
                    return new bootstrap.Popover(info.el, {
                        title: info.event.title,
                        placement: "auto",
                        trigger: "hover",
                        customClass: "popoverStyle",
                        content: info.event.extendedProps.description,
                        html: true,
                    });
                    
                }}
            />
            </div>
        </div>

    )
}
export default Scheduler;