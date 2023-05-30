import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const datas = [
  {
    id: 1,
    phone: '+1-202-555-0115',
    country: {
      id: 2,
      name: 'United States',
    },
  },
  {
    id: 2,
    phone: '+1-202-555-0145',
    country: {
      id: 2,
      name: 'United States',
    },
  },
  {
    id: 3,
    phone: '+1-202-555-0127',
    country: {
      id: 2,
      name: 'United States',
    },
  },
  {
    id: 4,
    phone: '+1-202-555-0168',
    country: {
      id: 2,
      name: 'United States',
    },
  },
  {
    id: 5,
    phone: '+880-165-552-5408',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 6,
    phone: '+880-115-553-7167',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 7,
    phone: '+880-115-553-7168',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 8,
    phone: '+880-115-553-7112',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 9,
    phone: '+880-115-553-7656',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 10,
    phone: '+880-115-553-4656',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 11,
    phone: '+880-115-553-7864',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 12,
    phone: '+880-115-551-0862',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 13,
    phone: '+880-175-559-9376',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 14,
    phone: '+880-115-556-5556',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 15,
    phone: '+880-175-553-2049',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 16,
    phone: '9404+880-115-553-822',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 17,
    phone: '+880-115-558-7860',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 18,
    phone: '+880-115-553-9404',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 19,
    phone: '+880-165-559-4793',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
  {
    id: 20,
    phone: '+880-165-558-5109',
    country: {
      id: 1,
      name: 'Bangladesh',
    },
  },
];
const Problem2 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            variant="primary"
            onClick={handleShow}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>

          <button
            variant="primary"
            onClick={handleShow}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                {datas.map((data) => (
                  <li key={data.id}>
                    {data.phone} {data.country.name}
                  </li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
