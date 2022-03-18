User.delete_all

demo_user = User.create!(
  name: 'Demo',
  email: 'demo@demo.com',
  password: 'demo123'
)