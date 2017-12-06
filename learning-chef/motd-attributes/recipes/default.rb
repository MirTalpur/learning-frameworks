#
# Cookbook:: motd-attributes
# Recipe:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.
node.default['ipaddress'] = '1.1.1.1'
pp node.debug_value('ipaddress')
node.default['motd-attributes']['message'] = "It's a wonderufl day today!"
node.default['motd-attributes']['company'] = "My company"

pp node.debug_value('motd-attributes', 'company')
include_recipe 'motd-attributes::message'

template '/etc/motd' do
  source 'motd.erb'
  mode   '0644'
end