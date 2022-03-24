User.delete_all
Product.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('products')
ActiveRecord::Base.connection.reset_pk_sequence!('active_storage_attachments')
ActiveRecord::Base.connection.reset_pk_sequence!('active_storage_blobs')

require 'open-uri'

demo_user = User.create!(
  name: 'Demo',
  email: 'demo@demo.com',
  password: 'demo123'
)

# -----------------------------------------
user1 = User.create!(
  name: 'Lacey',
  email: 'laceywild22@gmail.com',
  password: 'horseLover22'
)

tillandsia1 = Product.create!(
  title: 'Colorful Assorted Tillandsias',
  category: 'Air Plant',
  description: 'Grab bag of 10 tillandsia air plants, in a mix of varieties. Perfect for craft projects, terrariums, vertical garden displays and more. Plant sizes will range from 1 Inch to 12 Inches tall.',
  price: 24.75,
  quantity: 6,
  seller_id: 2
)
tillsA1 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/tillandsias/tillsA1.JPG')
tillandsia1.photos.attach(io: tillsA1, filename: 'tillsA1.JPG')
tillsA2 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/tillandsias/tillsA2.JPG')
tillandsia1.photos.attach(io: tillsA2, filename: 'tillsB2.JPG')
tillsA3 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/tillandsias/tillsA3.PNG')
tillandsia1.photos.attach(io: tillsA3, filename: 'tillsA3.PNG')

tillandsia2 = Product.create!(
  title: 'Tillandsia in Hanging Container',
  category: 'Air Plant',
  description: '2”+ tall or wide, random tillandsia variety in cute gold metal hanging container',
  price: 15.00,
  quantity: 7,
  seller_id: 2
)
tillsB1 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/tillandsias/tillsB1.JPG')
tillandsia2.photos.attach(io: tillsB1, filename: 'tillsB1.JPG')

cymbidium1 = Product.create!(
  title: 'Cymbidium Koushu',
  category: 'Orchid',
  description: 'Cymbidium Koushu Tango is a dazzling orchid that produces intense ruby red blooms, showing its excellent breeding by the Mukoyama Nursery in Japan, one of the leading Cymbidium orchid hybridizers in the world. Just like the dance for which it was named, this is one red-hot orchid! Its vibrant red petals coupled with its deep, dark lip results in a very seductive bloom. This Cymbidium orchid is very hardy, easy to grow, and also on the smaller side (not quite miniature, but close), making it an easy fit for any collection. You can grow this in any kind of chunky orchid bark, watering twice per week and fertilizing every other week. Avoid direct sun; moderate to bright shady conditions are best. This is a warm-tolerant orchid and can also tolerate near-freezing temperatures for short durations, but bring inside if expecting prolonged cold.',
  price: 26.99,
  quantity: 1,
  seller_id: 2
)
cymbidium1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/cymbidiumA1.JPG'), filename: 'cymbidiumA1.JPG')
cymbidium1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/cymbidiumA2.JPG'), filename: 'cymbidiumA2.JPG')

cymbidium2 = Product.create!(
  title: 'Light Pink Cymbidium',
  category: 'Orchid',
  description: 'Plants are potted up in 3.25" square pots, with two or three growths. For Cymbidiums, NBS (Near Blooming Size) means the plant is 12 - 18 months from reaching Blooming Size (a size typically capable of blooming PLEASE NOTE: NOT IN BLOOM when shipped.',
  price: 23.00,
  quantity: 3,
  seller_id: 2
)
cymbidium2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/cymbidiumB3.JPG'), filename: 'cymbidiumB3.JPG')
cymbidium2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/cymbidiumB1.jpg'), filename: 'cymbidiumB1.jpg')
cymbidium2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/cymbidiumB2.JPG'), filename: 'cymbidiumB2.JPG')

cactus1 = Product.create!(
  title: 'Angel Wings Cactus - Opuntia Microdasys Albata',
  category: 'Cactus',
  description: "Careful- this Angel Wings Cactus can be a bit devilish! While the Opuntia may be prickly, the striking bright white spines and pretty seasonal blossoms makes this plant a Lazy Garden favorite. Easy to care for with low light and an occasional watering, this not-so angelic cactus is a match made in heaven for every lazy gardener’s home!",
  price: 15.00,
  quantity: 8,
  seller_id: 2
)
cactus1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/cactus/angel-wings1.jpg'), filename: 'angel-wings1.jpg')
cactus1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/cactus/angel-wings2.jpg'), filename: 'angel-wings2.jpg')

