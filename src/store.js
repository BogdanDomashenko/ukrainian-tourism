import { createStore } from 'vuex'
import axios from 'axios';

let server = 'http://localhost:9999';

export const store = createStore({
    state: {
        internalExternalData: [],
        coutriesData: [],
        regionsData: [],
        transportData: []
    },
    mutations: {
        setInternalExternal: (state, internalExternalData) => state.internalExternalData = internalExternalData,
        setCountriesData: (state, coutriesData) => state.coutriesData = coutriesData,
        setRegionsData: (state, regionsData) => state.regionsData = regionsData,
        setTransportData: (state, transportData) => state.transportData = transportData,
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
        }
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
    }
})