import axios from 'axios'
import {variables} from './Variables'

export default {
    getTools: () =>
        axios.get(`${variables.API_URL}/ToolApi`),
    postTool: (tool : any) =>
        axios.post(`${variables.API_URL}/tool`, tool), 
    editTool: (tool : any) =>
        axios.put(`${variables.API_URL}/tool`, tool),
    deleteTool: (id : any) =>
        axios.delete(`${variables.API_URL}/tool/${id}`),
    // нет
    getToolModels: () =>
        axios.get(`${variables.API_URL}/tool/models`),
    // нет 
    getDetailToolModels: () =>
        axios.get(`${variables.API_URL}/tool/detailModels`),
    // нет
    editInventoryNumber: (toolID : any, inventoryNumber : any) => 
        axios.put('/api/tool/inventoryNumber', { toolID, inventoryNumber }),
    // нет
    getLastInventoryNumber: () => 
        axios.get('/api/tool/inventoryNumber'),
    
    // нет ++
    getRigs: () =>
        axios.get('/api/rig'),
    editRig: (rig : any) =>
        axios.put('/api/rig', rig),
    postRig: (rig : any) =>
        axios.post('/api/rig', rig),
    deleteRig: (id : any) =>
        axios.delete(`/api/rig/${id}`),
    getRigModels: () =>
        axios.get('/api/rig/models'),
    // нет ++

    // нет ++
    getConsumables: () =>
        axios.get('/api/consumable'),
    editConsumable: (consumable : any) =>
        axios.put('/api/consumable', consumable),
    postConsumable: (consumable : any) =>
        axios.post('/api/consumable', consumable),
    deleteConsumable: (id : any) =>
        axios.delete(`/api/consumable/${id}`),
    getConsumableModels: () =>
        axios.get('/api/consumable/models'),
    // нет ++

    // нет
    getOrders: () =>
        axios.get('/api/order'),
    // нет
    getActiveOrders: (k : any, l : any) =>
        axios.get(`${variables.API_URL}/order/activesNoUser`, {
            params: {
                sortOrder: k,
                searchString: l
            }
        }),
    // нет
    editOrder: (order : any) =>
        axios.put('/api/order', order),
    postOrder: (order : any) =>
        axios.post('/api/order', order),
    // нет
    deleteOrder: (id : any) =>
        axios.delete(`/api/order/${id}`),
    // нет
    getContractNumber: () =>
        axios.get(`/api/order/contractNumber`),
    downloadHistory: (startDate : any, finishDate : any) =>
        axios({
            url: `/api/order/CSVHistory/${startDate}/${finishDate}`,
            method: 'GET',
            responseType: 'blob',
        }),
    
    getMaintain: () =>
        axios.get('/api/maintain'),
    // нет
    editMaintain: (maintain : any) =>
        axios.put('/api/maintain', maintain),
    postMaintain: (maintain : any) =>
        axios.post('/api/maintain', maintain),
    deleteMaintain: (id : any) => 
        axios.delete(`/api/maintain/${id}`),
    // на сервере есть лишние

    getClients: () => 
        axios.get('/api/client'),
    // нет
    editClient: (client : any) => 
        axios.put('/api/client', client),
    postClient: (client : any) => 
        axios.post('/api/client', client),
    // нет
    deleteClient: (id : any) => 
        axios.delete(`/api/client/${id}`),
    // нет
    addClientToBlackList: (id : any)  => 
        axios.put(`/api/client/blacklist/add/${id}`),
    // нет
    removeClientFromBlackList: (id : any)  => 
        axios.put(`/api/client/blacklist/remove/${id}`),
    getClientInfoByPhoneNumber: (phoneNumber : any) => 
        axios.get(`/api/client/byPhoneNumber/${phoneNumber}`),
    // нет
    getClientInfoByName: (name : any) =>
        axios.get(`/api/client/byName/${name}`),
    getClientInfoByPassport: (passport : any) =>
        axios.get(`/api/client/byPassport/${passport}`),
    // нет
    validatePassport: (passport : any) => 
        axios.get(`/api/client/validatePassport/${passport}`),

    getDiscounts: () =>
        axios.get('/api/discount'),
    editDiscount: (discount : any) =>
        axios.put('/api/discount', discount),
    postDiscount: (discount : any)=>
        axios.post('/api/discount', discount),
    deleteDiscount: (id : any) => 
        axios.delete(`/api/discount/${id}`),
    getDiscountModels: () =>
        axios.get('/api/discount/models'),

    getInventory: () =>
        axios.get('/api/inventory'),
    editInventory: (inventory : any) =>
        axios.put('/api/inventory', inventory),
    postInventory: (inventory : any) =>
        axios.post('/api/inventory', inventory),
    deleteInventory: (id : any) =>
        axios.delete(`/api/inventory/${id}`),

    auth: (login : any, password : any, rememberMe : any) => 
        axios.post('http://localhost:56644/Account/Login', { login, password, rememberMe }),
    checkToken: () => 
        axios.get('/api/user/checkToken'),

    checkDebt: (name : any, passport : any, birthDate: any) =>
        axios.get(`api/client/checkDebt`, { 
            params: {
                name,
                passport,
                birthDate,
            }
        })
}