import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import Main from './App';
import storesContext from './context/context';
import CasesStore from './.store/store';
import OfficersStore from './.store/store2'

let stores = {
	list: CasesStore,
	officers: OfficersStore
};


ReactDom.render(
	<storesContext.Provider value={stores}>
		<BrowserRouter>
			<Main />
		</BrowserRouter>
	</storesContext.Provider>
	,
	document.querySelector('#root'),
);

