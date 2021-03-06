import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import CreateJob from '../CreateJob';
import Jobs from '../Jobs';
import './style.css';

export default class JobFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
      jobs: props.jobs
    };
  };

  render() {
    let modalClose = job => {
      this.props.createJob(job);
      this.setState({ modalShow: false });
    };

    return (
      <div>
        <h1>My Jobs</h1>
        <Card>
          <Card.Header>
            <Button
              onClick={() => this.setState({ modalShow: true })}
            >
              Add new job
            </Button>
          </Card.Header>
          <Card.Body>
            {this.props.jobs.map(job => {
              return (
                <Jobs
                  level={job.level}
                  position={job.position}
                >
                </Jobs>
              )
            })}
          </Card.Body>
          <CreateJob
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </Card>
      </div>
    );
  };
};