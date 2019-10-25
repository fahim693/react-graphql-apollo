import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import LaunchItem from './LaunchItem'

const LAUNCHES_QUERY = gql`
    {
        launches{
            flight_number
            mission_name,
            launch_date_local,
            launch_success
        }
    }
`;

function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (loading) return <h4>Loading ...</h4>
    if (error) console.log(error)
    console.log(data)
    return (
        <React.Fragment>
            <h4 className="display-4 my-4">Launches</h4>
            {
                data.launches.map(item => (
                    <LaunchItem key={item.flight_number} launch={item} />
                ))
            }
        </React.Fragment>
    )
}

export default Launches
