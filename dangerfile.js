import { schedule } from 'danger'

const ktlintReport = require("danger-plugin-ktlint-report")
schedule(ktlintReport.scan())