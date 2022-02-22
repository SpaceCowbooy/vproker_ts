import React from 'react'
import {
    FormControlLabel,
    Switch,
} from '@material-ui/core'

export default class ToolDetail extends React.Component {
    state = {
        showID: false,
    }
    
    handleChangeShowId = e =>
        this.setState({ showID: e.target.checked })

    render() {
        const { data } = this.props
        return (
            <div className='row-detail'>
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.showID}
                            onChange={this.handleChangeShowId}
                            value={this.state.showID}
                            color='primary'
                        />
                    }
                    label='Показывать ID'
                    className='detail-switch'
                />
                <ul>
                    {this.state.showID ? <li>
                        <span className='field-name'>ID:</span>
                        <span className='field-value'>{data._id}</span>
                    </li> : null}
                    <li>
                        <span className='field-name'>Название:</span>
                        <span className='field-value'>{data.name}</span>
                    </li>
                    <li>
                        <span className='field-name'>Количество:</span>
                        <span className='field-value'>{data.amount}</span>
                    </li>
                    <li>
                        <span className='field-name'>Цена приобретения:</span>
                        <span className='field-value'>{data.purchasePrice}</span>
                    </li>
                    <li>
                        <span className='field-name'>Цена продажи:</span>
                        <span className='field-value'>{data.sellingPrice}</span>
                    </li>
                    <li>
                        <span className='field-name'>Поставщик:</span>
                        <span className='field-value'>{data.provider}</span>
                    </li>
                    <li>
                        <span className='field-name'>Примечания:</span>
                        <span className='field-value'>{data.description}</span>
                    </li>
                </ul>
            </div>
        )
    }
}