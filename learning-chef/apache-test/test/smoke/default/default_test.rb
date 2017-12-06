# # encoding: utf-8

# Inspec test for recipe apache-test::default

# The Inspec reference, with examples and extensive documentation, can be
# found at http://inspec.io/docs/reference/resources/

require 'inspec'


describe 'web site' do
  it 'responds on port 80' do
    expect(port 80).to be_listening 'tcp'
  end

  it 'has the apache web server installed' do
    expect(package 'httpd').to be_installed
  end
end