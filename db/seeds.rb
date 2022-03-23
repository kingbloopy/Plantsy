User.delete_all

require 'open-uri'

demo_user = User.create!(
  name: 'Demo',
  email: 'demo@demo.com',
  password: 'demo123'
)

monstera = Product.create!(
  title: 'Monstera Deli',
  category: 'House Plants',
  description: 'Nicknamed the “swiss cheese plant”, the Monstera deliciosa is famous for its quirky natural leaf holes. These holes are theorized to maximize sun fleck capture on the forest floor. Depending on the season and maturity of the plant, your Monstera could arrive with no holes just yet, and be sized to grow alongside you. ',
  price: 39.99,
  quantity: 3,
  seller_id: 1
)

file = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/IMG_7136.JPG')
monstera.photos.attach(io: file, filename: "IMG_7136.JPG")

user1 = User.create!(
  name: 'Lacey',
  email: 'laceywild22@gmail.com',
  password: 'horseLover22'
)

user2 = User.create!(
  name: 'Jacob',
  email: 'ware-wolves-rule@yahoo.com',
  password: 'vampiresSuck99'
)

user3 = User.create!(
  name: 'Morty',
  email: 'morty-adventures@gmail.com',
  password: 'getSwifty'
)

user4 = User.create!(
  name: 'Charlie',
  email: 'charlieday400@gmail.com',
  password: 'paddyspub'
)

user5 = User.create!(
  name: 'Mishka',
  email: 'mishkakittymeow@aol.com',
  password: 'IamAcat'
)

user6 = User.create!(
  name: 'Lucy',
  email: 'lucy-in-the-sky@gmail.com',
  password: 'diamonds!'
)

user7 = User.create!(
  name: 'Lilah',
  email: 'germanshepard-love@doggie.com',
  password: 'goodgirl'
)

user8 = User.create!(
  name: 'Abed',
  email: 'troy-abed-adventures@aol.com',
  password: 'loveCommunityCollege'
)

user9 = User.create!(
  name: 'Juni',
  email: 'juniper1611@gmail.com',
  password: 'desertdweller123'
)

user10 = User.create!(
  name: 'Broc',
  email: 'brocolilove@brocoli.com',
  password: 'brocoli'
)

