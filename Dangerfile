# 変更行以外は指摘しない
github.dismiss_out_of_range_messages

# WIPの場合は警告を表示する
warn('PR is classed as Work in Progress') if github.pr_title.include? '[WIP]'

# ktlint
checkstyle_format.base_path = Dir.pwd
checkstyle_format.report 'app/build/reports/ktlint/ktlintMainSourceSetCheck.xml'