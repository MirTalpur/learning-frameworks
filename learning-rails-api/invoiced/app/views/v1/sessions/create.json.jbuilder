json.data do
  json.user do
    json.call(
      @user,
      :email,
      :confirmed_at
    )
  end
  json.token token
end
