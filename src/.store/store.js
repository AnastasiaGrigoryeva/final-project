import { makeObservable,observable,action } from 'mobx';


class CasesStore{
    cases = [
        {
            "_id": "1",
            "status": "new",
            "licenseNumber": "DRF-4767337",
            "type": "general",
            "ownerFullName": "Иванов Никита Иванович",
            "clientId": "123",
            "createAt": "2022-10-10T18:39:45",
            "updateAt": "2022-10-10T18:39:45",
            "color": "Зеленый",
            "date": "2022-10-10T18:39:45",
            "officer": "",
            "description": "",
            "resolution": ""
        },
        {
            "_id": "2",
            "status": "new",
            "licenseNumber": "hgjkhlee337",
            "type": "sport",
            "ownerFullName": "Сидоров Петр Иванович",
            "clientId": "12345",
            "createAt": "2021-08-29T18:39:45",
            "updateAt": "2021-08-29T18:39:45",
            "color": "красный",
            "date": "2021-08-29T18:39:45",
            "officer": "",
            "description": "",
            "resolution": ""
        },
        {
            "_id": "3",
            "status": "in_progress",
            "licenseNumber": "DRF-4767337",
            "type": "general",
            "ownerFullName": "Иванов Иван Иванович",
            "clientId": "12345",
            "createAt": "2021-08-29T18:39:45",
            "updateAt": "2021-08-29T18:39:45",
            "color": "зеленый",
            "date": "2021-08-29T18:39:45",
            "officer": "",
            "description": "",
            "resolution": ""
        },
        {
            "_id": "4",
            "status": "done",
            "licenseNumber": "DRF-4767337",
            "type": "general",
            "ownerFullName": "Иванов Иван Иванович",
            "clientId": "12345",
            "createAt": "2021-08-29T18:39:45",
            "updateAt": "2021-08-29T18:39:45",
            "color": "красный",
            "date": "2021-08-29T18:39:45",
            "officer": "",
            "description": "",
            "resolution": "fkjlgsfjglkfj"
        },
        {
            "_id": "5",
            "status": "new",
            "licenseNumber": "DRF-4767337",
            "type": "general",
            "ownerFullName": "Иванов Иван Иванович",
            "clientId": "12345",
            "createAt": "2021-08-29T18:39:45",
            "updateAt": "2021-08-29T18:39:45",
            "color": "красный",
            "date": "2021-08-29T18:39:45",
            "officer": "",
            "description": "",
            "resolution": ""
        }
    ]

    remove(id){
		this.cases = this.cases.filter(cs => cs._id !== id);
	}

	constructor(){
		makeObservable(this, {
			cases: observable,
			remove: action.bound
		});
	}

}


export default new CasesStore();