cactus2 = Product.create!(
  title: 'Large Peruvian Apple Cactus',
  category: 'Cactus',
  description: "Columnar variety of cactus with color variations ranging from yellow / green, green, blue / green, and gray. During the growing season, Apr - Oct, the cactus will produce 6-8” diameter white colored flowers that only bloom for one night.  They also produce an edible fruit the size of a lemon, similar to a dragon fruit. Comes in a 10inch grow pot",
  price: 80.95,
  quantity: 1,
  seller_id: 2
)
cactus2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/cactus/cardon.JPG'), filename: 'cardon.JPG')

cactus3 = Product.create!(
  title: 'Miniature Saguaro, Euphorbia Aeruginosa, Spurge Cactus, dwarf tree-like cactus',
  category: 'Cactus',
  description: "Miniature Saguaro, Scientific Names: Euphorbia Aeruginosa. You will receive a plant similar to the ones in the photos with a pot and soil. The plant will be carefully wrapped and nestled in crinkle paper so that any shock to the packaging can be absorbed and remain safe. Our paper packaging allows the plants to breathe during their travel! ~Care instructions will be provided with plant.",
  price: 15.99,
  quantity: 7,
  seller_id: 2
)
cactus3.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/cactus/euphorbia.JPG'), filename: 'euphorbia.JPG')

cactus4 = Product.create!(
  title: 'Miniature Ceramic Pot with tiny LIVE Micro Mini Cactus',
  category: 'Cactus',
  description: "ADORABLE Miniature Ceramic Pot holding Live Micro Cactus! These little guys are very hardy, and do not require a lot of attention and care.",
  price: 21.00,
  quantity: 10,
  seller_id: 2
)
cactus4.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/cactus/minicactus1.jpg'), filename: 'minicactus1.jpg')
cactus4.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/cactus/minicactus2.jpg'), filename: 'minicactus2.jpg')
cactus4.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/cactus/minicactus3.jpg'), filename: 'minicactus3.jpg')

cactus5 = Product.create!(
  title: 'Pink Christmas Cactus',
  category: 'Cactus',
  description: "Pink Christmas Cactus do well in bright and indirect light. These cheery wintertime flowers brighten up indoor spaces and look beautiful when placed in a brightly colored pot. The flowers have brightly colored downward-facing petals. Christmas cactus comes in a variety of different colors including, yellow, red, white, pink, salmon, and bi-color. Pink Christmas Cactus do well indoors in a room that receives bright but indirect light, like an eastern or northern window sill. Christmas Cactus will adapt to low light conditions, but the plant will produce blooms more readily if exposed to bright light. The flowers are bright pink and appear prolifically when given bright, indirect light, and when exposed to room temperatures, anywhere between 65 - 75 degrees F.",
  price: 19.95,
  quantity: 6,
  seller_id: 2
)
cactus5.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/cactus/xmasA1.JPG'), filename: 'xmasA1.JPG')
cactus5.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/cactus/xmasA2.JPG'), filename: 'xmasA2.JPG')

cactus6 = Product.create!(
  title: 'Red Christmas Cactus',
  category: 'Cactus',
  description: "Red Christmas Cactus do well in bright and indirect light. These cheery wintertime flowers brighten up indoor spaces and look beautiful when placed in a brightly colored pot. The flowers have brightly colored downward-facing petals. Christmas cactus comes in a variety of different colors including, yellow, red, white, pink, salmon, and bi-color. Red Christmas Cactus do well indoors in a room that receives bright but indirect light, like an eastern or northern window sill. Christmas Cactus will adapt to low light conditions, but the plant will produce blooms more readily if exposed to bright light. The flowers are bright red and appear prolifically when given bright, indirect light, and when exposed to room temperatures, anywhere between 65 - 75 degrees F.",
  price: 19.95,
  quantity: 7,
  seller_id: 2
)
cactus6.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/cactus/xmasB1.JPG'), filename: 'xmasB1.JPG')
cactus6.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/cactus/xmasB2.JPG'), filename: 'xmasB2.JPG')

