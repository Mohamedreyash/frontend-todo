import React from 'react'
import "./Table.css"


const Table = () => {
    return (
        <div>
            <table id="myTable" className="table table-hover">
                <thead>
                    <th scope="col">Activity</th>
                    <th scope="col">Time taken</th>
                    <th scope="col">Action</th>
                </thead>
            </table>
        </div>
    )
}

export default Table