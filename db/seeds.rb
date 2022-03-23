User.delete_all

require 'open-uri'

demo_user = User.create!(
  name: 'Demo',
  email: 'demo@demo.com',
  password: 'demo123'
)

monstera = Product.create!(
  title: 'Monstera Deli'
)

file = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/IMG_7136.JPG')
demo_user.photos.attach(io: file, filename: "IMG_7136.JPG")

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
  password: 'demo123'
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
  email: 'troy.abed.adventures@aol.com',
  password: 'loveCommunityCollege'
)

user9 = User.create!(
  name: 'Juni',
  email: 'juniper1611@gmail.com',
  password: 'desertdweller123'
)

user10 = User.create!(
  name: 'Broc',
  email: 'brocoli.love@brocoli.com',
  password: 'brocoli'
)

