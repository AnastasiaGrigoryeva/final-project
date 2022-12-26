import {React,useEffect,useState,useContext} from "react";
import FirstPage from './components/firstpage/Firstmainpage';
import { Routes, Route } from "react-router-dom";
import RegForm from './components/reg/RegForm'
import LoginForm from "./components/login/LoginForm";
import CasesPage from './components/casespage/CasesPage';
import AddCase from './components/addcase/addcase'
import Officers from './components/people/Officers';
import FullCases from "./components/casespage/Maincasespage";
import CaseList from './components/case/caselist'
import OfficerList from './components/officer/officer'
//import data from './mockdata.json';
import { observer } from 'mobx-react-lite';
import storesContext from './context/context';

function Main() {
    let { cases } = useContext(storesContext);
    //const samples = CasesStore.cases;
    //console.log(cases)
    //const [caselist, setCaseList] = useState(cases);

    useEffect(() => {
		window.localStorage.setItem('case', JSON.stringify(cases))
	}, [cases])

    return (
        <Routes>
            <Route path="/" element={<FirstPage  />} /> 
            <Route path="login" element={<LoginForm  />} />
            <Route path="registration" element={<RegForm />} />
            <Route path="login/home"   element={<CasesPage  />} >
                <Route path="/login/home"   element={<FullCases   />} />
                <Route path="/login/home/:id" element={<CaseList />} />
                <Route path="addcase" element={<AddCase />} />
                <Route path="people" element={<Officers />} />
                <Route path="/login/home/people/:id" element={<OfficerList />} />
            </Route> 
            <Route path="registration/home"   element={<CasesPage  />} >
                <Route path="/registration/home"   element={<FullCases   />} />
                <Route path="/registration/home/:id" element={<CaseList />} />
                <Route path="addcase" element={<AddCase />} />
                <Route path="people" element={<Officers />} />
                <Route path="/registration/home/people/:id" element={<OfficerList />} />
            </Route> 
        </Routes>
         
)}

export default observer(Main);

