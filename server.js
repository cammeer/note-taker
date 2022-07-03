//from online tutorial(wds)
const express = require('express');
const fs = require('fs');
const notes = require('./db/db.json');
const path = require('path');
const uuid = require('uuid');
const { DH_CHECK_P_NOT_SAFE_PRIME } = require('constants');