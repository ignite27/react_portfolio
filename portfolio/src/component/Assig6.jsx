import React, { useState } from 'react';

const Assign6 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [greeting, setGreeting] = useState('');
  const [ageMessage, setAgeMessage] = useState('');

  const handleAgree = () => {
    setGreeting(`Welcome ${name}`);
    setAgeMessage(`You are ${age} years old`);
  };

  const handleDisagree = () => {
    setName('');
    setAge('');
  };

  return (
    <div>
      <h1 className="bg-primary" style={{ display: 'flex', justifyContent: 'center' }}>
        Welcome
      </h1>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="row" style={{ border: '2px solid black' }}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <label htmlFor="name">name:</label>
            <input
              type="text"
              name="name"
              id="name"
              style={{ marginBottom: '18px' }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <br />
            <label htmlFor="age" style={{ marginLeft: '15px' }}>
              age:
            </label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <button type="button" onClick={handleAgree} className="btn btn-light">
              Agree
            </button>
            <button type="button" onClick={handleDisagree} className="btn btn-light">
              Disagree
            </button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <div>
        <h3 id="greet">{greeting}</h3>
        <h3 id="agetell">{ageMessage}</h3>
      </div>
    </div>
  );
};

export default Assign6;
