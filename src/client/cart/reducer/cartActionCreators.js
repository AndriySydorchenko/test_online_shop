// import TournamentsService from '../services/tournaments.service';
// import { setProcessedTournamentsData } from './tournamentsReducer';
// import { setLoadingStatus } from '../../../../app/store/apiReducer';
//
// const tournamentsService = new TournamentsService();

import {setDeletingItem, deleteProduct} from "./cartReducer";

export const cartActionCreators = (id) => {
    return async ( dispatch ) => {
        dispatch(setDeletingItem(id));

            await setTimeout(() => {
                dispatch(deleteProduct())
            }, 3000);


        // try {
        //     await tournamentsService.getAllTournaments(queryProperties)
        //         .then((res) => {
        //             dispatch(setProcessedTournamentsData(res.result));
        //             dispatch(setLoadingStatus(false));
        //         })
        // } catch (err) {
        //     console.log(err);
        //     dispatch(setLoadingStatus(false));
        // }
    }
};


