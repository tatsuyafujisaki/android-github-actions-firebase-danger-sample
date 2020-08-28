# Avoid issuing warnings about things that exist before the pull request.
github.dismiss_out_of_range_messages

# Issue a warning if a pull request has WIP (Work in Progress) in the title.
warn('PR is classed as Work in Progress') if github.pr_title.include? '[WIP]'

# ktlint
checkstyle_format.base_path = Dir.pwd
checkstyle_format.report 'app/build/reports/ktlint/ktlintMainSourceSetCheck.xml'
