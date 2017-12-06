#
# Cookbook:: apache-test
# Spec:: default
#
# Copyright:: 2017, The Authors, All Rights Reserved.

require 'spec_helper'

at_exit { ChefSpec::Coverage.report! }

describe 'apache-test::default' do
  let(:chef_run) {ChefSpec::Runner.new.converge('apache-test::default') }

  it 'installs apache2' do
    expect(chef_run).to install_package('httpd')
  end
end
