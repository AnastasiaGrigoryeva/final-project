import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import storesContext from '../../context/context';
import './officers.css'

function Officers() {
    let { officers } = useContext(storesContext);
    let {people} = officers;
    
    const table = people.map(person => {
        return <div className="wrapper-cases" >
        <Link to={`/login/home/people/${person._id}`} key={person._id}>
        <div >
            <p className="case data">{person.date}</p>
            <p className="case data">{person.clientId}</p>
            <p className="case fio">{person.firstName} {person.firstName} </p>
            <p className="case email">{person.email}</p>
        </div>
     </Link>
     </div>
    })

    return (
    <>
    <div className="contener-officer">
    {table}
    </div>

    </>
)}

export default observer(Officers);