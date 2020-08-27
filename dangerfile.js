// Ignore inline messages which lay outside a diff's range of PR
github.dismiss_out_of_range_messages

import { schedule } from 'danger'

const ktlintReport = require("danger-plugin-ktlint-report")
schedule(ktlintReport.scan())
