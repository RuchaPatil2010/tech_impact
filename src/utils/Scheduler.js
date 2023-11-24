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
import moment from 'moment';
import {backend_url} from "./constants";

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
        axios.post(backend_url+'/shifts/create', {
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
    
    const event_data2 = axios(backend_url+'/shifts/shifts',{
        method:'get',
        withCredentials: true,
    }).then(function (response) {
        console.log(response.data);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
    const event_data = [
        {
            "_id": "6558315d241ca9bb0f41d134",
            "title": "test",
            "date": "2023-11-12T05:00:00.000Z",
            "startTime": 800,
            "endTime": 1200,
            "max_volunteers": 2,
            "assignedVolunteers": [],
            "requests": [],
            "__v": 0
        },
        {
            "_id": "6558315d241ca9bb0f41d134",
            "title": "test",
            "date": "2023-11-13T05:00:00.000Z",
            "startTime": 800,
            "endTime": 1200,
            "max_volunteers": 2,
            "assignedVolunteers": [],
            "requests": [],
            "__v": 0
        },
        {
            "_id": "6558315d241ca9bb0f41d134",
            "title": "test",
            "date": "2023-11-14T05:00:00.000Z",
            "startTime": 800,
            "endTime": 1200,
            "max_volunteers": 2,
            "assignedVolunteers": [],
            "requests": [],
            "__v": 0
        },
        {
            "_id": "6558315d241ca9bb0f41d134",
            "title": "test",
            "date": "2023-11-19T05:00:00.000Z",
            "startTime": 800,
            "endTime": 1200,
            "max_volunteers": 2,
            "assignedVolunteers": [],
            "requests": [],
            "__v": 0
        },
        {
            "_id": "6558315d241ca9bb0f41d134",
            "title": "test",
            "date": "2023-11-15T05:00:00.000Z",
            "startTime": 800,
            "endTime": 1200,
            "max_volunteers": 2,
            "assignedVolunteers": [],
            "requests": [],
            "__v": 0
        },
        {
            "_id": "6558315d241ca9bb0f41d134",
            "title": "test",
            "date": "2023-11-21T05:00:00.000Z",
            "startTime": 800,
            "endTime": 1200,
            "max_volunteers": 2,
            "assignedVolunteers": [],
            "requests": [],
            "__v": 0
        },
        {
            "_id": "6558317f241ca9bb0f41d13a",
            "title": "test",
            "date": "2023-11-20T05:00:00.000Z",
            "startTime": 800,
            "endTime": 1200,
            "max_volunteers": 2,
            "assignedVolunteers": [],
            "requests": [],
            "__v": 0
        },
        {
            "_id": "655831a1241ca9bb0f41d13e",
            "title": "test",
            "date": "2023-11-19T05:00:00.000Z",
            "startTime": 2130,
            "endTime": 2350,
            "max_volunteers": 2,
            "assignedVolunteers": [],
            "requests": [],
            "__v": 0
        }
    ]

    const role = "admin";
    const approved=true;
    
    var event = []
    for(let i=0;i<event_data.length;i++) {
        let sh = "";
        let sm = "";
        let eh = "";
        let em = "";
        let color = "rgb(217,238,253)";
        let textColor = "rgb(3,105,161)";
        let borderColor = "rgba(14,165,233,0.8)";
        let today = moment().format();
        
        if(String(event_data[i]["startTime"]/100) < 10){
            sh+="0";
        }
        sh += String(Math.floor(event_data[i]["startTime"]/100));
        if(String(event_data[i]["startTime"]%100) < 10){
            sm+="0";
        }
        sm += String(event_data[i]["startTime"]%100);
        if(String(event_data[i]["endTime"]/100) < 10){
            eh+="0";
        }
        eh += String(Math.floor(event_data[i]["endTime"]/100));
        if(String(event_data[i]["endTime"]%100) < 10){
            em+="0";
        }
        em += String(event_data[i]["endTime"]%100);
        if((String(event_data[i]["date"]).substr(0,11) +
        sh + ":" + sm + ":00") < today){
            console.log((String(event_data[i]["date"]).substr(0,11) +
            sh + ":" + sm + ":00"));
            console.log(today);
            color = "rgb(241,241,241)";
            textColor = "rgb(107,107,107)";
            borderColor = "rgb(241,241,241)";
        }
        else if (String(event_data[i]["date"]).substr(0,10) > today.split("T")[0]){
            color = "rgb(217,246,232)";
            textColor = "rgb(25,161,3)";
            borderColor = "rgb(16,245,11)";
        }

        event.push({
            title: event_data[i]["title"],
            start: (String(event_data[i]["date"]).substr(0,11) +
                    sh + ":" + sm + ":00"),
            
            end: (String(event_data[i]["date"]).substr(0,11) +
                eh + ":" + em + ":00"),
            description: "dfoauhnvuthvb",
            backgroundColor: color,
            textColor: textColor,
            borderColor: borderColor,
            
        });
    }
    
    if(approved==true){    
        return(    
            <div class="calendar" id="calendar">
            <div class="form2">
                <dialog class="create_form" id="create_form">
                    <button class="temp2" onClick={function(info){
                        const modal = document.querySelector("#create_form");
                        modal.close();
                    }}> &times; </button>
                    <br/>
                    Date: <br></br>
                    <input type="date" 
                        id="birthday" 
                        name="birthday" 
                        class="input"/><br/><br/>
                    <div class="row">
                        <div class="column">
                            Start Time <br/>
                            <input type="time" class="input2" name="start_time"/>
                        </div>
                        <div class="column">
                            End Time <br/>
                            <input type="time" class="input2" name="end_time"/>
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
                                                    const modal = document.querySelector('#create_form'); 
                                                    modal.close();}}>ADD</button> <br/>
                </dialog>

                <dialog class="create_form" id="edit_form">
                    <button id="temp2" 
                            class="temp2" 
                            onClick={ function() {
                                                    const modal = document.querySelector('#edit_form'); 
                                                    modal.close()
                                    }}>
                        &times;
                    </button> 
                    <br/>
                    Date: <br></br>
                    <input type="date" 
                        id="birthday" 
                        name="birthday" 
                        class="input"
                        value={event_data[0]["date"].split("T")[0]}/><br/><br/>
                    <div class="row">
                        <div class="column">
                            Start Time <br/>
                            <input type="time" class="input2" name="start_time"/>
                        </div>
                        <div class="column">
                            End Time <br/>
                            <input type="time" class="input2" name="end_time"/>
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
                    <input class="input" name="description" value={event[0]['description']}/><br/><br/>
                    
                    <button class="edit" onClick={function(event) {handleCreateEvent(event); 
                                                    const modal = document.querySelector('#edit_form'); 
                                                    modal.close();}}>EDIT</button>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="edit" onClick={function(event) {handleCreateEvent(event); 
                                                    const modal = document.querySelector('#edit_form'); 
                                                    modal.close();}}>DELETE</button> <br/>
                </dialog>

                
                <dialog class="create_form" id="request_shift">
                    <button id="temp2" 
                            class="temp2" 
                            onClick={ function() {
                                                    const modal = document.querySelector('#request_shift'); 
                                                    modal.close()
                                    }}>
                        &times;
                    </button> 
                    <br/>
                    <p class="text">
                        <b>Title:</b> {event_data[0]["title"]} <br/>
                        <b>Location:</b> {event_data[0]["location"]} <br/>
                        <b>Organization:</b> {event_data[0]["organization"]} <br/>
                        <b>Date:</b> {event_data[0]["date"].split("T")[0]}<br/>
                        <b>Time:</b> {event_data[0]["startTime"]} to {event_data[0]["endTime"]} <br/>
                        <b>Required Skills:</b> {event_data[0]["required_skills"]} <br/>
                        <b>Volunteers Required:</b> {event_data[0]["max_volunteers"]}<br/>
                        <b>Description:</b>
                        {event_data[0]["description"]}<br/>
                    </p>
                    <b>Disclaimer</b><br/>
                    <div class="disclaimer">
                    Your commitment is immensely valued; however, please note that volunteering roles are undertaken voluntarily and without monetary compensation. Your participation is at your discretion, and while every effort is made to ensure a safe environment, the organization cannot be held liable for any unforeseen circumstances or incidents that may occur during your voluntary service. By volunteering, you acknowledge that you are responsible for your actions, safety, and well-being. You agree to adhere to the guidelines, policies, and instructions provided by the organization and understand that any breach may result in the termination of your volunteer position. Your dedication and contributions are highly appreciated and contribute significantly to our shared goals and initiatives. Thank you for your commitment and support.
                    </div>
                    <br/>
                    <input type="checkbox" id="accept" name="accept" value="Accept" onChange={function(event) {document.querySelector("#confirm").disabled=false; document.getElementById('confirm').disabled = !document.getElementById("accept").checked;}}/>
                    <label for="accept"> ACCEPT</label><br/><br/><br/>
                    <button id="confirm" class="add" onClick={function(event) {
                        document.getElementById('confirm').disabled = !document.getElementById("accept").checked;
                        const modal = document.querySelector('#request_shift'); 
                        modal.close();
                        }}>
                    CONFIRM</button> <br/><br/>
                </dialog>
            </div>
            <div class="fullcalendar">
                <FullCalendar
                    themeSystem={'bootstrap5'}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView={'timeGridWeek'}
                    customButtons={{
                        myCustomButton: {
                        text: 'Create Shift',
                        click: function() {
                            if(role=="admin"){
                                const modal = document.querySelector('#create_form');
                                modal.show();
                            }
                        },
                        }
                    }}
                    headerToolbar={{
                        start: "timeGridDay timeGridWeek dayGridMonth",
                        center:"prevYear prev title next nextYear",
                        end: "myCustomButton",
                    }}
                    viewDidMount={ function(obj) {
                        document.querySelector(".fc-myCustomButton-button").style.display = 
                            (role=="admin") ? "inline-block" : "none";
                    }}
                    views={[{
                        dayGridMonth: { // name of view
                        titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }
                        }
                    }]}
                    allDaySlot={false}
                    navLinks={true}
                    scrollTime={moment().format().split("T")[1]}
                    nowIndicator={true}
                    buttonText={{
                        today:    'Today',
                        month:    'Month',
                        week:     'Week',
                        day:      'Day',
                        list:     'List'
                    }}
                    buttonIcons={{
                        prev: 'chevron-left',
                        next: 'chevron-right',
                        prevYear: 'chevrons-left', // double chevron
                        nextYear: 'chevrons-right'
                    }}
                    slotLabelFormat={ [
                        {  hour: 'numeric',
                        hour12: true }
                    ]}
                    height={"83vh"}
                    selectable={true}
                    dateClick={(info) => {
                        if(role=="admin"){
                            const modal = document.querySelector('#create_form');
                            modal.show();
                        }
                    }}
                    events={event}
                    eventClick={ function(info) {
                        document.getElementById('confirm').disabled = !document.getElementById("accept").checked;
                        if (info.event.startStr > moment().format()) {
                            const modal = (
                                (role=="admin") ? 
                                    document.querySelector('#edit_form') : 
                                    document.querySelector('#request_shift')
                            );
                            modal.show();
                        }
                        console.log("Rucha");
                        console.log(info);
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
    else {
        return (
            <div>
                <center>
                    <h1>
                        UNAUTHORISED
                    </h1>
                    <p>
                    Your registration approval is still pending with Admin. Please try again later!
                    </p>
                </center>
            </div>
        )
    }
}
export default Scheduler;