cactus7 = Product.create!(
  title: 'Peach Christmas Cactus',
  category: 'Cactus',
  description: "Peach Christmas Cactus do well in bright and indirect light. These cheery wintertime flowers brighten up indoor spaces and look beautiful when placed in a brightly colored pot. The flowers have brightly colored downward-facing petals. Christmas cactus comes in a variety of different colors including, yellow, red, white, peach, salmon, and bi-color. Peach Christmas Cactus do well indoors in a room that receives bright but indirect light, like an eastern or northern window sill. Christmas Cactus will adapt to low light conditions, but the plant will produce blooms more readily if exposed to bright light. The flowers are bright peach and appear prolifically when given bright, indirect light, and when exposed to room temperatures, anywhere between 65 - 75 degrees F.",
  price: 19.95,
  quantity: 14,
  seller_id: 2
)
cactus7.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/cactus/xmasC1.JPG'), filename: 'xmasC1.JPG')


# -----------------------------------------
user2 = User.create!(
  name: 'Jacob',
  email: 'ware-wolves-rule@yahoo.com',
  password: 'vampiresSuck99'
)

aloe1 = Product.create!(
  title: 'Green Aloe',
  category: 'Succulent',
  description: 'These healthy aloe vera plants bring a wonderful sense of greenery and healing to a space. Revered for their medicinal power and hardy nature, aloe vera plants are one everyone can acquire many uses and enjoyment from.',
  price: 14.99,
  quantity: 2,
  seller_id: 2
)
aloeA1 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/aloe/aloeA1.JPG')
aloe1.photos.attach(io: aloeA1, filename: 'aloeA1.JPG')
aloeA3 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/aloe/aloeA3.JPG')
aloe1.photos.attach(io: aloeA3, filename: 'aloeA3.JPG')

aloe2 = Product.create!(
  title: 'Lush Aloe Plant',
  category: 'Succulent',
  description: 'Excellent houseplant; very little maintenance needed. Looks great in kitchens, window sills and in any indoor setting. Known for providing health benefits to skin.',
  price: 12.50,
  quantity: 11,
  seller_id: 2
)
aloeB1 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/aloe/aloeB1.jpg')
aloe2.photos.attach(io: aloeB1, filename: 'aloeB1.jpg')
aloeB2 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/aloe/aloeB2.jpg')
aloe2.photos.attach(io: aloeB2, filename: 'aloeB2.jpg')

basil = Product.create!(
  title: 'Live Basil Plant',
  category: 'Herb',
  description: "Basil's taste is like sweet mint and anise flavor that marries well with pesto recipes or anything with a tomato base. Its dark green leaves give a lovely, clove-like spicy aroma. It's antioxidant, and beta-carotene qualities help keep cells healthy and disease-free.",
  price: 6.99,
  quantity: 23,
  seller_id: 2
)
basil.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/herbs/basil.JPG'), filename: 'basil.JPG')

herbs1 = Product.create!(
  title: 'Live Aromatic and Edible Herb Assortment',
  category: 'Herb',
  description: "HAND SELECTED: Every pack of herbs we send is hand-picked. You will receive a unique collection of species that are fully rooted and similar to the product photos. Note that we rotate our nursery stock often, so the exact species we send changes every week.",
  price: 28.15,
  quantity: 9,
  seller_id: 2
)
herbs1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/herbs/herbsA1.JPG'), filename: 'herbsA1.JPG')
herbs1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/herbs/herbsA2.jpg'), filename: 'herbsA2.jpg')

herbs2 = Product.create!(
  title: "Chef's Choice Herb Kit",
  category: 'Herb',
  description: "Herbs are ready to harvest when the plant has enough foliage to maintain growth. Always harvest before the plant flowers, as flowering can cause an unpleasant, bitter taste. Harvest frequently to maintain the shape of the plant, encourage new growth, and satisfy your tastebuds. The more you prune, the more you grow, the more you benefit.",
  price: 35.00,
  quantity: 7,
  seller_id: 2
)
herbs2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/herbs/herbsB1.JPG'), filename: 'herbsB1.JPG')
herbs2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/herbs/herbsB2.JPG'), filename: 'herbsB2.JPG')
herbs2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/herbs/herbsB3.JPG'), filename: 'herbsB3.JPG')

