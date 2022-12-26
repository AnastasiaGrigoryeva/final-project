import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import css from './css.module.css'
import storesContext from '../../context/context';

function OfficerList() {
    let { officers } = useContext(storesContext);
    let { people } = officers

    const {id} = useParams();

    const sample = people.find(sample => sample._id===id)

    return (<>
        <div className={css.wrappercases} key={sample._id}>
            <div className={css.wrapper}>
                <label>data
                <p className="case data">{sample.firstName}</p>
                </label>
                <label>ownerFullName
                <p className="case fio">{sample.lastName} </p>
                </label>
                <label>email
                <p className="case email">{sample.clientId}</p>
                </label>
                <label>color
                <p className="case email">{sample.email}</p>
                </label>
                <label>approved
                <p className="case email">{sample.approved}</p>
                </label>
            </div>
        </div>
    </>
)}

export default observer(OfficerList);