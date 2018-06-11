/*
 * Created by Cosmo Cochrane on 4/20/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var url = 'https://pingback.giphy.com/pingback'

/**
 * Class representing the networking client.
 */

class GphAnalytics {
    constructor(apiKey) {
        this.apiKey = apiKey
    }

    /**
     * Initialize the SDK by passing in the apiKey.
     */
    setCredentials(apiKey) {
        this.apiKey = apiKey
    }

    onClick(endpoint, gifId, userId, responseId) {
        const action = this.createEvent('click', gifId)
        this.fetchPingbackRequest(endpoint, action, userId, responseId)
    }

    onHover(endpoint, gifId, userId, responseId) {
        const action = this.createEvent('hover', gifId)
        this.fetchPingbackRequest(endpoint, action, userId, responseId)
    }

    onSeen(endpoint, gifId, userId, responseId) {
        const action = this.createEvent('seen', gifId)
        this.fetchPingbackRequest(endpoint, action, userId, responseId)
    }

    fetchPingbackRequest(endpoint, action, userId) {
        // if there are no actions lined up inside this pingbackType do nothing
        const session = this.createSession(endpoint, action, userId)
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                sessions: [session]
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    createEvent(eventType, gifId) {
        return {
            action_type: eventType,
            ts: new Date().getTime(),
            gif_id: gifId
        }
    }

    createSession(endpoint, action, userId, responseId) {
        const pingbackSessionSchemas = {
            search: {
                user: {
                    user_id: userId
                },
                events: [
                    {
                        event_type: 'GIF_SEARCH',
                        response_id: responseId,
                        actions: action
                    }
                ]
            }
        }

        return pingbackSessionSchemas[endpoint]
    }

    sortByEndpoints(actions) {
        const sortedByEndpoints = _.reduce(
            actions,
            function(actionsSortedByEndpoint, action) {
                //set the values needed to create session

                if (!actionsSortedByEndpoint.endpoint) {
                    actionsSortedByEndpoint.endpoint = [action]
                } else {
                    actionsSortedByEndpoint.endpoint.push(action)
                }

                return actionsSortedByEndpoint
            },
            {}
        )

        return sortedByResponseIds
    }

    sortByResponseIds(sortedByEndpointActions) {
        //loop over each key and create a new object based on response Ids
        const groupedByEndpointAndSortedByResponseId = [] // [{"search": {responseID-1 : [], responseID-2 : []}}, {"trending": {responseID-1 : [], responseID-2 : []}}]

        //Iterate over each list of actions filtered by ENDPOINT
        //Create nested lists where we sort actions by responseIDs
        for (key in sortedByEndpointActions) {
            groupedByEndpointAndSortedByResponseId.push(
                _.reduce(
                    sortedByEndpointActions[key],
                    function(actionsSortedByResponseId, action) {
                        //set the values needed to create session

                        if (!actionsSortedByResponseId.response_id) {
                            actionsSortedByResponseId.response_id = [action]
                        } else {
                            actionsSortedByResponseId.response_id.push(action)
                        }

                        return actionsSortedByResponseId
                    },
                    {}
                )
            )
        }
        //--

        return groupedByEndpointAndSortedByResponseId
    }

    bulkPingbackRequest(actions) {
        if (!Array.isArray(actions)) {
            throw new Error('argument must be an array of actions')
        }

        const actionsSortedByEndpoints = this.sortByEndpoints(actions)
        const createBatchesToFire = this.sortByResponseIds(actionsSortedByEndpoints)

        _.forEach(Object.keys(createBatchesToFire), key => {
            //grab list of actions for a given responseId
            let listOfActions = actionsSortedByResponseIds[key]
        })
    }

    createEventBULK(endpoint, eventType, gifId, responseId, userId) {
        [endpoint, eventType, gifId, responseId].forEach(argument => {
            if (typeof argument !== 'string') {
                throw new Error(`${argument} should be of type String but is not`)
            }
        })

        return {
            endpoint: endpoint,
            userId: userId,
            response_id: responseId,
            action_type: eventType,
            ts: new Date().getTime(),
            gif_id: gifId
        }
    }
}

module.exports = function(apiKey) {
    return new GphAnalytics(apiKey)
}