mint = Product.create!(
  title: "Sweet Mint Plant",
  category: 'Herb',
  description: "This is the classic mint variety, with extra-large, fragrant leaves that lend themselves beautifully to chopping and crushing for use in desserts, drinks, meat dishes (such as lamb), and yogurt sauce. Plants grow easily and quickly, and can take over the garden if you're not careful. Consider growing mint in containers. Harvest often for best growth. Plants can be grown in part shade.",
  price: 13.27,
  quantity: 19,
  seller_id: 2
)
mint.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/herbs/mint.jpg'), filename: 'mint.jpg')

rosemary = Product.create!(
  title: "Live Rosemary Plant",
  category: 'Herb',
  description: "Tiny, strongly aromatic & flavorful leaves, blue blooms. Garden use: Herb garden, flower border, containers, low clipped hedge. Culinary use: Italian & Mediterranean dishes, vinegars & oils, breads. Plant in full sun for the best yields.",
  price: 21.48,
  quantity: 10,
  seller_id: 2
)
rosemary.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/herbs/rosemary1.jpg'), filename: 'rosemary1.jpg')
rosemary.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/herbs/rosemary2.jpg'), filename: 'rosemary2.jpg')

strawb = Product.create!(
  title: "Live Everbearing Strawberry Plant",
  category: 'Herb',
  description: "Everbearing Strawberries--a low-maintenance, high-yield favorite among strawberry lovers--is extremely popular due to its ability to produce well after spring ends. In fact, Everbearing Strawberries are often harvested as late as the first frost! That means that you'll enjoy delicious, juicy strawberries for many months to come.",
  price: 17.94,
  quantity: 12,
  seller_id: 2
)
strawb.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/herbs/strawb1.jpg'), filename: 'strawb1.jpg')
strawb.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/herbs/strawb2.JPG'), filename: 'strawb2.JPG')


# -----------------------------------------
user3 = User.create!(
  name: 'Morty',
  email: 'morty-adventures@gmail.com',
  password: 'getSwifty'
)

calathea1 = Product.create!(
  title: 'Calathea White Fusion',
  category: 'House Plant',
  description: 'This variety of calathea is absolutely gorgeous. It has a purple, white and deep green hue to it’s peacock shaped leaves. They enjoy bright indirect light, somewhat damp soil and thrive in humidity. // This plant is sensitive and may not be beginner friendly.',
  price: 11.25,
  quantity: 16,
  seller_id: 3
)
catathea4 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/calathea/calathea4.JPG')
calathea1.photos.attach(io: catathea4, filename: 'calathea4.JPG')
catathea3 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/calathea/calathea3.jpg')
calathea1.photos.attach(io: catathea3, filename: 'calathea3.jpg')

hanging1 = Product.create!(
  title: 'Leather and Twine Plant Hanger & Pot',
  category: 'Pottery',
  description: 'Handmade twine plant hanger with 6" pot for indoor house plants. *Plant not included*',
  price: 25.20,
  quantity: 23,
  seller_id: 3
)
hangingA1 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/hanging-planter/hangingA1.JPG')
hanging1.photos.attach(io: hangingA1, filename: 'hangingA1.JPG')

hanging2 = Product.create!(
  title: 'Cream Hanging Wall Pottery',
  category: 'Pottery',
  description: 'Cream colored teartrop shaped plant hangers. Can be mounted on the wall and hung by a leather strap. Dimensions: 10" height, 6" width.',
  price: 13.00,
  quantity: 12,
  seller_id: 3
)
hangingB2 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/hanging-planter/hangingB2.JPG')
hanging2.photos.attach(io: hangingB2, filename: 'hangingB2.JPG')
hangingB1 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/hanging-planter/hangingB1.JPG')
hanging2.photos.attach(io: hangingB1, filename: 'hangingB1.JPG')


# -----------------------------------------
user4 = User.create!(
  name: 'Charlie',
  email: 'charlieday400@gmail.com',
  password: 'paddyspub'
)

