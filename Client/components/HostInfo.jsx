/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'moment';
import StarIcon from '@material-ui/icons/Star';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import SecurityIcon from '@material-ui/icons/Security';
import { Modal, Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const HostInfo = () => {
  const [showMore, setShow] = useState(false);
  const [showModal, setModal] = useState(false);
  const [msgName, setName] = useState('');
  const [msgEmail, setEmail] = useState('');
  const [msgTopic, setTopic] = useState('');
  const [msgBody, setBody] = useState('');
  const [valid, setValid] = useState('');

  const [host, setHost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/hostInfo/${id}`)
      .then(({ data }) => {
        setHost(data);
      })
      .catch((err) => console.log(err));
  });

  const {
    name, desc, photo, joinDate, verified, reviews, response, _id,
  } = host;

  const toggleDesc = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const resetState = () => {
    setName('');
    setEmail('');
    setTopic('');
    setBody('');
    setModal(false);
    setValid(false);
  };

  const submitMessage = (e) => {
    if (!e.currentTarget.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      setValid(true);
    } else {
      e.preventDefault();
      const body = {
        name: msgName,
        email: msgEmail,
        topic: msgTopic,
        message: msgBody,
      };
      axios.put(`http://locahost:3001/email/${_id}`, body)
        .then((res) => {
          console.log(res);
          resetState();
        })
        .catch((err) => {
          console.log(err);
          resetState();
        });
    }
  };

  return !host.name ? <div />
    : (
      <div>
        <div id='host-bar'>
          <img src={photo} alt='' id='host-img' />
          <div id='host-bar-info' style={{ display: 'inline-block' }}>
            <h3 id='host-name'>
              {`Hosted by ${name.split(' ')[0]}`}
            </h3>
            <div id='host-join'>
              {`Joined in ${Moment(new Date(joinDate)).format('MMMM YYYY')}`}
            </div>
          </div>
        </div>
        <br />
        <div id='host-info'>
          <div>
            <div id='host-data'>
              <StarIcon style={{ color: 'red' }} />
              <div id='reviews'>
                {`${reviews} Reviews`}
              </div>
              {verified ? <VerifiedUserIcon style={{ color: 'red' }} /> : <ReportProblemIcon style={{ color: 'red' }} />}
              <div id='verified'>
                {verified ? 'Identity Verified' : 'Not verified'}
              </div>
            </div>
            <br />
            <div id='host-desc'>
              {showMore && desc}
              {!showMore && desc.split(' ').slice(0, 25).join(' ')}
              {!showMore && '...  '}
              {!showMore && <a href='#' onClick={toggleDesc}>read more</a>}
            </div>
          </div>
          <div id='host-contact'>
            <div>
              {`Response rate: ${response.rate}%`}
            </div>
            <br />
            <div>
              {`Response time: ${response.time}`}
            </div>
            <br />
            <button type='button' onClick={() => setModal(true)}>Contact host</button>
            <div>
              <SecurityIcon style={{ color: 'blue', display: 'inline-block' }} />
              <div id='prot-warning'>
                To protect your payment, never transfer
                money or communicate outside of the Airbnb
                website or app.
              </div>
            </div>
          </div>
          <Modal
            show={showModal}
            onHide={resetState}
            centered
            animation
          >
            <Modal.Header true>
              <Modal.Title>{`Contact ${name.split(' ')[0]}!`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form noValidate validated={valid} onSubmit={submitMessage}>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Name: </Form.Label>
                  <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} required />
                  <Form.Control.Feedback type='invalid'>
                    Please provide your name
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Topic: </Form.Label>
                  <Form.Control as="select" required onChange={(e) => setTopic(e.target.value)}>
                    <option hidden>{' '}</option>
                    <option>Getting there</option>
                    <option>House details and rules</option>
                    <option>Availability</option>
                    <option>Refund policy</option>
                    <option>Other</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please provide a topic for the message
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustom01">
                  <Form.Label>Message: </Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Message here" required onChange={(e) => setBody(e.target.value)} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type='submit'>Send message</Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={resetState}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <hr />
      </div>
    );
};

export default HostInfo;
