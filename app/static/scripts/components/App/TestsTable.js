import React, { useState, useEffect } from 'react';
import ActionsToolbar from './ActionsToolbar';

async function getTestTable(id) {
    return axios({
        method: 'GET',
        url: '/api/tests/' + id,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(credentials)
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
        }
        return error.response;
    });
};

const TableData = (data) => {
    return (
        <>
            <tr className="form-group">
                <td><textarea className="form-control border-0" defaultValue={'Test #1'}/></td>
                <td><textarea className="form-control border-0" defaultValue={'1) Go to'}/></td>
                <td><textarea className="form-control border-0" defaultValue={'1) Verify'}/></td>
                <td><textarea className="form-control border-0" defaultValue={'PASS 1'}/></td>
            </tr>
            <tr className="form-group">
                <td><textarea className="form-control border-0" defaultValue={'Test #2'}/></td>
                <td><textarea className="form-control border-0" defaultValue={'1) Go to'}/></td>
                <td><textarea className="form-control border-0" defaultValue={'1) Verify'}/></td>
                <td><textarea className="form-control border-0" defaultValue={'PASS 2'}/></td>
            </tr>
            <tr className="form-group">
                <td><textarea className="form-control border-0" defaultValue={'Test #3'}/></td>
                <td><textarea className="form-control border-0" defaultValue={'1) Go to'}/></td>
                <td><textarea className="form-control border-0" defaultValue={'1) Verify'}/></td>
                <td><textarea className="form-control border-0" defaultValue={'PASS 3'}/></td>
            </tr>
            <tr className="form-group">
                <td><textarea className="form-control border-0" defaultValue={'Test #4'}/></td>
                <td><textarea className="form-control border-0" defaultValue={'1) Go to'}/></td>
                <td><textarea className="form-control border-0" defaultValue={'1) Verify'}/></td>
                <td><textarea className="form-control border-0" defaultValue={'PASS 4'}/></td>
            </tr>
        </>
    )
}

const TestsTable = () => {
    const [isTableLoaded, setIsTableLoaded] = useState(null);

    return (
        <React.Fragment>
            <ActionsToolbar />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">
                            <p>Step Name</p>
                            <p className='text-body-secondary fw-lighter'>(What do we want to test?)</p>
                        </th>
                        <th scope="col">
                            <p>Step Steps</p>
                            <p className='text-body-secondary fw-lighter'>(Instructions how to test it?)</p>
                        </th>
                        <th scope="col">
                            <p>Expected Result</p>
                            <p className='text-body-secondary fw-lighter'>(What we expect to happen?)</p>
                        </th>
                        <th scope="col">
                            <p>Actual Result</p>
                            <p></p>
                        </th>
                    </tr>
                </thead>
                <tbody id='tests-list'>
                    <TableData />
                </tbody>
            </table>
        </React.Fragment>
    );
};

export default TestsTable;