calathea2 = Product.create!(
  title: 'Calathea',
  category: 'House Plant',
  description: 'Catathea white fusion with marrbled purple and white leaves. Comes in an 8" size grow pot',
  price: 12.75,
  quantity: 4,
  seller_id: 4
)
catathea2file = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/calathea/calathea2.jpg')
calathea2.photos.attach(io: catathea2file, filename: 'calathea2.jpg')

monstera1 = Product.create!(
  title: 'Monstera Deliciosa',
  category: 'House Plant',
  description: 'Nicknamed the “swiss cheese plant”, the Monstera deliciosa is famous for its quirky natural leaf holes. These holes are theorized to maximize sun fleck capture on the forest floor. Depending on the season and maturity of the plant, your Monstera could arrive with no holes just yet, and be sized to grow alongside you.',
  price: 39.99,
  quantity: 3,
  seller_id: 1
)
monsteraA1 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/monstera-deliciosa/monsteraA1.jpg')
monstera1.photos.attach(io: monsteraA1, filename: 'monsteraA1.jpg')
monsteraA2 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/monstera-deliciosa/monsteraA2.jpg')
monstera1.photos.attach(io: monsteraA2, filename: 'monsteraA2.jpg')

# -----------------------------------------
user5 = User.create!(
  name: 'Mishka',
  email: 'mishkakittymeow@aol.com',
  password: 'IamAcat'
)

monstera2 = Product.create!(
  title: 'Swiss Cheese Plant',
  category: 'House Plant',
  description: 'Monstera Adansonii (Swiss Cheese). They thrive from indirect sun & love to quickly grow and climb every which way. If you allow the plant to grow up a stake or trellis, it will develop larger, picturesque leaves with very defined Swiss Cheese like holes. ~ Please note that tears in leaves, splits in leaves, leaves growing through splits in leafs, crinkling in leaves growing through leafs, and long vines are very normal for this plant. It is nothing to be concerned about and is not damage, just nature. Also, if a leaf or two has browning on the tips or a knick on the leaf, this is also normal for a plant growing over time.',
  price: 50.25,
  quantity: 4,
  seller_id: 5
)
monsteraB1 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/monstera-deliciosa/monsteraB1.JPG')
monstera2.photos.attach(io: monsteraB1, filename: 'monsteraB1.JPG')
monstera2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/monstera-deliciosa/monsteraB2.JPG'), filename: 'monsteraB2.JPG')
monstera2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/monstera-deliciosa/monsteraB3.JPG'), filename: 'monsteraB3.JPG')

# -----------------------------------------
user6 = User.create!(
  name: 'Lucy',
  email: 'lucy-in-the-sky@gmail.com',
  password: 'diamonds!'
  )

monstera3 = Product.create!(
  title: 'Monstera Deliciosa (swiss cheese)',
  category: 'House Plant',
  description: 'Botanical Name: Philodendron Monstera deliciosa; Common Names: Monstera; Description: Native to the tropical forests of Central and South America, these plants have glossy, heart shaped leaves which develops its unique splits in its maturity. It is a climbing, evergreen perennial vine that is perhaps most noted for its large perforated leaves on thick plant stems and its long cord-like aerial roots.',
  price: 35.00,
  quantity: 8,
  seller_id: 6
  )
monstera3.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/monstera-deliciosa/monsteraC2.jpg'), filename: 'monsteraC2.jpg')

snake2 = Product.create!(
  title: 'Sanseveria',
  category: 'House Plant',
  description: "Sanseveria, otherwise known as the snake Plant (named because of the shape of the leaves NOT because it attracts snakes). This stemless evergreen will add years of beauty and elegance to any decor and recently proved to oxygenate your home or office. Its sword-shaped leaves are deep green with light gray-green horizontal stripes and its upright character makes it a popular choice in any space.",
  price: 37.98,
  quantity: 7,
  seller_id: 6
  )
snake2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/snake/snakeB1.JPG'), filename: 'snakeB1.JPG')
snake2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/snake/snakeB2.jpg'), filename: 'snakeB2.jpg')
snake2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/snake/snakeB3.JPG'), filename: 'snakeB3.JPG')

spath = Product.create!(
  title: 'Peace Lily Plant (Spathiphyllum)',
  category: 'House Plant',
  description: "Best in bright, indirect light; can tolerate low light levels, but will produce more blooms with more light. Water once a week, or when top inch of soil is dry",
  price: 34.99,
  quantity: 12,
  seller_id: 6
  )
