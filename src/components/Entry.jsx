import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
    const [resource, setResource] = useState({ option: "people", id: "" });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setResource({ ...resource, [e.target.name]: e.target.value });
    };
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/${resource.option}/${resource.id}/`);
    };

    return (
        <fieldset >
            <legend>Entry.jsx</legend>
            <form onSubmit={handleSearch}>
                <label className="m-2">Search for: </label>
                <select className="m-2 p-1"  name="option"
                    value={resource.option}
                    onChange={handleChange}>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                </select>
                <label className="m-2">ID: </label>
                <input className="m-2" type='number' name='id'value={resource.id} onChange={handleChange} />
                <button className='btn btn-info'>Search</button>
            </form>
        </fieldset>
    )
}

export default Entry;
