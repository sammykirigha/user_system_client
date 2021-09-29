import { call, put } from 'redux-saga/effects';
import {
    getAllProjectsService,
    projectCreateService,
    updateProjectService
} from '../../services/projectService';
import {
    createProjectFail,
    createProjectSuccess,
    getProjectsFail,
    getProjectsSuccess,
    updateProjectFail,
    updateProjectSuccess
} from '../../redux/actions/project';


export function*createProjectSaga(action) {
    try {
        const project = yield call(projectCreateService, action.project);
        yield put(createProjectSuccess(project));
    } catch (error) {
        yield put(createProjectFail('Failed to create project try again!!!...'));
    }
}

export function*getAllProjectsSaga(action) {
    try {
        const projects = yield call(getAllProjectsService);
        console.log('projects from database not yet', projects)
        yield put(getProjectsSuccess(projects));
    } catch (error) {
        yield put(getProjectsFail('Failed to load your projects'));
    }
}

export function* updateProjectSaga(action) {
    const {id} = action
    try {
        const newData = yield call(updateProjectService, id)
        yield put(updateProjectSuccess(newData))

    } catch (error) {
        yield put(updateProjectFail('Failed to update'))
    }
}
