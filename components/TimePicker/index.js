import React, {Component} from 'react'
import Picker from 'rc-time-picker'
import moment from 'moment/moment'

import 'rc-time-picker/assets/index.css'

export default class TimePicker extends Component {
    render() {
        const {defaultValue} = this.props
        return <div>
            <Picker defaultValue={defaultValue || moment().startOf('hour')} showSecond={false} minuteStep={15} />
        </div>
    }
}