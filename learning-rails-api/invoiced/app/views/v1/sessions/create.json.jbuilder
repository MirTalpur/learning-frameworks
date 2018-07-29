json.data do
  json.user do
    json.call(
      @user,
      :email,
      :authenication_token
    )
  end
end