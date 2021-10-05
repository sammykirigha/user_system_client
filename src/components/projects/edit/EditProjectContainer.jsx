import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import Spinner from '../../spinner/Spinner.js';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Form } from 'semantic-ui-react';
import {
  getSingleProjectLoad,
  resetSelectedProject,
  updateProjectLoad
} from '../../../redux/actions/project';

const teamLeadMembersOptions = [
  { key: 1, text: 'Sammy', value: 'Sammy' },
  { key: 2, text: 'Dorcis', value: 'Dorcis' },
  { key: 3, text: 'Kirigha', value: 'Kirigha' },
  { key: 4, text: 'John', value: 'John' },
  { key: 5, text: 'Mwasho', value: 'Mwasho' }
];

const initialActivityOptions = [
  { key: 1, text: 'Planning & Scheduling', value: 'Planning & Scheduling' },
  { key: 2, text: 'Project Timeline View', value: 'Project Timeline View' },
  { key: 3, text: 'Collaboration', value: 'Collaboration' }
];

const EditProjectContainer = () => {
  const state = useSelector((state) => state.oneProj);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const p = state.project;
  const getDate = (date) => {
    const d = new Date(date);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDay();
    return `${day}/${month}/${year}`;
  };

  const [project, setProject] = useState({
    project_name: p?.project_name,
    start_date: p?.start_date,
    duration: p?.duration,
    description: p?.description,
    team_lead: p?.team_lead,
    initial_activity: p?.initial_activity
  });

  const [handleSelect, sethandleSelect] = useState(teamLeadMembersOptions.text);

  const onChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const selectHandle = (e, data) => {
    const { name, value } = data;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProjectLoad(id, project));
    history.push('/projects');
  };

  const minDate = moment();

  useEffect(() => {
    dispatch(getSingleProjectLoad(id));
    return () => {
      dispatch(resetSelectedProject());
      setProject((prev) => ({
        ...prev,
        project_name: '',
        start_date: '',
        duration: '',
        description: '',
        team_lead: '',
        initial_activity: ''
      }));
    };
  }, []);

  if (state.loading) return <Spinner />;

  return (
    <div className="ui grid">
      <div style={{ margin: '15px 0' }}>
        <h4>Update this project</h4>
      </div>
      <div className="ten twelve wide centered column"></div>
      <Form onSubmit={onFormSubmit}>
        <Form.Field>
          <label htmlFor="name">
            Project name
            <input
              type="text"
              name="project_name"
              id="name"
              placeholder="enter project name"
              autoComplete="off"
              value={project.project_name || p?.project_name}
              onChange={onChange}
            />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="date">
            {' '}
            Start Date
            <ReactDatePicker
              name="start_date"
              id="date"
              value={getDate(p?.start_date)}
              autoComplete="off"
              dateFormat="dd/MM/yyyy"
              selected={project.start_date || p?.start_date}
              minDate={minDate}
              onChange={onChange}
              filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
              isClearable
              showYearDropdown
              scrollableYearDropdown
            />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="duration">
            {' '}
            duration
            <textarea
              name="duration"
              id="duration"
              placeholder="type project duration"
              rows="1"
              value={project.duration || p?.duration}
              onChange={onChange}
            />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="duration">
            {' '}
            Description
            <textarea
              name="description"
              id="description"
              placeholder="type project description"
              rows="4"
              value={project.description || p?.description}
              onChange={onChange}
            />
          </label>
        </Form.Field>
        <Form.Field>
          <label>Team Lead</label>
          <Dropdown
            placeholder="select Team Lead"
            name="team_lead"
            fluid
            search
            value={project.team_lead || p?.team_lead}
            onChange={selectHandle}
            selection
            options={teamLeadMembersOptions}
          />
        </Form.Field>
        <Form.Field>
          <label>Initial Activity</label>
          <Dropdown
            placeholder="Select Initial Activity"
            name="initial_activity"
            fluid
            search
            value={project.initial_activity || p?.initial_activity}
            onChange={selectHandle}
            selection
            options={initialActivityOptions}
          />
        </Form.Field>
        <Button primary type="submit">
          Update
        </Button>
        <Button primary type="submit" style={{ marginLeft: '100px' }}>
          <Link to="/projects">Cancel</Link>
        </Button>
      </Form>
    </div>
  );
};

export default EditProjectContainer;
