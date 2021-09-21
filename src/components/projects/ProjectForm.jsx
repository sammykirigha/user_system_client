import moment from 'moment';
import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Form } from 'semantic-ui-react';

const ProjectForm = (props) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const minDate = moment();
    return (
        <div className='ui grid'>
            <div className='ten twelve wide centered column'></div>
            <Form>
                <Form.Field>
                    <label htmlFor='name'> Project name
                        <input type="text" name='name' id='name'
                            placeholder='project name'
                            autoComplete='off'
                            // value={}
                            // onChange={}
                        />
                    </label>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='duration'> duration
                        <textarea name='duration' id='duration'
                            // value={}
                            // onChange={}
                        />
                    </label>
                </Form.Field>
                <Form.Field>
                    <label htmlFor='date'> Start Date
                       <ReactDatePicker name='date' id='date'
                            autoComplete='off'
                            dateFormat='dd/MM/yyyy'
                            selected={selectedDate}
                            minDate={minDate}
                            onChange={(date) => setSelectedDate(date)}
                            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
                            isClearable
                            showYearDropdown
                            scrollableYearDropdown
                        
                        />
                    </label>
                </Form.Field>
                <Button primary> {props.buttonText}</Button>
            </Form>
        </div>
    );
};

export default ProjectForm;
