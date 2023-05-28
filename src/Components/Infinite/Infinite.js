import React, { useState } from 'react';

function Infinite() {

    const [aseat, setAseat] = useState(80);
    const [selseat, setSelseat] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState("");
    const [full, setFul] = useState("");

    const inputFunction = (e) => {
        setInput(e.target.value);
        setError("");
    };

    const Booking = () => {
        const num = parseInt(input, 10);

        if (aseat == 0) {
            alert('All seats have been booked!');
            return;
        }
        if (isNaN(num) || num <= 0 || num > 7) {
            setError("Please enter right number..")
            return;
        }
        if (num > aseat) {
            setFul("All seat is fullll..");
            return;
        }
        let updatedSeats = [...selseat];

        for (let i = 1; i <= num; i++) {
            updatedSeats.push(i);
        }

        setAseat(aseat - num);
        setSelseat(updatedSeats);
        setInput("");
    };

    const resetBtn = () => {
        setSelseat([]);
        setAseat(80);
        setError("");
        setFul("");
        setInput('');
    }
    let i = 1;
    const numbers = Array.from({ length: 80 }, (_, index) => index + 1);
    console.log(numbers);

    return (
        <div>
            <h2>Train Seat Booking</h2>
            <h4>Available Seats: {aseat}</h4>
            <p>Selected Seats: {selseat.join(', ')}</p>
            <h3>{full}</h3>
            <input
                type="number"
                value={input}
                onChange={inputFunction}
            />
            <br />
            <br />
            <div >
            <button className='btn' onClick={Booking}>Book Seats</button>
            <button  className='btn'  onClick={resetBtn}> Reset</button>

            </div>
         
            <h4>{error}</h4>
            <div>{

             selseat.map((e)=>{
                return (
                    <>
                    <span> { i++ } </span>
                    </>
                )
             })




            }</div>
        </div>
    );
};

export default Infinite
