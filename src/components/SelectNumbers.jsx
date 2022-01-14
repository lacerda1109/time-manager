import { palette } from '../theme/palette'
import {
    IoIosArrowBack,
    IoIosArrowForward
} from 'react-icons/io'
import './SelectNumbers.css'

export default function SelectNumbers(props) {
    function formatNumber(number) {
        return number < 10 ? '0' + number : number
    }

    return (
        <div
            style={{ textAlign: 'center' }}
        >
            <label>{props.title}</label>
            <div
                style={{ display: 'flex', marginTop: '10px' }}
            >
                <div
                    className="button"
                    style={{
                        backgroundColor: palette.secondaryColor,
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '4px 0 0 4px',
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                        if (!props.state == 0) {
                            props.setState(props.state - 1)
                        }
                    }}
                ><IoIosArrowBack /></div>
                <select
                    style={{
                        width: '55px'
                    }}
                    value={props.state}
                    onChange={(e) => {
                        props.setState(Number(e.target.value))
                    }}
                >
                    {(props.options).map((el, i) => (<option key={i} value={el}>{formatNumber(el)}</option>))}
                </select>
                <div
                    className="button"
                    style={{
                        backgroundColor: palette.secondaryColor,
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '0 4px 4px 0',
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                        if (!(props.state == props.options[props.options.length - 1])) {
                            props.setState(props.state + 1)
                        }
                    }}
                ><IoIosArrowForward /></div>
            </div>
        </div>
    )
}