import { configureStore, createSlice } from '@reduxjs/toolkit'

let expjob = createSlice({
    name: 'expjob',
    initialState: [0, 0, 0, 0],
    reducers: {
        changeJob(state, a) {
            state[0] = a.payload
        },
        changeTravel(state, a) {
            state[1] = a.payload
        },
        changeSchool(state, a) {
            state[2] = a.payload
        },
        changeList(state, a) {
            state[3] = a.payload
        }
    }
});

export let { changeJob, changeTravel, changeSchool, changeList } = expjob.actions

let jobmap = createSlice({
    name: 'jobmap',
    initialState: [0, 0],
    reducers: {
        turnseoul(state, a) {
            state[0] = a.payload
        },
        turnggdo(state, a) {
            state[1] = a.payload
        }
    }
})

export let { turnseoul, turnggdo } = jobmap.actions

let travelmap = createSlice({
    name: 'travelmap',
    initialState: [0, 0, 0, 0, 0, 0, 0, 0],
    reducers: {
        travelic(state, a) {
            state[0] = a.payload
        },
        travelggdo(state, a) {
            state[1] = a.payload
        },
        travelgwdo(state, a) {
            state[2] = a.payload
        },
        travelcn(state, a) {
            state[3] = a.payload
        },
        travelcb(state, a) {
            state[4] = a.payload
        },
        traveljb(state, a) {
            state[5] = a.payload
        },
        traveljn(state, a) {
            state[6] = a.payload
        },
        travelbs(state, a) {
            state[7] = a.payload
        },
    }
})

export let { travelic, travelggdo, travelgwdo,
    travelcn, travelcb, traveljb, traveljn, travelbs
} = travelmap.actions

let schoolmap = createSlice({
    name: 'schoolmap',
    initialState: 0,
    reducers: {
        turnschool(state, a) {
            return a.payload
        }
    }
})

export let { turnschool } = schoolmap.actions

let travelgo = createSlice({
    name: 'travelgo',
    initialState: 0,
    reducers: {
        turntvgo(state, a) {
            return a.payload
        }
    }
})

export let { turntvgo } = travelgo.actions



export default configureStore({
    reducer: {
        expjob: expjob.reducer,
        jobmap: jobmap.reducer,
        travelmap: travelmap.reducer,
        schoolmap: schoolmap.reducer,
        travelgo: travelgo.reducer
    }
})

