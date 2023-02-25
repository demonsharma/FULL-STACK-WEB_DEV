import React from 'react'

export default function LiftingOne(props) {
    const params = props.params
    const update = props.update
    const handleFirst=(event)=>{
        update({...params,firstName:event.target.value})
    }
    const handleLast=(event)=>{
        update({...params, lastName : event.target.value})
    }
    return (
        <div className='container'>
            <form>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" value={params.firstName} onChange={handleFirst} aria-label="First name"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" value={params.lastName} onChange={handleLast} aria-label="Last name"/>
                    </div>
                </div>
            </form>

        </div>
    )
}

