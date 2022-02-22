import React from 'react'
import api from '../../api'
import Table from '../common/Table'
import { Modal, withStyles, Button } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import CreateOrder from '../createModals/CreateOrder'   

const styles = (theme : any) => ({
    modal: window.innerWidth > 560 ? {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
        borderRadius: '5px',
        boxSizing: 'border-box',
        maxHeight: '100%',
        overflowY: 'scroll'
    } : {
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        outline: 'none',
        height: '100%',
        width: '100%',
        boxSizing: 'border-box',
        maxHeight: '100%',
        overflowY: 'scroll'
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: '50%',
        minWidth: 'auto',
        zIndex: 1000,
    }
})

interface IOrdersProps {
  classes?: any;
  user?: any;
}

interface IOrdersState {
}
export default class Order extends React.Component <IOrdersProps, IOrdersState> {
    state = {
        data: [],
        filter: 'active',
        isCreateModalOpen: false,
        editingOrder: null,
        closingOrder: null,
        reminderOrder: null,
        isDataLoading: true,
        isHistoryDialogOpen: false,
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         error: null,
    //         isLoaded: false
    //     };
    // }
    columns = [
        {
            field: 'toolsName',
            title: 'Инструмент',
            customFilterAndSearch: (filterValue : any, row : any, columnDef : any) =>
                Object.values(row).find(value => String(value).toLowerCase().includes(filterValue.toLowerCase().trim()))
        },
        {
            field: 'startDate',
            defaultSort: 'desc',
            title: 'Начало аренды',
        },
        {
            field: 'clientName',
            title: 'Клиент',
        },
        {
            field: 'phoneNumber',
            title: 'Телефон',
        },
    ]

    openCreateModal = () =>
        this.setState({ isCreateModalOpen: true })
    closeCreateModal = () =>
        this.setState({ isCreateModalOpen: false })

    openEditModal = (order : any) =>
        this.setState({ editingOrder: order })
    closeEditModal = () =>
        this.setState({ editingOrder: null })

    openReminderModal = (order : any) =>
        this.setState({ reminderOrder: order })
    closeReminderModal = () =>
        this.setState({ reminderOrder: null })

    openConfirmationDialog = (order : any) =>
        this.setState({ closingOrder: order })
    closeConfirmationDialog = () =>
        this.setState({ closingOrder: null })

    openHistoryDialog = () =>
        this.setState({ isHistoryDialogOpen: true })
    closeHistoryDialog = () =>
        this.setState({ isHistoryDialogOpen: false })

    filterToActive = () =>
        this.setState({ filter: 'active' })
    filterToFinished = () =>
        this.setState({ filter: 'finished' })
    filterToAll = () =>
        this.setState({ filter: 'all' })
    // deleteOrder = (id : any)  => {
    //     api.deleteOrder(id)
    //         .then(this.setState({ data: this.state.data.filter(item => item._id !== id) }))
    //         .catch(error => console.error(error))
    // }

        // editOrder = (o : any) => {
        //     return 1
        // }
        deleteOrder = (o : any) => {
            return 1
        }
        editOrder = (order : any) => {
            const { data } = this.state
            this.setState({ data: data.map(item => {
                if (item._id === order._id) {
                    return order
                }
                return item
            }) })
    
            this.closeEditModal()
        }
    
        // addReminder = (order : any) => {
        //     const { data } = this.state
        //     this.setState({ data: data.map(item => {
        //         if (item._id === order._id) {
        //             return order
        //         }
        //         return item
        //     }) })
    
        //     this.closeReminderModal()
        // }
    
        closeOrder = (data : any) => {
            api.editOrder(data)
                .then(() => this.closeConfirmationDialog())
                .catch(error => console.error(error))
    
            this.editOrder(data)
        }
    
        addOrder = (order : any) => {
            this.setState({ data: [{
                ...order,
                toolName: order.tool ? order.tool.name : '',
                clientName: order.client ? order.client.name : '',
                phoneNumber: order.client ? order.client.phoneNumber : '',
            }, ...this.state.data] })
            this.closeCreateModal()
       }

    render() {
        const {
            data,
            isCreateModalOpen,
            editingOrder,
            closingOrder,
            reminderOrder,
            filter,
            isDataLoading,
            isHistoryDialogOpen,
        } = this.state
        const { classes, user } = this.props
        return (
            <React.Fragment>
            {/* <div className='container'>
                    <Table
                        title='Заказы'
                        columns={ this.columns }
                        data={ data }
                        type='order'
                        editRow={ this.openEditModal }
                        deleteRow={ this.deleteOrder }
                        filter={filter}
                        onClose={ this.openConfirmationDialog }
                        onAddReminder={ this.openReminderModal }
                        filterToActive={ this.filterToActive }
                        filterToFinished={ this.filterToFinished }
                        filterToAll={ this.filterToAll }
                        openHistoryDialog={ this.openHistoryDialog }
                        role={ user.role }
                        loading={ isDataLoading }
                    />
                </div> */}
                 <Modal
                    open={isCreateModalOpen}
                    onClose={this.closeCreateModal}
                >
                    <div className={classes.modal}>
                        <Button onClick={this.closeCreateModal} className={classes.closeButton}><CloseIcon /></Button>
                        <CreateOrder
                            addOrder={ this.addOrder }
                            role={ user.role }
                        />
                    </div>
                </Modal>
            </React.Fragment>
        )
    }
}