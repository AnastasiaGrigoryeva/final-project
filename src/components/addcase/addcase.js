import React , {useState,useContext} from "react";
import './addcase.css'
import { observer } from 'mobx-react-lite';
import {STATUS_BIKE} from '../../elements/parms'
import storesContext from '../../context/context';

function AddCase () {

    const {cases} = useContext(storesContext)
    
    const initState = cases
    const [newCase, setNewCase] = useState(initState)
    const [licenseNumber, setLicenseNumber] = useState('')
    const [ownerFullName, setOwnerFullName] = useState('')
    const [type, setType] = useState()
    const [color, setColor] = useState('')
    const [description, setDescription] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const initCase = () => {
            setLicenseNumber()
            setOwnerFullName()
            setType()
            setColor('')
            setDescription()
        }
        setNewCase(([...cases, newCase ]))
    }
    console.log(newCase)
    return <>
        <div className="form-container">
            <div className="wrapper-form">
                <form className="form reg" onSubmit={(e) =>handleSubmit} >
                <h1 className="title-name">add case</h1>
                <label className="label">license number</label>
                <input className="input license-number" 
                        type="number"
                        value={licenseNumber}
                        placeholder="licenseNumber" 
                        onChange={(e) => setLicenseNumber(e.target.value)}
                />
                <label className="label">full name of owner</label>
                <input className="input fio" 
                        type="text"
                        value={ownerFullName}
                        placeholder="ownerFullName" 
                        onChange={(e) => setOwnerFullName(e.target.value)}  
                />
                <label className="label">type</label>
                <input className="input type" 
                        type="text" 
                        value={type}
                        placeholder="type" 
                        onChange={(e) => setType(e.target.value)}  
                />
                <label className="label">colour</label>
                <input className="input colour" 
                        type="text"
                        value={color}
                        placeholder="color" 
                        onChange={(e) => setColor(e.target.value)}  
                />
                <label className="label">description</label>
                <input className="input description" 
                        value={description}
                        type="text"
                        placeholder="description" 
                        onChange={(e) => setDescription(e.target.value)}  
                />
                <div className="btn-container">
                    <input className="btn clean" type="button" value="clean" />
                    <input className="btn submit" type="submit" value="save" />
                </div>
                </form>
            </div>
        </div>
    </>

}

export default observer(AddCase);

