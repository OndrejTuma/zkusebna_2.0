import {client} from './apollo';

import getTopCategoriesQuery from './queries/getTopCategoriesQuery.graphql';
import getCalendarReservationsForRangeQuery from './queries/getCalendarReservationsForRangeQuery.graphql';

export async function getTopCategories() {
    return await client.query({
        query: getTopCategoriesQuery,
    });
}

export async function getCalendarReservationsForRange(since, until) {
    return await client.query({
        query: getCalendarReservationsForRangeQuery,
        variables: {
            since,
            until,
        },
    });
}


/*
import getAllItemsQuery from '../data/queries/getAllItemsQuery.graphql'
import getAllCategoriesQuery from '../data/queries/getAllCategoriesQuery.graphql'
import getStructuredCategoriesQuery from '../data/queries/getStructuredCategoriesQuery.graphql'
import getReservationsWithinRangeQuery from '../data/queries/getReservationsWithinRangeQuery.graphql'
import updateItemNameMutation from '../data/queries/updateItemNameMutation.graphql'
import updateItemPriceMutation from '../data/queries/updateItemPriceMutation.graphql'

export const getAllItems = client.query({query: getAllItemsQuery});
export const getAllCategories = client.query({query: getAllCategoriesQuery});
export const getStructuredCategories = client.query({query: getStructuredCategoriesQuery});
export const getReservationsWithinRange = (since, until) => client.query({
    query: getReservationsWithinRangeQuery,
    variables: {since, until},
});

export const updateItemName = (id, name) =>
    _updateColumn({
        mutation: updateItemNameMutation,
        variables: {id, name},
        //refetchQueries: [{query: allItemsQuery}]
    });

export const updateItemPrice = (id, price) =>
    _updateColumn({
        mutation: updateItemPriceMutation,
        variables: {id, price},
    });

const _updateColumn = mutation => client
    .mutate(mutation)
    .then(() => console.info('Updated item', mutation.variables))
    .catch(error => console.error('Failed to update item', error.message));
*/