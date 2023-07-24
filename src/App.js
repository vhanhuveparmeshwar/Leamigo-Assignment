import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");
  const [date, setDate] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [availableVehicles, setAvailableVehicles] = useState([]);

  const handleSearch = () => {
    // Simulate API call to get available vehicles

    const dummyApiResponse = [
      { id: 1, airlineName: "Airline 1", planeName: "Boeing 737", price: 150 },
      { id: 2, airlineName: "Airline 2", planeName: "Airbus A320", price: 180 },
      {
        id: 3,
        airlineName: "Airline 3",
        planeName: "Embraer E190",
        price: 200,
      },
    ];
    setAvailableVehicles(dummyApiResponse);
  };

  const handleBookAirline = (vehicle) => {
    
    alert(`Booking Details:
Airline Name: ${vehicle.airlineName}
Plane Name: ${vehicle.planeName}
Number of People: ${numPeople}
Start Destination: ${pointA}
End Destination: ${pointB}
Flight Start Time: ${getRandomTime()}
Flight End Time: ${getRandomTime()}`);
  };

  const getTotalPrice = (price, numPeople) => {
    return price * numPeople;
  };

  const getRandomTime = () => {
    // Simulate random flight times (replace with actual logic if needed)
    const hours = Math.floor(Math.random() * 12);
    const minutes = Math.floor(Math.random() * 60);
    const meridiem = Math.random() > 0.5 ? "AM" : "PM";
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${meridiem}`;
  };

  return (
    <div className="App">
      <h1>Airport Transfer Booking App</h1>
      <div className="search-container">
        <p>
          Book your airport transfer with ease. Enter your travel details below
          to find the perfect vehicle for your journey.
        </p>
        <div className="search-inputs">
          <input
            type="text"
            placeholder="Point A"
            value={pointA}
            onChange={(e) => setPointA(e.target.value)}
          />
          <input
            type="text"
            placeholder="Point B"
            value={pointB}
            onChange={(e) => setPointB(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of People"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="vehicle-list">
        <h2>Available Vehicles:</h2>
        {availableVehicles.map((vehicle) => (
          <div className="vehicle-item" key={vehicle.id}>
            <div className="vehicle-info">
              <span>{vehicle.airlineName}</span>
              <span>{vehicle.planeName}</span>
              <span>Price per person: ${vehicle.price}</span>
              <span>
                Individual Price: ${getTotalPrice(vehicle.price, numPeople)}
              </span>
              <span>
                Total Price (Round Trip): $
                {getTotalPrice(vehicle.price, numPeople * 2)}
              </span>
            </div>
            <button onClick={() => handleBookAirline(vehicle)}>
              Book Airline
            </button>
          </div>
        ))}
      </div>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Airport Transfer Booking App. All
        rights reserved.
      </footer>
    </div>
  );
};

export default App;
