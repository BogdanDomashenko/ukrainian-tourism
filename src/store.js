import { createStore } from 'vuex'
import axios from 'axios';

const server = 'https://api-ukrainian-tourism.herokuapp.com';

export const store = createStore({
    state: {
        internalExternalData: [],
        coutriesData: [],
        regionsData: [],
        transportData: [],
        employmentsData: [],
        investementsData: [],
    },
    mutations: {
        setInternalExternal: (state, internalExternalData) => state.internalExternalData = internalExternalData,
        setCountriesData: (state, coutriesData) => state.coutriesData = coutriesData,
        setRegionsData: (state, regionsData) => state.regionsData = regionsData,
        setTransportData: (state, transportData) => state.transportData = transportData,
        setEmploymentsData: (state, employmentsData) => state.employmentsData = employmentsData,
        setInvestementsData: (state, investementsData) => state.investementsData = investementsData,
    },
    getters: {
        internalExternal (state) {
            return state.internalExternalData;
        },
        coutries (state) {
            return state.coutriesData;
        },
        regions (state) {
            return state.regionsData;
        },
        transport (state) {
            return state.transportData;
        },
        employments (state) {
            return state.employmentsData;
        },
        investements (state) {
            return state.investementsData;
        },
    },
    actions: {
        getInternalExternalFromAPI(context) {
            return axios.get(`${server}/internal-externals`)
            .then((response) => {
                context.commit('setInternalExternal', response.data)
            }).catch((error) => {
                console.log(error);
                return error;
            });
        },
        getCoutriesDataFromAPI(context) {
            return axios.get(`${server}/countries`)
            .then((response) => {
                context.commit('setCountriesData', response.data)
            }).catch((error) => {
                console.log(error);
                return error;
            });
        },
        getRegionsFromAPI(context) {
            return axios.get(`${server}/ukrainian-regions`)
            .then((response) => {
                context.commit('setRegionsData', response.data)
            }).catch((error) => {
                console.log(error);
                return error;
            });
        },
        getTransportFromAPI(context) {
            return axios.get(`${server}/transports`)
            .then((response) => {
                context.commit('setTransportData', response.data)
            }).catch((error) => {
                console.log(error);
                return error;
            });
        },
        getEmploymentsFromAPI(context) {
            return axios.get(`${server}/employments`)
            .then((response) => {
                context.commit('setEmploymentsData', response.data)
            }).catch((error) => {
                console.log(error);
                return error;
            });
        },
        getInvestementsFromAPI(context) {
            return axios.get(`${server}/investements`)
            .then((response) => {
                context.commit('setInvestementsData', response.data)
            }).catch((error) => {
                console.log(error);
                return error;
            });
        },
    }
})