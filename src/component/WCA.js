import { Card } from '@mui/material'
import shadows from '@mui/material/styles/shadows'
import React from 'react'

export default function WCA() {
    return (
        <div><Card style={{ width: '80rem', height: '500px', border: "none" }} className="mx-2 mt-4 card_style" >
            <div className="card-body" style={{ textAlign: 'center' }}>
                <div className="card-body">
                    <h1 className="card-title" >MV SANJOHN SOLIDARITY</h1>
                    <h3 className="card-subtitle mb-2 text-body-secondary">WCA  |  TUNA FORT  |  5096 NAR(KCAL/KG)</h3>
                    <h3 className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita ipsum voluptatibus. Fugit inventore ad consequatur omnis nisi dicta alias asperiores reiciendis atque aspernatur et pariatur exercitationem neque, reprehenderit dolor.</h3>


                </div>


            </div>
            <Card style={{ width: '22rem', border: "none" }} className="column">

                <div className="card">
                    <h5 className="card-title">#31884</h5>
                    <h4 className="card-subtitle mb-2 text-body-secondary"> INR 122500</h4>
                    <p className="card-text">IONNIS,San Nicolas,abc contract ,WCA COAL</p>
                    
                </div>
            </Card>
            <Card style={{ width: '22rem', border: "none" }} className="column">

                <div className="card">
                    <h5 className="card-title">#31884</h5>
                    <h4 className="card-subtitle mb-2 text-body-secondary">INR 122600</h4>
                    <p className="card-text">IONNIS,San Nicolas,abc contract ,WCA COAL</p>
                   
                </div>
            </Card>
            \</Card>

        </div>


    )
}
