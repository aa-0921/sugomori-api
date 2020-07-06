require 'test_helper'

class InitialDataControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get initial_data_show_url
    assert_response :success
  end

end
