import React,  {useContext}  from "react";
import { useParams } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import css from './css.module.css'
import storesContext from '../../context/context'

function CaseList() {
    let { list } = useContext(storesContext);
    let { cases} = list
    const {id} = useParams();

    const sample = cases.find(sample => sample._id===id)

    return (<>
        <div className={css.wrappercases} key={sample._id}>
            <div className={css.wrapper} >
                <label>data
                <p className="case data">{sample.date}</p>
                </label>
                <label>ownerFullName
                <p className="case fio">{sample.ownerFullName} </p>
                </label>
                <label>email
                <p className="case email">{sample.email}</p>
                </label>
                <label>color
                <p className="case email">{sample.color}</p>
                </label>
                <label>createAt
                <p className="case email">{sample.createAt}</p>
                </label>
                <label>licenseNumber
                <p className="case email">{sample.licenseNumber}</p>
                </label>
                <label>resolution
                <p className="case email">{sample.resolution}</p>
                </label>
                <label>status
                <p className="case email">{sample.status}</p>
                </label>
                <label>type
                <p className="case email">{sample.type}</p>
                </label>
            </div>
        </div>
    </>
)}

export default observer(CaseList);