spath.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/spath/spath2.JPG'), filename: 'spath2.JPG')
spath.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/spath/spath1.JPG'), filename: 'spath1.JPG')
spath.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/spath/spath3.JPG'), filename: 'spath3.JPG')


# -----------------------------------------
user7 = User.create!(
  name: 'Lilah',
  email: 'germanshepard-love@doggie.com',
  password: 'goodgirl'
)

ladyslipper = Product.create!(
  title: "Live Phragmipedium Sorcerer/'s Apprentice",
  category: 'Orchid',
  description: "Phragmipedium Sorcerer/'s Apprentice has large and commanding 3-4 inch orange flowers with green-yellow accents. This variety is a sequential bloomer. Live orchid plant comes in a 4.5 inch nursery pot with the perfect potting media to keep your new friend happy and healthy.",
  price: 46.00,
  quantity: 2,
  seller_id: 7
  )
ladyslipper.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/lady-slipper2.jpg'), filename: 'lady-slipper2.jpg')
ladyslipper.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/lady-slipper1.jpg'), filename: 'lady-slipper1.jpg')

nakedman = Product.create!(
  title: 'Naked Man Orchid Seeds',
  category: 'Orchid',
  description: "Orchis Italica is widely popular for their petals which in shape, resemble naked men. Preferring partial shade and low nutrient soil and they flower in late spring. Orchis Italica grows up to 50cm in height, with bright pink, densely clustered flowers. Many orchids do not have a flowering season and flowers may be produced at any time if the right conditions are being met. Terrestrial orchids grown outdoors will mostly flower in the summer months. Flowers can last for several months. Autumn is the best season for planting. Spread out the roots in the upper 10 cm (4 inches) of the soil, the rhizome 2-3 cm (1 inch) below the surface, shoot buds upwards. Fill in the remaining substrate without compressing it, and water thoroughly. *Includes 50 seeds*",
  price: 12.99,
  quantity: 3,
  seller_id: 7
  )
nakedman.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/monkey-face1.JPG'), filename: 'monkey-face1.JPG')
nakedman.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/monkey-face2.JPG'), filename: 'monkey-face2.JPG')

oncidium = Product.create!(
  title: 'Sweet Sugar Oncidium Orchid',
  category: 'Orchid',
  description: "The delicate, airy blossoms of the Sweet Sugar Oncidium Orchid appear on central spikes and secondary stems in a cloud of sunny yellow with orange and chestnut highlights. Oncidiums prefer cool to intermediate growing conditions (65-85°F during the day; 55-60°F at night). Provide very bright, indirect light. A spot near a south facing window is ideal. Full cultural instructions included.",
  price: 32.99,
  quantity: 4,
  seller_id: 7
  )
  oncidium.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/oncidium2.jpg'), filename: 'oncidium2.jpg')
oncidium.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/oncidium1.JPG'), filename: 'oncidium1.JPG')
oncidium.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/oncidium3.jpg'), filename: 'oncidium3.jpg')

# -----------------------------------------
user8 = User.create!(
  name: 'Abed',
  email: 'troy-abed-adventures@aol.com',
  password: 'loveCommunityCollege'
)

zygo = Product.create!(
  title: 'Zygopetalum Orchid',
  category: 'Orchid',
  description: "Zygo Advance Australia is Z. Titanic x Z. Helen-Ku. The flowers are rather fragrant, and pleasingly so. This orchid's generic name, derived from the Greek word 'zygon', means 'yoked petal.' It refers to the yoke-like growth at the base of the lip caused by the fusion of petals and sepals They occur in humid forests in South America at low- to mid-elevation regions, with most species found in Brazil. The ones for sale are mericlones and all should be beautiful. They stand 15 inches high or more measured from the bottom of the 4-inch pot.",
  price: 42.99,
  quantity: 1,
  seller_id: 8
  )
zygo.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/zygopetalum4.jpg'), filename: 'zygopetalum4.jpg')
zygo.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/orchids/zygopetalum2.JPG'), filename: 'zygopetalum2.JPG')

