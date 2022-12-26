import React, {useContext, useState,useEffect} from "react";
import './casespage.css'
import { Link } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import storesContext from '../../context/context';
import {toDateTime} from '../../elements/utilities'

function FullCases() {
    let { list } = useContext(storesContext);
    let {remove, cases} = list
    const [sample, setSample] = useState()

    const AddCase = (licenseNumber,type,ownerFullName,color,description) => {
        const newCase = {
            licenseNumber: licenseNumber,
            type: type,
            ownerFullName: ownerFullName,
            createdAt: new Date().toISOString(),
            color: color,
            description: description
          }

          setSample([...cases, newCase ]);
    }


    useEffect(() => {
      window.localStorage.setItem('case', JSON.stringify(cases))
    }, [cases])

    const task = cases.map(sample => {
      return(<>
        <div className="wrapper-cases" >
        <Link to={`/login/home/${sample._id}`}  key={sample.id}>
                <p className="case data">{toDateTime(sample.date)}</p>
                <p className="case fio">{sample.ownerFullName}</p>
                <p className="case email">email</p>
        </Link>
        <button type="button" onClick={() => remove(sample._id)}>X</button>
        </div>
      </>
)})
    return < >
    <div className="div-contener1">
    <div className="div-contener">
      {task}
      </div>
    </div>
    </>
}

export default observer(FullCases);