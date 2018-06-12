/*
 * Created by Cosmo Cochrane on 4/20/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var url = 'https://pingback.giphy.com/pingback'
var eventTypes = {
    search: 'GIF_SEARCH',
    trending: 'GIF_TRENDING',
    related: 'GIF_RELATED',
    reactions: 'GIF_REACTIONS'
}
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

    /**
     * @param {String} endpoint name of GIPHY endpoint used
     * @param {String} gifId ID associated with specific gif action
     * @param {String} userId unique identifier for logged in user
     * @param {String} responseId ID returned from
     */
    onClick(endpoint, gifId, userId, responseId) {
        const action = this.createEvent('click', gifId)
        this.fetchPingbackRequest(endpoint, action, userId, responseId)
    }

    /**
     * @param {String} endpoint name of GIPHY endpoint used
     * @param {String} gifId ID associated with specific gif action
     * @param {String} userId unique identifier for logged in user
     * @param {String} responseId ID returned from
     */
    onHover(endpoint, gifId, userId, responseId) {
        const action = this.createEvent('hover', gifId)
        this.fetchPingbackRequest(endpoint, action, userId, responseId)
    }

    /**
     * @param {String} endpoint name of GIPHY endpoint used
     * @param {String} gifId ID associated with specific gif action
     * @param {String} userId unique identifier for logged in user
     * @param {String} responseId ID returned from
     */
    onSeen(endpoint, gifId, userId, responseId) {
        const action = this.createEvent('seen', gifId)
        this.fetchPingbackRequest(endpoint, action, userId, responseId)
    }

    fetchPingbackRequest(endpoint, action, userId) {
        if (!eventTypes[endpoint]) {
            throw `GIPHY ANALYTICS SDK ERROR IN on${action.action_type.charAt(0).toUpperCase() +
                action.action_type.slice(
                    1
                )} METHOD \n \tEndpoint argument '${endpoint}' does not match one of the following acceptable variables: 'search', 'trending', 'related' or 'reactions'`
        }
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
                        event_type: eventTypes[endpoint],
                        response_id: responseId,
                        actions: [action]
                    }
                ]
            }
        }

        return pingbackSessionSchemas[endpoint]
    }
}

module.exports = function(apiKey) {
    return new GphAnalytics(apiKey)
}