brom2 = Product.create!(
  title: "Bromeliad 'Silvervase'",
  category: 'Bromeliad',
  description: "An epiphytic plant native to Brazil with thick, arching, and gray-green leaves. Like an orchid, it attaches itself to trees and large plants. Product Size : 32 Oz. Includes terracotta planter.",
  price: 50.25,
  quantity: 38,
  seller_id: 8
  )
brom2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/fasciataB1.JPG'), filename: 'fasciataB1.JPG')
brom2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/fasciataB2.JPG'), filename: 'fasciataB2.JPG')

# -----------------------------------------
user9 = User.create!(
  name: 'Juni',
  email: 'juniper1611@gmail.com',
  password: 'desertdweller123'
)

pothos1 = Product.create!(
  title: 'Golden Pothos',
  category: 'House Plant',
  description: "The Golden Pothos is the king of easy growing. With its lush heart-shaped foliage this trailing vine will impress you with its ability to drape beautifully over a shelf or hanging basket and liven up any room. Although the Pothos enjoys plenty of indirect sunlight, they can also thrive comfortably in a low light environment and like many indoor plants, water when the top soil is dry to the touch.",
  price: 14.38,
  quantity: 10,
  seller_id: 9
  )
pothos1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/pothos/pothosA1.JPG'), filename: 'pothosA1.JPG')
pothos1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/pothos/pothosA4.JPG'), filename: 'pothosA4.JPG')

brom1 = Product.create!(
  title: 'Bromeliad Aechmea Pink',
  category: 'Bromeliad',
  description: "Featuring colorful, long-lasting blooms, the Bromeliad Aechmea Pink is a unique flowering plant to add a touch of the tropics to your space. With blooms that last for up to six months, these are sure to brighten any home.",
  price: 36.99,
  quantity: 20,
  seller_id: 9
  )
brom1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/fasciataA1.JPG'), filename: 'fasciataA1.JPG')
brom1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/fasciataA2.JPG'), filename: 'fasciataA2.JPG')

brom3 = Product.create!(
  title: 'Blue Tango Bromeliad',
  category: 'Bromeliad',
  description: "Exotic and rare Blue Tango Bromeliad. Its blooms feature bright pink and purple flowers.",
  price: 45.00,
  quantity: 4,
  seller_id: 9
  )
brom3.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/flowerbromA1.jpg'), filename: 'flowerbromA1.jpg')
brom3.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/flowerbromA2.jpg'), filename: 'flowerbromA2.jpg')

brom4 = Product.create!(
  title: 'Mango Tango Bromeliad',
  category: 'Bromeliad',
  description: "Exotic and rare Mango Tango Bromeliad. Its blooms feature bright red and orange flowers.",
  price: 45.00,
  quantity: 5,
  seller_id: 9
  )
brom4.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/flowerbromB1.jpg'), filename: 'flowerbromB1.jpg')
brom4.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/flowerbromB2.jpg'), filename: 'flowerbromB2.jpg')

brom5 = Product.create!(
  title: 'Tropical Delight Guzmania Bromeliad',
  category: 'Bromeliad',
  description: "Guzmania Bromeliads add significant intrigue, color and beauty to your Green Space. They have long, slender evergreen leaves that are topped by a single brilliant inflorescence of tongue-like petals. The bloom will be deep red, maroon, orange, pink, or yellow, or some combination thereof. Bromeliad flowers can last 3 to 6 months, but they typically flower just once. * Fun Fact: The Guzmania genus is named after Anastasio Guzman, a Spanish pharmacist and naturalist who died in 1807.",
  price: 38.00,
  quantity: 18,
  seller_id: 9
  )
brom5.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/orangebrom1.jpg'), filename: 'orangebrom1.jpg')
brom5.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/orangebrom2.jpg'), filename: 'orangebrom2.jpg')

brom6 = Product.create!(
  title: 'Pineapple Plant with Fruit',
  category: 'Bromeliad',
  description: "Does it get any cuter than a pineapple plant with fruit? We doubt it. Nestled among the spiky foliage, the tasty fruit — which symbolizes hospitality — can be harvested and eaten once they are ripe. Save the top, replant them, and wait for a new one to grow. One of the easiest tropical plants to care for, they just need lots of sunshine and a little water.",
  price: 42.50,
  quantity: 3,
  seller_id: 9
  )
