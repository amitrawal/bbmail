require 'test_helper'

class MailsControllerTest < ActionController::TestCase
  setup do
    @mail = mails(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:mails)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create mail" do
    assert_difference('Mail.count') do
      post :create, mail: { created_at: @mail.created_at, description: @mail.description, receiver_id: @mail.receiver_id, subject: @mail.subject, udpated_at: @mail.udpated_at }
    end

    assert_redirected_to mail_path(assigns(:mail))
  end

  test "should show mail" do
    get :show, id: @mail
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @mail
    assert_response :success
  end

  test "should update mail" do
    put :update, id: @mail, mail: { created_at: @mail.created_at, description: @mail.description, receiver_id: @mail.receiver_id, subject: @mail.subject, udpated_at: @mail.udpated_at }
    assert_redirected_to mail_path(assigns(:mail))
  end

  test "should destroy mail" do
    assert_difference('Mail.count', -1) do
      delete :destroy, id: @mail
    end

    assert_redirected_to mails_path
  end
end
