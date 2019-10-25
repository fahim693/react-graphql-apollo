import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import classNames from 'classnames'

const LAUNCH_QUERY = gql`
query LaunchQuery($flight_number: Int!){
    launch(flight_number: $flight_number){
        flight_number,
        mission_name,
        launch_date_local,
        launch_success,
        launch_year
        rocket{
            rocket_id,
            rocket_name,
            rocket_type
        }
    }
}`

export default function Launch(props) {
    // console.log(props)
    let flight_number = parseInt(props.match.params.flight_number)
    // console.log(flight_number)
    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: {
            flight_number
        }
    });
    if (loading) return <h4>Loading ...</h4>
    if (error) console.log(error)
    return (
        <div>
            {/* <h1>Launch</h1> */}
            {console.log(data)}
            <h1 className="display-4 my-3">
                <span className="text-dark">Mission : </span>
                {data.launch.mission_name}
            </h1>
            <h4 className="mb-3">Launch Details</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    Flight Number : {data.launch.flight_number}
                </li>
                <li className="list-group-item">
                    Launch Year : {data.launch.launch_year}
                </li>
                <li className="list-group-item">
                    Launch Successful : <span className={classNames({
                        'text-success': data.launch.launch_success,
                        'text-danger': !data.launch.launch_success
                    })}>{data.launch.launch_success ? 'Yes' : 'No'}</span>
                </li>
            </ul>
            <h4 className="mb-3">Rocket Details</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    Rocket Id : {data.launch.rocket.rocket_id}
                </li>
                <li className="list-group-item">
                    Rocket Name : {data.launch.rocket.rocket_name}
                </li>
                <li className="list-group-item">
                    Rocket Type : {data.launch.rocket.rocket_type}
                </li>
            </ul>
        </div>
    )
}
