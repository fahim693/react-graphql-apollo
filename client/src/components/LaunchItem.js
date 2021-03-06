import React from 'react'
import classNames from 'classnames'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

export default function LaunchItem(props) {
    // console.log(props)
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission :
                        <span className={classNames({
                        'text-success': props.launch.launch_success,
                        'text-danger': !props.launch.launch_success,
                    })}>
                            {props.launch.mission_name}
                        </span>
                    </h4>
                    <p>Launch Date : <Moment format="YYYY-MM-DD HH:MM">{props.launch.launch_date_local}</Moment></p>
                </div>
                <div className="col-md-3">
                    <Link className="btn btn-secondary" to={`/launch/${props.launch.flight_number}`}>Launch Details</Link>
                    
                </div>
            </div>
        </div>
    )
}
