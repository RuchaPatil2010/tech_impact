import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Scheduler.css';
import axios from "axios";
import moment from 'moment';
import {backend_url} from "./constants";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function Scheduler() {
    let navigate = useNavigate();
    const [date, setDate] = useState('');
    const [start_time, setStartTime] = useState('');
    const [end_time, setEndTime] = useState('');
    const [error, setError] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [max_volunteers, setMaxVolunteers] = useState('');
    const [req_skills, setReqSkills] = useState('');
    const [description, setdesc] = useState('');
    const [id, setID] = useState('');
    const [event_data2, setData] = useState();

    const user = useSelector(state=>state.user.user);
    const role = user.role;
    const approved = user.approved;
    const username = user.username;

    useEffect(() => {
        axios.get(backend_url + '/shifts/shifts', {
            params: {username: username},
        }).then((res)=> {setData(res.data);console.log(res.data);}).catch(err=>console.log(error));
    }, [error,username]);

    const handleCreateEvent = (info) => {
        axios.post(backend_url + '/shifts/create', {
                title: info.title,
                date: info.date,
                startTime: parseInt(info.start_time.split(":")[0] + info.start_time.split(":")[1]),
                endTime: parseInt(info.end_time.split(":")[0] + info.end_time.split(":")[1]),
                location: info.location,
                req_skills: info.req_skills,
                max_volunteers: info.max_volunteers,
                description: description,
            }, {params: {username: username}})
            .then(() => navigate('/reloader',{state:{route:'/manageShift'}})).catch(err => {
            console.log(err);
            setError(err.message);
        });
    }

    const handleEditEvent = (info) => {
        axios.post(backend_url + '/shifts/edit', {
                id: id,
                title: info.title,
                date: info.date,
                startTime: parseInt(info.start_time.split(":")[0] + info.start_time.split(":")[1]),
                endTime: parseInt(info.end_time.split(":")[0] + info.end_time.split(":")[1]),
                location: info.location,
                req_skills: info.req_skills,
                max_volunteers: info.max_volunteers,
                description: description,
            }, {params: {username: username}}
        ).then(() => navigate('/reloader',{state:{route:'/manageShift'}})).catch(err => {
                console.log(err);
                setError(err.message);
        });
    }

    const requestShift = () => {
        axios(backend_url + '/shifts/request', {
            method: 'get',
            params: {username: username, shiftid: id},
        }).then( ()=> navigate('/reloader',{state:{route:'/manageShift'}})).catch((error)=>{
            console.log(error);
            setError(error);
        });
    }

    useEffect(() => {
        if (id !== '') {
            const MODAL = document.querySelector("#edit_form");
            if(role==='admin') MODAL.show();
        }
    }, [id,role]);

    const delete_event = () => {
        axios.delete(backend_url + '/shifts/delete', {params: {username: username, id: id}})
            .then(() => navigate('/reloader',{state:{route:'/manageShift'}})).catch(err => {
                console.log(err);
                setError(err.message);
        });
    }

    const [event, setEvent] = useState([]);

    useEffect(() => {
        const ev = [];
        for (let i = 0; i < event_data2?.length; i++) {
            let sh = "";
            let sm = "";
            let eh = "";
            let em = "";
            let color = "rgb(217,238,253)";
            let textColor = "rgb(3,105,161)";
            let borderColor = "rgba(14,165,233,0.8)";
            let today = moment().format();

            if (String(event_data2[i]["startTime"] / 100) < 10) {
                sh += "0";
            }
            sh += String(Math.floor(event_data2[i]["startTime"] / 100));
            if (String(event_data2[i]["startTime"] % 100) < 10) {
                sm += "0";
            }
            sm += String(event_data2[i]["startTime"] % 100);
            if (String(event_data2[i]["endTime"] / 100) < 10) {
                eh += "0";
            }
            eh += String(Math.floor(event_data2[i]["endTime"] / 100));
            if (String(event_data2[i]["endTime"] % 100) < 10) {
                em += "0";
            }
            em += String(event_data2[i]["endTime"] % 100);
            if ((String(event_data2[i]["date"]).substr(0, 11) +
                sh + ":" + sm + ":00") < today) {
                color = "rgb(241,241,241)";
                textColor = "rgb(107,107,107)";
                borderColor = "rgb(241,241,241)";
            } else if (String(event_data2[i]["date"]).substr(0, 10) > today.split("T")[0]) {
                color = "rgb(217,246,232)";
                textColor = "rgb(25,161,3)";
                borderColor = "rgb(16,245,11)";
            }

            ev.push({
                title: event_data2[i]["title"],
                start: (String(event_data2[i]["date"]).substr(0, 11) +
                    sh + ":" + sm + ":00"),

                end: (String(event_data2[i]["date"]).substr(0, 11) +
                    eh + ":" + em + ":00"),
                description: event_data2[i]["description"],
                id_now: event_data2[i]["_id"],
                backgroundColor: color,
                textColor: textColor,
                borderColor: borderColor,

            });
        }
        setEvent(ev);
    }, [event_data2]);

    if (approved === true) {
        return (
            <div className="calendar" id="calendar">
                <div className="form2">
                    <dialog className="create_form" id="create_form">
                        <button className="temp2" onClick={function (info) {
                            const modal = document.querySelector("#create_form");
                            modal.close();
                        }}> &times; </button>
                        <br/>
                        Date: <br></br>
                        <input type="date"
                               id="date"
                               name="birthday"
                               className="input"/><br/><br/>
                        <div className="row">
                            <div className="column">
                                Start Time <br/>
                                <input type="time" id="start_time" className="input2" name="start_time"/>
                            </div>
                            <div className="column">
                                End Time <br/>
                                <input type="time" id="end_time" className="input2" name="end_time"/>
                            </div>
                        </div>
                        <br/>
                        Location:<br/>
                        <input className="input" id="location" name="location"/><br/><br/>

                        Required Skills:<br/>
                        <input className="input" id="req_skills" name="required_skills"/><br/><br/>

                        Maximum Number of Volunteers:<br/>
                        <input type="number" id="num_volunteers" className="input" name="volunteers"/><br/><br/>

                        Organization:<br/>
                        <input className="input" id="organization" name="organisation"/><br/><br/>

                        Description:<br/>
                        <input className="input" id="desc" name="description"/><br/><br/><br/>

                        <button className="add" onClick={function (event) {
                            const val = {
                                date: document.getElementById("date").value,
                                start_time: document.getElementById("start_time").value,
                                end_time: document.getElementById("end_time").value,
                                location: document.getElementById("location").value,
                                req_skills: document.getElementById("req_skills").value,
                                max_volunteers: document.getElementById("num_volunteers").value,
                                title: document.getElementById("organization").value,
                                description: document.getElementById("desc").value,
                            }
                            handleCreateEvent(val);
                            const modal = document.querySelector('#create_form');
                            modal.close();
                        }}>ADD
                        </button>
                        <br/>
                    </dialog>

                    <dialog className="create_form" id="edit_form">
                        <button id="temp2"
                                className="temp2"
                                onClick={function () {
                                    const modal = document.querySelector('#edit_form');
                                    modal.close()
                                }}>
                            &times;
                        </button>
                        <br/>
                        Date: <br></br>
                        <input type="date"
                               id="edit_date"
                               name="birthday"
                               className="input" defaultValue={date}/><br/><br/>
                        <div className="row">
                            <div className="column">
                                Start Time <br/>
                                <input type="time" id="edit_start_time" className="input2" name="start_time"
                                       defaultValue={start_time}/>
                            </div>
                            <div className="column">
                                End Time <br/>
                                <input type="time" id="edit_end_time" className="input2" name="end_time"
                                       defaultValue={end_time}/>
                            </div>
                        </div>
                        <br/>
                        Location:<br/>
                        <input className="input" id="edit_location" name="location" defaultValue={location}/><br/><br/>

                        Required Skills:<br/>
                        <input className="input" id="edit_req_skills" name="required_skills"
                               defaultValue={req_skills}/><br/><br/>

                        Maximum Number of Volunteers:<br/>
                        <input type="number" className="input" id="edit_num_volunteers" name="volunteers"
                               defaultValue={max_volunteers}/><br/><br/>

                        Organization:<br/>
                        <input className="input" id="edit_organization" name="organisation"
                               defaultValue={title}/><br/><br/>

                        Description:<br/>
                        <input className="input" id="edit_desc" name="description"
                               defaultValue={description}/><br/><br/>

                        <button className="edit" onClick={function (event) {
                            const val = {
                                date: document.getElementById("edit_date").value,
                                start_time: document.getElementById("edit_start_time").value,
                                end_time: document.getElementById("edit_end_time").value,
                                location: document.getElementById("edit_location").value,
                                req_skills: document.getElementById("edit_req_skills").value,
                                max_volunteers: document.getElementById("edit_num_volunteers").value,
                                title: document.getElementById("edit_organization").value,
                                description: document.getElementById("edit_desc").value,
                            }
                            handleEditEvent(val);

                            const modal = document.querySelector('#edit_form');
                            modal.close();
                        }}>EDIT
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="edit" onClick={function (event) {
                            delete_event();
                            const modal = document.querySelector('#edit_form');
                            modal.close();
                        }}>DELETE
                        </button>
                        <br/>
                    </dialog>

                    <dialog className="create_form" id="request_shift">
                        <button id="temp2"
                                className="temp2"
                                onClick={function () {
                                    const modal = document.querySelector('#request_shift');
                                    modal.close()
                                }}>
                            &times;
                        </button>
                        <br/>
                        <p className="text">
                            <b>Title:</b> {title} <br/>
                            <b>Location:</b> {location} <br/>
                            <b>Organization:</b> {title} <br/>
                            <b>Date:</b> {date}<br/>
                            <b>Time:</b> {start_time} to {end_time} <br/>
                            <b>Required Skills:</b> {req_skills} <br/>
                            <b>Volunteers Required:</b> {max_volunteers}<br/>
                            <b>Description:</b>
                            {description}<br/>
                        </p>
                        <b>Disclaimer</b><br/>
                        <div className="disclaimer">
                            Your commitment is immensely valued; however, please note that volunteering roles are
                            undertaken voluntarily and without monetary compensation. Your participation is at your
                            discretion, and while every effort is made to ensure a safe environment, the organization
                            cannot be held liable for any unforeseen circumstances or incidents that may occur during
                            your voluntary service. By volunteering, you acknowledge that you are responsible for your
                            actions, safety, and well-being. You agree to adhere to the guidelines, policies, and
                            instructions provided by the organization and understand that any breach may result in the
                            termination of your volunteer position. Your dedication and contributions are highly
                            appreciated and contribute significantly to our shared goals and initiatives. Thank you for
                            your commitment and support.
                        </div>
                        <br/>
                        <input type="checkbox" id="accept" name="accept" value="Accept" onChange={function (event) {
                            document.querySelector("#confirm").disabled = false;
                            document.getElementById('confirm').disabled = !document.getElementById("accept").checked;
                        }}/>
                        <label for="accept"> ACCEPT</label><br/><br/><br/>
                        <button id="confirm" className="add" onClick={function (event) {
                            document.getElementById('confirm').disabled = !document.getElementById("accept").checked;
                            const modal = document.querySelector('#request_shift');
                            modal.close();
                            requestShift();
                        }}>
                            CONFIRM
                        </button>
                        <br/><br/>
                    </dialog>
                </div>
                <div className="fullcalendar">
                    <FullCalendar
                        themeSystem={'bootstrap5'}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView={'timeGridWeek'}
                        customButtons={{
                            myCustomButton: {
                                text: 'Create Shift',
                                click: function () {
                                    if (role === "admin") {
                                        const modal = document.querySelector('#create_form');
                                        modal.show();
                                    }
                                },
                            }
                        }}
                        headerToolbar={{
                            start: "timeGridDay timeGridWeek dayGridMonth",
                            center: "prevYear prev title next nextYear",
                            end: "myCustomButton",
                        }}
                        viewDidMount={function (obj) {
                            document.querySelector(".fc-myCustomButton-button").style.display =
                                (role === "admin") ? "inline-block" : "none";
                        }}
                        views={[{
                            dayGridMonth: { // name of view
                                titleFormat: {year: 'numeric', month: '2-digit', day: '2-digit'}
                            }
                        }]}
                        allDaySlot={false}
                        navLinks={true}
                        scrollTime={moment().format().split("T")[1]}
                        nowIndicator={true}
                        buttonText={{
                            today: 'Today',
                            month: 'Month',
                            week: 'Week',
                            day: 'Day',
                            list: 'List'
                        }}
                        buttonIcons={{
                            prev: 'chevron-left',
                            next: 'chevron-right',
                            prevYear: 'chevrons-left', // double chevron
                            nextYear: 'chevrons-right'
                        }}
                        slotLabelFormat={[
                            {
                                hour: 'numeric',
                                hour12: true
                            }
                        ]}
                        height={"83vh"}
                        selectable={true}
                        dateClick={(info) => {
                            if (role === "admin") {
                                const modal = document.querySelector('#create_form');
                                modal.show();
                            }
                        }}
                        events={event}
                        eventClick={function (info) {
                            document.getElementById('confirm').disabled = !document.getElementById("accept").checked;
                            if (info.event.startStr > moment().format()) {
                                event_data2?.map((item, index) => {
                                    if (item._id === info.event.extendedProps.id_now) {
                                        setDate(item.date.split("T")[0]);
                                        setStartTime((Math.floor(item.startTime / 1000) === 0 ? "0" : "") + Math.floor(item.startTime / 100) + ":" + ((item.startTime % 100 < 10) ? "0" : "") + item.startTime % 100);
                                        setEndTime((Math.floor(item.endTime / 1000) === 0 ? "0" : "") + Math.floor(item.endTime / 100) + ":" + ((item.endTime % 100 < 10) ? "0" : "") + item.endTime % 100);
                                        setTitle(item.title);
                                        setLocation(item.location);
                                        setMaxVolunteers(item.max_volunteers);
                                        setReqSkills(item.req_skills);
                                        setdesc(item.description);

                                    }
                                    return null;
                                });
                                setID(info.event.extendedProps.id_now);
                                let modal;
                                if(role==='admin'){
                                    modal = document.querySelector('#edit_form');
                                }else{
                                    modal = document.querySelector('#request_shift');
                                }
                                modal.show();
                            }
                        }}

                        eventDidMount={(info) => {
                            return new bootstrap.Popover(info.el, {
                                title: info.event.title,
                                placement: "auto",
                                trigger: "hover",
                                customClass: "popoverStyle",
                                // content: info.event.extendedProps.description,
                                html: true,
                            });

                        }}
                    />
                </div>
            </div>

        )
    } else {
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