/*
 * Created by Cosmo Cochrane on 4/20/17.
 * Copyright (c) 2017 Giphy Inc.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
'use strict'
var apiClient = require('./lib/GphApiClient.js')
var analyticsSDK = require('./lib/GphAnalytics.js')

module.exports = { apiClient: apiClient, analyticsSDK: analyticsSDK }