brom6.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/pineapple1.JPG'), filename: 'pineapple1.JPG')
brom6.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/pineapple2.JPG'), filename: 'pineapple2.JPG')

brom7 = Product.create!(
  title: 'Purple Bromeliad Guzmania, 6" Pot',
  category: 'Bromeliad',
  description: "Guzmania bromeliads feature long, narrow, shiny green leaves that rise from a deep central cup. Their large & showy flower bracts arise in the summer, in an amazing array of colors. Low maintenance; Height can reach up to 2'; Requires low light and should be kept out of direct sunlight; Ideal temperature is 55-80°F; Toxicity: non-toxic and pet safe; USDA hardiness zones for outdoor planting: 10-11",
  price: 30.00,
  quantity: 12,
  seller_id: 9
  )
brom7.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/purplebrom.jpg'), filename: 'purplebrom.jpg')

brom8 = Product.create!(
  title: 'Red Bromeliad Guzmania, 6" Pot',
  category: 'Bromeliad',
  description: "Guzmania bromeliads feature long, narrow, shiny green leaves that rise from a deep central cup. Their large & showy flower bracts arise in the summer, in an amazing array of colors. Low maintenance; Height can reach up to 2'; Requires low light and should be kept out of direct sunlight; Ideal temperature is 55-80°F; Toxicity: non-toxic and pet safe; USDA hardiness zones for outdoor planting: 10-11",
  price: 30.00,
  quantity: 12,
  seller_id: 9
  )
brom8.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bromeliad/redbrom.jpg'), filename: 'redbrom.jpg')


# -----------------------------------------
user10 = User.create!(
  name: 'Broc',
  email: 'brocolilove@brocoli.com',
  password: 'brocoli'
  )

pothos2 = Product.create!(
  title: 'Long Trailing Pothos',
  category: 'House Plant',
  description: "The Delray Plants Golden Pothos is a foliage plant with interesting colors. Its long been a staple in interiors cape. The Golden Pothos is a classic broad leaf plant. Delray Plants updated this classic with an upgraded pot fit for a new generation. The plant for sale is a large, mature pothos, with lots of length and trailing growth.",
  price: 45.00,
  quantity: 1,
  seller_id: 10
  )
pothos2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/pothos/pothosB2.jpg'), filename: 'pothosB2.jpg')
pothos2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/pothos/pothosB3.PNG'), filename: 'pothosB3.PNG')

snake1 = Product.create!(
  title: 'Snake Plant',
  category: 'House Plant',
  description: "Sanseveria (mother-in-law's tongue or snake plant) is the ideal plant for those who have little time. These plants making striking displays in home, office or patio. It produces elegant variegated foliage.",
  price: 35.00,
  quantity: 3,
  seller_id: 10
  )
snake1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/snake/snakeA2.JPG'), filename: 'snakeA2.JPG')
snake1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/snake/snakeA3.PNG'), filename: 'snakeA3.PNG')

bonsai1 = Product.create!(
  title: 'Aged Juniper Bonsai',
  category: 'House Plant',
  description: "This captivating Rock Juniper Bonsai tree features the power and tranquility of Bonsai but in a smaller size. If space is a limitation, this juniper bonsai tree can add color and harmony while still possessing all the characteristics of its larger version.",
  price: 35.00,
  quantity: 5,
  seller_id: 10
  )
bonsai1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bonsai/bonsaiA2.jpg'), filename: 'bonsaiA2.jpg')
bonsai1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bonsai/bonsaiA1.jpg'), filename: 'bonsaiA1.jpg')

bonsai2 = Product.create!(
  title: 'Hinoki Cypress Bonsai Tree',
  category: 'House Plant',
  description: "This Japanese native is a needled evergreen bonsai tree.   Its wide reaching branches give it lovely pads as it ages, and the flat fanned foliage make this bonsai truly stunning at any age. It is a traditional tree for bonsai. It is incredibly hardy, making it an excellent first bonsai tree.",
  price: 104.99,
  quantity: 2,
  seller_id: 10
  )
bonsai2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bonsai/cypressbonsai1.JPG'), filename: 'cypressbonsai1.JPG')
bonsai2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bonsai/cypressbonsai2.JPG'), filename: 'cypressbonsai2.JPG')

