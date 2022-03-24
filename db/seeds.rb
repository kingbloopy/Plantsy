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

herbbox = Product.create!(
  title: "Wooden Herb Box",
  category: 'Pottery',
  description: "Wooden trough/box/pot for to plant fresh herbs. Can be used indoor or outdoor to make your garden more beautiful!",
  price: 15.50,
  quantity: 9,
  seller_id: 2
  )
herbbox.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/herbbox.jpg'), filename: 'herbbox.jpg')

strawbox = Product.create!(
  title: "Hanging Planter for Strawberry Plants",
  category: 'Pottery',
  description: "The latest planting bags: You will get two latest large-capacity planting bags, stylish and lovely appearance and breathable and environmentally friendly materials to make your plants grow better. // Environmental protection material: The plant planting bag is made of the strongest environmentally friendly PE material and breathable fabric. It is precisely sewn, durable, resistant to deformation and corrosion, and can be reused. // Save space: Use the upside-down planting bag to plant strawberries, mint, etc., and hang them on the balcony corridors to save space in the vegetable garden, create your own sky garden, and beautify the environment. // Guarding plants: The holes and materials of the planting bag can ensure air circulation, so that the root system can absorb oxygen and discharge excess water to avoid root rot caused by overwatering. // Widely applicable: Garden planting bag is suitable for patio balcony or gardening, suitable for tomatoes, flowers, succulents, green plants and any plants that you want to observe root growth at any time",
  price: 16.99,
  quantity: 18,
  seller_id: 2
  )
strawbox.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/strawbpot1.JPG'), filename: 'strawbpot1.JPG')
strawbox.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/strawbpot2.JPG'), filename: 'strawbpot2.JPG')
strawbox.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/strawbpot3.JPG'), filename: 'strawbpot3.JPG')


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

pinkanth = Product.create!(
  title: "Pink Anthurium",
  category: 'House Plant',
  description: "This bright pink Anthurium lives up to its nickname, the flamingo flower. Rarely without their showy blooms, Anthuriums are known as the world’s longest blooming houseplant  Each bloom can last up to eight weeks, and new ones will pop up often. These aren’t actual flowers, but modified waxy leaves. Anthuriums flourish and bloom best in bright indirect light.",
  price: 60.00,
  quantity: 11,
  seller_id: 3
)
pinkanth.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/anthurium1.jpg'), filename: 'anthurium1.jpg')
pinkanth.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/anthurium2.JPG'), filename: 'anthurium2.JPG')

aspfern = Product.create!(
  title: "Large Asparagus Fern",
  category: 'House Plant',
  description: "Add hassle-free greenery to your living space with this Large Asparagus Fern from Threshold™. Showcasing a voluminous green fern arrangement potted inside a wooden pot, this artificial plant creates a summery touch of style year-round in your home. This artificial potted plant stays fresh and beautiful at all times without the hassle and worry of maintenance. Use this potted artificial flower alone or in a group of other faux plants to create a lovely indoor arrangement.",
  price: 20.00,
  quantity: 3,
  seller_id: 3
)
aspfern.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/asparagus-fern.JPG'), filename: 'asparagus-fern.JPG')

bambpalm = Product.create!(
  title: "Bamboo Palm",
  category: 'House Plant',
  description: "With dense foliage and lush fronds, the Bamboo Palm makes a statement. An air-purifying plant adaptable to low light, this palm can reach heights of up to 8 feet tall in the right conditions. The Bamboo Palm is a tropical indoor houseplant that compliments any space. Not to be confused with real bamboo, this plant is low maintenance and easy to care for. Native to the forests of Mexico and Central America, Bamboo Palms grow in the shade of larger trees unlike other palms, which makes them adaptable to less than ideal lighting conditions. It is a great choice for the home or office because it rates highly on NASA’s list of air-purifying plants.",
  price: 150.95,
  quantity: 1,
  seller_id: 3
)
bambpalm.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/bamboopalm1.JPG'), filename: 'bamboopalm1.JPG')
bambpalm.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/bamboopalm2.JPG'), filename: 'bamboopalm2.JPG')

chinese = Product.create!(
  title: "Chinese Money Plant",
  category: 'House Plant',
  description: "Those unique, pancake-shaped leaves! Those sprightly stems! Who can resist the Claude? The exquisite Chinese money plant never takes itself too seriously, what with its playful silhouette and uplifting green hue. Ours is nestled in an off-white ceramic pot bearing a distinctive geometric pattern. Symbolic of friendship and togetherness, it’s a thoughtful gift idea for anyone who brings joy to your life.",
  price: 38.99,
  quantity: 2,
  seller_id: 3
)
chinese.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/chinese-money.JPG'), filename: 'chinese-money.JPG')

croton = Product.create!(
  title: "Croton",
  category: 'House Plant',
  description: "Crotons make great indoor plants, their colors are dependent on how healthy they are, and the amount of sunlight they get. The healthier they are, the more vivid they can get.",
  price: 52.00,
  quantity: 9,
  seller_id: 3
)
croton.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/croton1.jpg'), filename: 'croton1.jpg')
croton.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/croton2.jpg'), filename: 'croton2.jpg')
croton.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/croton3.jpg'), filename: 'croton3.jpg')

ag1 = Product.create!(
  title: "Aglaonema Maria",
  category: 'House Plant',
  description: "Native to the tropical and subtropical regions of Asia and New Guinea, Aglaonema Maria has been cultivated for centuries as a good luck charm. Known to live a long and healthy life, it is believed to bring wellbeing to the home and all its dwellers. Aglaonema Maria wears a luminant sage-green foliage that brings class and sophistication to any room. Aglaonema Maria grows best in a well-lit space. Avoid placing it in direct sunlight or spaces without natural light.",
  price: 52.00,
  quantity: 5,
  seller_id: 3
)
ag1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/diamondag2.jpg'), filename: 'diamondag2.jpg')
ag1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/diamondag1.JPG'), filename: 'diamondag1.JPG')


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
  seller_id: 4
)
monsteraA1 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/monstera-deliciosa/monsteraA1.jpg')
monstera1.photos.attach(io: monsteraA1, filename: 'monsteraA1.jpg')
monsteraA2 = open('https://plantsy-dev.s3.us-west-1.amazonaws.com/monstera-deliciosa/monsteraA2.jpg')
monstera1.photos.attach(io: monsteraA2, filename: 'monsteraA2.jpg')

fiddle = Product.create!(
  title: "Fiddle Leaf Fig",
  category: 'House Plant',
  description: "Everyone's favorite indoor plant is here, arriving at your home ready to display in your favorite pot. The Fiddle Leaf, or Ficus lyrata, is a species of flowering plant in the mulberry and fig family Moraceae. Native to western Africa, from Cameroon west to Sierra Leone, growing wild in lowland tropical environments.",
  price: 54.00,
  quantity: 1,
  seller_id: 4
)
fiddle.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/fiddle1.JPG'), filename: 'fiddle1.JPG')
fiddle.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/fiddle2.jpg'), filename: 'fiddle2.jpg')
fiddle.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/fiddle3.jpg'), filename: 'fiddle3.jpg')

goldstar = Product.create!(
  title: "Dracaena Goldstar Plant in 2g pot - About 60in tall",
  category: 'House Plant',
  description: "This listing is for 1 Dracaena Goldstar Plant in 10in pot - It is about 60inches tall. It has beautiful color. Does well in bright light.",
  price: 139.00,
  quantity: 1,
  seller_id: 4
)
goldstar.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/goldstar1.JPG'), filename: 'goldstar1.JPG')
goldstar.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/goldstar2.JPG'), filename: 'goldstar2.JPG')

hoja = Product.create!(
  title: "Hoya Carnosa (Jade)",
  category: 'House Plant',
  description: "Hoyas are known for their long vines full of waxy foliage. There are dozens of different varieties boasting unique color schemes, patterns and leaf shapes. They do not need much water or attention to be happy.",
  price: 24.00,
  quantity: 4,
  seller_id: 4
)
hoja.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/hoja1.JPG'), filename: 'hoja1.JPG')
hoja.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/hoja2.JPG'), filename: 'hoja2.JPG')
hoja.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/hoja3.JPG'), filename: 'hoja3.JPG')

ivy = Product.create!(
  title: "English Ivy",
  category: 'House Plant',
  description: "Botanical Name: Hedera helix; Common Name: English ivy; Origin: Ireland, Scandinavia, western Asia and northern Africa; 'Goldchild’ English ivy has round-tipped leaves of 3 to 5 lobes with bright gold edges and green-gray centers. It will grow several inches upward then drape downward around the container.",
  price: 38.24,
  quantity: 5,
  seller_id: 4
)
ivy.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/ivy.jpg'), filename: 'ivy.jpg')

fern = Product.create!(
  title: "Maidenhair Fern",
  category: 'House Plant',
  description: "'Maidenhair Fern' actually refers to the genus Adiantum, which has over 250 species. Our Maidenhair fern, sometimes called the 'Black' Maidenhair Fern, is native to the southern half of the United States and South America, but has a worldwide distribution today. It is a popular choice for its many soft, delicate leaves and easy care. The Black Maidenhair fern grows up to 15 in in height, and prefers care similar to other ferns, preferring indirect sunlight or partial shade and moderate moisture.",
  price: 35.25,
  quantity: 14,
  seller_id: 4
)
fern.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/maidenhair1.jpg'), filename: 'maidenhair1.jpg')
fern.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/maidenhair2.jpg'), filename: 'maidenhair2.jpg')

marg = Product.create!(
  title: "Dracaena Marginata Open Weave",
  category: 'House Plant',
  description: "A fun and bold Dracaena variety with woven tree stems and spiky, upright leaves. Also known as the Madagascar Dragon Tree, this potted tree is 4-5 feet tall and has been recognized for its air-purifying qualities. This Dracaena Marginata variety is tall with an open braid weave consisting of multiple stems. Its thin, green leaves banded in red or pink on top of slender canes make a delicate, abstract silhouette. As it grows, this statement plant maintains its upright appearance making it perfect for blank walls, behind furniture, or narrow corners. Dracaena Marginatas are easy, low-maintenance indoor plants that will thrive and adapt in almost any environment, often growing well in low to medium light spaces. Plus, NASA lists the Dracaena Marginata as an excellent plant for removing harmful chemicals from the air.",
  price: 199.94,
  quantity: 2,
  seller_id: 4
)
marg.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/marginata1.JPG'), filename: 'marginata1.JPG')
marg.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/marginata2.JPG'), filename: 'marginata2.JPG')



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

minimoney = Product.create!(
  title: "Mini Money Tree",
  category: 'House Plant',
  description: "The Mini Money Tree is a perfect indoor foliage plant to give you a tropical feel. With its stout stem and bright green palm-looking leaves, it looks both like a tree and a tiny palm. Native from Mexico to northern South America, the Money Tree is also very popular in Taiwan and other East Asian countries. The Mini Money Tree gets its name because the Feng Shui practice believes it will bring positive energy and good luck to the owner. It has been said this plant reduces stress, anxiety and may also help lessen sleeping disorders. Difficulty: No-fuss. Light: Low, Artificial Partial, Bright Indirect. Pet Friendly: Yes. Air Cleaner: Yes. Pet Friendly Details: non-toxic to cats and dogs. Air Cleaner Details: Purifies air polluted with synthetic chemicals from cleaning products. Healthy plant pre-potted with premium soil. Plant size: 9in-15in tall (including pot). Ecopots pot and saucer. Pot size: 6.3in in diameter, 5in tall. Saucer size: 6in in diameter.",
  price: 49.00,
  quantity: 4,
  seller_id: 5
)
minimoney.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/minimoney1.JPG'), filename: 'minimoney1.JPG')
minimoney.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/minimoney2.JPG'), filename: 'minimoney2.JPG')

paradise = Product.create!(
  title: "Bird of Paradise",
  category: 'House Plant',
  description: "The Bird of Paradise is considered the queen of the indoor plant world. This large, upright plant adds a rich, tropical flair to your space as its glossy, banana-shaped leaves fan out. It is relatively hardy and adapts to a wide spectrum of light conditions from direct sun to low, indirect light, but will flourish in a sunny spot. // Water and humidity are important to keep your Bird of Paradise healthy. It needs consistent watering to keep the soil moist, but never wet or soggy. In addition to careful watering, it will benefit from regular misting to boost its humidity. The Bird of Paradise is native to South Africa where it receives a lot of light and warmth. // When grown indoors, there will not be enough light to trigger the plant to produce a bloom. However, the majestic foliage and graceful stems make a statement on their own. The leaves of your Bird of Paradise are naturally perforated and may split in transit, and over time. This is completely natural and not a cause for concern. In the wild, perforating leaves is how the Bird of Paradise becomes more aerodynamic to stand up to the high winds of the tropics.",
  price: 198.00,
  quantity: 3,
  seller_id: 5
)
paradise.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/paradise1.jpg'), filename: 'paradise1.jpg')
paradise.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/paradise2.jpg'), filename: 'paradise2.jpg')
paradise.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/paradise3.jpg'), filename: 'paradise3.jpg')

parlor = Product.create!(
  title: "Parlor Palm",
  category: 'House Plant',
  description: "This slow-growing, compact palm thrives in a variety of light situations and tight spaces. It’s dark green fronds create a bushy, lush plant perfect for tabletops, desks, and shelves. // The Parlor Palm will do best in bright, filtered light, but will readily adapt to low light as well. // Native to Mexico and Central America, the Parlor Palm requires very little care and is an excellent air purifier.  This indoor plant is highly adaptable making it perfect for offices, businesses with less than ideal growing conditions.",
  price: 49.98,
  quantity: 1,
  seller_id: 5
)
parlor.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/parlorpalm1.JPG'), filename: 'parlorpalm1.JPG')
parlor.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/parlorpalm2.JPG'), filename: 'parlorpalm2.JPG')

pinkag = Product.create!(
  title: "Rare Pink Aglaonema Chinese Evergreen ",
  category: 'House Plant',
  description: "Pink Aglaonema Chinese Evergreen Plants are a simple, slow-growing variety that are accented with stunning strips of bright pink along the leaves. The large, narrow leaves have a distinct oval shape, and their color is brought out best with medium or indirect light. This houseplant needs water when the soil begins to dry out.",
  price: 10.00,
  quantity: 8,
  seller_id: 5
)
pinkag.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/pinkag1.jpg'), filename: 'pinkag1.jpg')
pinkag.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/pinkag2.PNG'), filename: 'pinkag2.PNG')

pep = Product.create!(
  title: "Peperomia Collection",
  category: 'House Plant',
  description: "These pet-friendly peperomia plants are some of the most hardy plants, thanks to their semi-succulent leaves that store excess water. With a variety of texture and color, our Pet-Peromia are adaptable to almost any spot in your home. Arriving in clay pots, this collection looks great displayed individually or in a trio on our hanging saucer. The Pet-Peromia Collection is a group of three pet-friendly plants, including Peperomia Green, Peperomia Happy Bean, and Peperomia Schumi Red. All three plants are compact and trailing, making them perfect accents for a table or bookshelf. With leaves featuring unique colors, textures, and shapes, this is an easy-care collection that won’t mind a little extra attention from your furry friends. All three Peperomia in this collection are native to South America. They have semi-succulent stems and leaves, making them resilient plants that won’t be affected by a missed watering every once in a while.",
  price: 69.00,
  quantity: 4,
  seller_id: 5
)
pep.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/peperomia-collection1.JPG'), filename: 'peperomia-collection1.JPG')
pep.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/peperomia-collection2.JPG'), filename: 'peperomia-collection2.JPG')
pep.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/peperomia-collection3.JPG'), filename: 'peperomia-collection3.JPG')
pep.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/peperomia-collection4.JPG'), filename: 'peperomia-collection4.JPG')



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

ponytail = Product.create!(
  title: 'Ponytail Palm',
  category: 'House Plant',
  description: "The Ponytail Palm is drought tolerant, slow-growing, and requires very little care. This plant is ideal for people with very little time or who travel regularly. The Ponytail Palm will be perfectly happy being watered every couple of weeks and left alone to soak up the sunlight. This distinct plant brings a little fun to any room in your home. The Ponytail Palm is neither a palm nor a tree — it’s actually a succulent and a member of the Agave family, native to the southeastern desert of Mexico. The bulb-like trunk is used to store water and the long leaves that grow from the top of the trunk resemble a ponytail.",
  price: 55.00,
  quantity: 7,
  seller_id: 6
  )
ponytail.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/ponytail1.JPG'), filename: 'ponytail1.JPG')
ponytail.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/ponytail2.JPG'), filename: 'ponytail2.JPG')

prayer = Product.create!(
  title: 'Lemon Lime Prayer Plant',
  category: 'House Plant',
  description: "Lemon Lime Prayer Plant (Maranta leuconeura 'Lemon Lime') / Thiago is from the tropics in Brazil and loves to dance in the moonlight. He gets his nickname 'prayer plant' from his leaves folding up at night, which mimics hands praying. It's been said he does this to make sure his roots get access to rainfall. Aww, thoughtful and handsome—swipe right? Low to bright indirect light. Direct light will scorch his leaves.",
  price: 28.50,
  quantity: 1,
  seller_id: 6
  )
prayer.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/prayer1.jpg'), filename: 'prayer1.jpg')
prayer.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/prayer2.jpg'), filename: 'prayer2.jpg')

serpant = Product.create!(
  title: 'Medusa China Doll (Serpent Tree)',
  category: 'House Plant',
  description: "Bushy and beautiful, our China Doll/Serpent Tree/Emerald Tree for delivery adds a touch of class to any room. They are technically a small, fast-growing tree. Because they have multiple stems and fine foliage, their canopy looks seriously lush. This isn't a beginner's plant — they need a moderate amount of attention to thrive. Give them the right conditions, and you'll be rewarded as they are lush and fast-growing and easily one of the most popular indoor plants because of their split delicate leaves and glossy foliage. They thrive in indirect light, so they would be a perfect addition to any room in your house!",
  price: 50.00,
  quantity: 9,
  seller_id: 6
  )
serpant.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/serpant1.jpg'), filename: 'serpant1.jpg')
serpant.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/serpant2.jpg'), filename: 'serpant2.jpg')
serpant.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/serpant3.jpg'), filename: 'serpant3.jpg')

spider = Product.create!(
  title: 'Spider Plant',
  category: 'House Plant',
  description: "The Spider plant is a flowering perennial native tropical South Africa. The leaves of the spider plant are thin ribbon like strands which end in a point and grow upward and bend downward giving it the look of a spider. The Spider plant produces small white flowers that grow along a long stalk independent to the leaves of the spider plant. Also known for their air purifying qualities, the spider plant is a great companion to any household of office.",
  price: 25.00,
  quantity: 4,
  seller_id: 6
  )
spider.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/spider.JPG'), filename: 'spider.JPG')



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

macrame1 = Product.create!(
  title: "Macrame Plant Hanger",
  category: 'Pottery',
  description: "Beautiful macrame rope plant holder. Intricate designs and embroidery in pots. It can be used in balcony and gardens and don’t take up garden space and can be beautifully decorated and hung along with the plant pots. If you like decorating your garden or balcony space with plants it’s a product that will add a new look to it. The product can be a great garden accessory to support and beautify your plants.",
  price: 15.95,
  quantity: 7,
  seller_id: 7
  )
macrame1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/macrameA1.JPG'), filename: 'macrameA1.JPG')
macrame1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/macrameA2.JPG'), filename: 'macrameA2.JPG')
macrame1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/macrameA3.JPG'), filename: 'macrameA3.JPG')

macrame2 = Product.create!(
  title: "Tan Macrame Plant Hanger",
  category: 'Pottery',
  description: "STYLISH AND UNIQUE The modern, vintage-inspired plant hanger adds the perfect touch to your living space or office. This beauty will freshen up your home and balcony garden, or brighten up an office. It can also keep your plants out of your pet's reach or be used as a convenient space saver. EASY INSTALLATION The hangers are suitable for indoor and outdoor use. Just expand the 4 leg strings, and place your plant pot in the middle of the Plant Hanger. It is great for a boho home decor. Keke Macrame Plant Hanger can be used for the living room, kitchen, hall, patio, high or low ceiling.",
  price: 20.00,
  quantity: 5,
  seller_id: 7
  )
macrame2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/macrameB1.JPG'), filename: 'macrameB1.JPG')
macrame2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/macrameB2.JPG'), filename: 'macrameB2.JPG')
macrame2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/macrameB3.JPG'), filename: 'macrameAB.JPG')

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

umbrella = Product.create!(
  title: "Schefflera Arboricola 'Umbrella'",
  category: 'House Plant',
  description: "The Umbrella plant is the dwarf version of the larger Schefflera Acrinophylla native to Taiwan. This evergreen wields very slender stalks with oblong leaves arranged in a circular fashion at the end of each stem.",
  price: 21.25,
  quantity: 29,
  seller_id: 8
  )
umbrella.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/umbrella1.jpg'), filename: 'umbrella1.jpg')
umbrella.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/umbrella2.jpg'), filename: 'umbrella2.jpg')
umbrella.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/umbrella3.jpg'), filename: 'umbrella3.jpg')

zz = Product.create!(
  title: "ZZ (Zamioculcas Zamiifolia)",
  category: 'House Plant',
  description: "The Zamioculcas zamiifolia, known adoringly as the ZZ Plant, is popular for a wealth of good reasons. It is incredibly easy to care for, tolerant of a wide range of environments, and is visually unique. Though it has little need for attention and care, the ZZ Plant will reward you anyway with long stems covered in small, dark green leaflets. Comes in handmade blue ceramic pot.",
  price: 70.25,
  quantity: 2,
  seller_id: 8
  )
zz.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/houseplants/zz.JPG'), filename: 'zz.JPG')

chocchip = Product.create!(
  title: "Dendrobium Chocolate Chip Fragrant Orchid",
  category: 'Orchid',
  description: "Dendrobium Chocolate Chip is an exquisite hybrid between the legendary Micro Chip and normanbyense. It’s a unique miniature orchid with sprays of delicate speckled white flowers. The front of the flowers is detailed with purple lining, while the back of each flower is as close to a chocolate chip cookie as an orchid could ever be! Chocolate Chip is perfect for the entry-level collector who doesn’t have a bunch of space for their collection but wants something extraordinary and impressive. This compact Latouria type Dendrobium is evergreen and has mystical little flowers that shoot out from all sides of the plant. Canes are almost Seussian with their quirky top-heavy shape! Lightly cinnamon-fragrant blooms!",
  price: 44.99,
  quantity: 18,
  seller_id: 8
  )
chocchip.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/chocchip1.jpg'), filename: 'chocchip1.jpg')
chocchip.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/chocchip2.jpg'), filename: 'chocchip2.jpg')

enobi = Product.create!(
  title: "Live Purple Mini Orchid Dendrobium Enobi",
  category: 'Orchid',
  description: "This mini Dendrobium is a beautiful compact grower with pure, bright purple DenPhal-style blooms.",
  price: 34.00,
  quantity: 3,
  seller_id: 8
  )
enobi.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/enobipurple1.jpg'), filename: 'enobipurple1.jpg')
enobi.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/enobipurple2.jpg'), filename: 'enobipurple2.jpg')

snow = Product.create!(
  title: "Fragrant Orchid Plant LIVE IN SPIKE Dendrobium Mini Snowflake",
  category: 'Orchid',
  description: "Dendrobium Mini Snowflake is an exquisite primary hybrid (aberrans x johnsoniae). It's a unique miniature orchid with sprays of delicate snowy white flowers. Dendrobium Mini Snowflake is perfect for the entry level collector who doesn’t have a bunch of space for their collection, but wants something extraordinary and impressive. Pseudobulbs are almost Seussian with their quirky top-heavy shape!",
  price: 44.00,
  quantity: 1,
  seller_id: 8
  )
snow.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/minisnowflake1.JPG'), filename: 'minisnowflake1.JPG')
snow.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/minisnowflake2.JPG'), filename: 'minisnowflake2.JPG')
snow.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/minisnowflake3.JPG'), filename: 'minisnowflake3.JPG')



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
  description: "This Japanese native is a needled evergreen bonsai tree. Its wide reaching branches give it lovely pads as it ages, and the flat fanned foliage make this bonsai truly stunning at any age. It is a traditional tree for bonsai. It is incredibly hardy, making it an excellent first bonsai tree.",
  price: 104.99,
  quantity: 2,
  seller_id: 10
  )
bonsai2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bonsai/cypressbonsai1.JPG'), filename: 'cypressbonsai1.JPG')
bonsai2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/bonsai/cypressbonsai2.JPG'), filename: 'cypressbonsai2.JPG')

pinkhal = Product.create!(
  title: 'Pink Phalaenopsis Orchid',
  category: 'Orchid',
  description: "Add a pop of pink to your tablescape with this popular Phalaenopsis orchid. One of the easiest varieties to grow as a houseplant, it is affectionately called the beginner orchid. You may notice a small amount of blooms on your orchid upon delivery. These blooms will open quicker in a warm indoor setting. It will typically bloom about once a year, for up to three months. After a blooming cycle, the flowers will wilt and fall off. This is the orchid’s way to store up energy to re-bloom again next season.",
  price: 18.99,
  quantity: 2,
  seller_id: 10
  )
pinkhal.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/pinkphal1.jpg'), filename: 'pinkphal1.jpg')
pinkhal.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/pinkphal2.jpg'), filename: 'pinkphal2.jpg')

whitephal = Product.create!(
  title: 'White Phalaenopsis Orchid',
  category: 'Orchid',
  description: "Add a pop of white and green to your tablescape with this popular Phalaenopsis orchid. One of the easiest varieties to grow as a houseplant, it is affectionately called the beginner orchid. You may notice a small amount of blooms on your orchid upon delivery. These blooms will open quicker in a warm indoor setting. It will typically bloom about once a year, for up to three months. After a blooming cycle, the flowers will wilt and fall off. This is the orchid’s way to store up energy to re-bloom again next season.",
  price: 18.99,
  quantity: 5,
  seller_id: 10
  )
whitephal.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/whitephal1.JPG'), filename: 'whitephal1.JPG')
whitephal.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/whitephal2.JPG'), filename: 'whitephal2.JPG')

smallphal = Product.create!(
  title: 'Small Phalaenopsis Orchid Set',
  category: 'Orchid',
  description: "Add a pop of pink to your tablescape with these popular Phalaenopsis orchids. One of the easiest varieties to grow as a houseplant, it is affectionately called the beginner orchid. You may notice a small amount of blooms on your orchids upon delivery. These blooms will open quicker in a warm indoor setting. It will typically bloom about once a year, for up to three months. After a blooming cycle, the flowers will wilt and fall off. This is the orchid’s way to store up energy to re-bloom again next season. You will recieve three small 6in tall orchids or varying colors.",
  price: 45.00,
  quantity: 6,
  seller_id: 10
  )
smallphal.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/smallphal.jpg'), filename: 'smallphal.jpg')

wilsonara = Product.create!(
  title: "Wilsonara Pacific Passage 'Peach Cobbler'",
  category: 'Orchid',
  description: "Live Wilsonara (Oncidium Alliance) Orchid Plant. Blooming size, but not currently in bloom",
  price: 39.00,
  quantity: 2,
  seller_id: 10
  )
wilsonara.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/wilsonara1.jpg'), filename: 'wilsonara1.jpg')
wilsonara.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/moreorchids/wilsonara2.jpg'), filename: 'wilsonara2.jpg')

# -----------------------------------------
user11 = User.create!(
  name: 'Peter',
  email: 'spiderman@gmail.com',
  password: 'web9875'
  )

animals = Product.create!(
  title: "Adorable Animal Pottery Set",
  category: 'Pottery',
  description: "Adorable handmade set of animal pottery. Can be used to plant small succulents or other plants of choice. Set includes all four items featured in the photo",
  price: 50.00,
  quantity: 1,
  seller_id: 11
  )
animals.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/animals.JPG'), filename: 'animals.JPG')

coral = Product.create!(
  title: "Underwater Coral Pot",
  category: 'Pottery',
  description: "Handmade ceramic pot made to resemble coral or other neat underwater organisms. Pot size measures 7in in height and 5in in width.",
  price: 28.00,
  quantity: 4,
  seller_id: 11
  )
coral.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/coral.JPG'), filename: 'coral.JPG')

faces = Product.create!(
  title: "Handmade Pottery for Plants",
  category: 'Pottery',
  description: "Currently only avaiable in the terracotta color. Beautiful handmade sleeping face pot to plant cacti, succulents and more!",
  price: 38.00,
  quantity: 2,
  seller_id: 11
  )
faces.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/faces.jpg'), filename: 'faces.jpg')

fox = Product.create!(
  title: "Cute Fox Pot Set",
  category: 'Pottery',
  description: "Cute set of 3, fox pots. The set includes three pieces ranging from small-medium-large as seen in the photo.",
  price: 35.00,
  quantity: 3,
  seller_id: 11
  )
fox.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/fox.jpg'), filename: 'fox.jpg')

leafpot = Product.create!(
  title: "Pottery Set with Leaf Design",
  category: 'Pottery',
  description: "Set of two matching handmade ceramic pots. You will receive one lime green and one light blue pot featuring a lovely leaf design.",
  price: 30.00,
  quantity: 1,
  seller_id: 11
  )
leafpot.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/leaf.JPG'), filename: 'leaf.JPG')

# ----------------------------------
user12 = User.create!(
  name: 'Jon',
  email: 'jon-snow@whitewall.com',
  password: 'ghost11'
  )

prop1 = Product.create!(
  title: "Glass Propagation Vase",
  category: 'Pottery',
  description: "6in tall glass propagation vase for new cuttings to root. Includes vase and vase topper.",
  price: 16.50,
  quantity: 15,
  seller_id: 12
  )
prop1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/propA1.JPG'), filename: 'propA1.JPG')
prop1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/propA2.JPG'), filename: 'propA2.JPG')

prop2 = Product.create!(
  title: "Glass Propagation Tubes",
  category: 'Pottery',
  description: "6in tall glass propagation tubes for new cuttings to root. Includes three tubes and holder.",
  price: 18.50,
  quantity: 12,
  seller_id: 12
  )
prop2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/propB1.JPG'), filename: 'propB1.JPG')
prop2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/propB2.JPG'), filename: 'propAB.JPG')

retro = Product.create!(
  title: "Retro Handpainted Pot",
  category: 'Pottery',
  description: "Stunning retro handpainted pot for plants. Wild assortment of blues, golds, and pinks to give a vibrant and retro vibe to your home.",
  price: 14.98,
  quantity: 2,
  seller_id: 12
  )
retro.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/retro.JPG'), filename: 'retro.JPG')

teal = Product.create!(
  title: "Marbled Teal Ceramic Pot",
  category: 'Pottery',
  description: "A lovely pair for any of your houseplants. This marbled teal ceramic pot will hold any 6in houseplant.",
  price: 24.60,
  quantity: 5,
  seller_id: 12
  )
teal.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/pottery/teal-ceramic.JPG'), filename: 'teal-ceramic.JPG')

# -----------------------------------
user13 = User.create!(
  name: 'Violet',
  email: 'succulentgirl@yahoo.com',
  password: '7895681256'
  )

arr1 = Product.create!(
  title: "Assorted Succulent Arrangment",
  category: 'Succulent',
  description: "Arrangment comes with a variety of assorted succulents in a cement grey bowl.",
  price: 45.00,
  quantity: 5,
  seller_id: 13
  )
arr1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/arr1.JPG'), filename: 'arr1.JPG')

arr2 = Product.create!(
  title: "Succulent Arrangment- Bird Pot",
  category: 'Succulent',
  description: "Arrangment comes with a variety of assorted succulents in a cute white bird shaped bowl.",
  price: 35.00,
  quantity: 3,
  seller_id: 13
  )
arr2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/arr2.jpg'), filename: 'arr2.jpg')

arr3 = Product.create!(
  title: "Assorted Succulent Arrangment- Handmade Pot",
  category: 'Succulent',
  description: "Arrangment comes with a variety of assorted succulents in a handmade cream colored ceramic pot.",
  price: 40.00,
  quantity: 1,
  seller_id: 13
  )
arr3.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/arr3.jpg'), filename: 'arr3.jpg')

assort1 = Product.create!(
  title: "Succulent Assortment",
  category: 'Succulent',
  description: "Assortment of handpicked 4in succulents. Purchase will come with 5 plants. See photos for potential options.",
  price: 15.50,
  quantity: 25,
  seller_id: 13
  )
assort1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/assortmentA1.jpg'), filename: 'assortmentA1.jpg')
assort1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/assortmentA2.jpg'), filename: 'assortmentA2.jpg')

assort2 = Product.create!(
  title: "Tiny Succulent Assortment",
  category: 'Succulent',
  description: "Assortment of tiny handpicked succulents. Purchase will come with 8 small baby plants. See photos for potential options.",
  price: 9.50,
  quantity: 25,
  seller_id: 13
  )
assort2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/assortmentB1.jpg'), filename: 'assortmentB1.jpg')
assort2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/assortmentB2.jpg'), filename: 'assortmentB2.jpg')

bear = Product.create!(
  title: "Cotyledon tomentosa - Bear's Paw",
  category: 'Succulent',
  description: "Bear's Paw (Cotyledon tomentosa ssp. tomentosa) (Harvey): A small shrublet with thick, wedge-like leaves and a velvety coating. Its fuzzy leaves have a toothed edge highlighted in dark red and truly resemble a bear's paw. This makes a great houseplant, though it's hard to keep from touching its leaves every time you pass it. It produces pale coral to white flowers.",
  price: 9.98,
  quantity: 12,
  seller_id: 13
  )
bear.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/bearclaw1.jpg'), filename: 'bearclaw1.jpg')
bear.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/bearclaw2.jpg'), filename: 'bearclaw2.jpg')
bear.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/bearclaw3.jpg'), filename: 'bearclaw3.jpg')

cot = Product.create!(
  title: "RARE Miniature Cotyledon pendens - Cliff Cotyledon Crassulaceae",
  category: 'Succulent',
  description: "Cotyledon pendens is a rare succulent shrublet with hanging stems up to 2 feet (60 cm) long. The leaf surface is whitish grey-green due to the powdery bloom, the leaf margin is an attractive reddish color. The inflorescence is produced at the ends of the branches. The flowers are bell shaped, orange-red, up to 1.6 inches (4 cm) long, with a cylindrical tube slightly bulging in the middle.",
  price: 15.00,
  quantity: 4,
  seller_id: 13
  )
cot.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/cotyledon1.jpg'), filename: 'cotyledon1.jpg')
cot.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/cotyledon2.jpg'), filename: 'cotyledon2.jpg')
cot.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/cotyledon3.jpg'), filename: 'cotyledon3.jpg')

dolphin = Product.create!(
  title: "String of Dolphins",
  category: 'Succulent',
  description: "String of Dolphins are one of a kind succulent with leaves shaped like DOLPHINS! This unique Strings comes in a full 6in hanging pot with a hanger for convenient organization. String of Dolphins are easy to care for, just make sure not to overwater and let the plant dry out between watering! String of Dolphins Care: Water every 10-14 days when top 3in of soil is dry. Do not overwater as string of dolphins are prone to root rot. Medium indirect sunlight or under grow lights. Temperature: 65°F - 75°F",
  price: 39.00,
  quantity: 2,
  seller_id: 13
  )
dolphin.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/dolphins.jpg'), filename: 'dolphins.jpg')

pearl = Product.create!(
  title: "String of Pearls",
  category: 'Succulent',
  description: "The delicate Senecio Rowleyanus, or String of Pearls, is one of the most beautiful hanging succulents we carry. It's long tendrils are decorated with perfectly round beads and look fantastic on top of a bookshelf or hanging in your sunny window. ",
  price: 39.95,
  quantity: 3,
  seller_id: 13
  )
pearl.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/stringpearls.jpg'), filename: 'stringpearls.jpg')

donkey = Product.create!(
  title: "String of Donkey Tails Succulent",
  category: 'Succulent',
  description: "These succulents are one of the cutest plants that you definitely love to have in your collection. Plants like to hang out of the pot. This plant is extremely easy to loose their leaves naturally, please be aware of the nature of the plant, we also try our best to get them ready for the trip, however, some broken leaves are unavoidable on arrival. Just put the leaves on the soil together with your cuttings, they will grow up and become more baby plants to fill your pot. Well drained soil, moist soil, pots must have drainage holes. Established plants are ok on full sun. Uprooted cuttings and leaves grow better in partial sun area, under some shade.",
  price: 28.00,
  quantity: 6,
  seller_id: 13
  )
donkey.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/donkey-tail.jpg'), filename: 'donkey-tail.jpg')

party = Product.create!(
  title: "Succulent Party Favors",
  category: 'Succulent',
  description: "Assorted succulent party favors. Comes in a variety of species. Can be wrapped in any color decor according to the party theme of your choice. Priced per individual plant.",
  price: 2.00,
  quantity: 80,
  seller_id: 13
  )
party.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/partyfavor1.jpg'), filename: 'partyfavor1.jpg')
party.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/partyfavor2.jpg'), filename: 'partyfavor2.jpg')
party.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/succulents/partyfavor3.jpg'), filename: 'partyfavor3.jpg')

# -------------------------------
user14 = User.create!(
  name: 'Lily',
  email: 'lilikoi@lils.com',
  password: 'orangesunset22'
  )

clippers = Product.create!(
  title: "Garden Clippers",
  category: 'Supplies',
  description: "Sharp steel garden clippers/trimmers with teal handle.",
  price: 25.90,
  quantity: 16,
  seller_id: 14
  )
clippers.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/clippers1.JPG'), filename: 'clippers1.JPG')
clippers.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/clippers2.JPG'), filename: 'clippers2.JPG')
clippers.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/clippers3.JPG'), filename: 'clippers3.JPG')

fert1 = Product.create!(
  title: "Houseplant Special Fertilizer",
  category: 'Supplies',
  description: "Effective for both foliage and flowering plants, the Houseplant Special Fertilizer is a must-have product in your care routine. Containing a boost of phosphorus, it will encourage bigger, healthier blooms as well as lush foliage. It works well on plants such as tradescantia, bird of paradise, hoya, schefflera, aglaonema, and more. Jack’s Houseplant Special Fertilizer (15-30-15) promotes healthy growth for foliage and flowering plants. With key micronutrients to prevent underfeeding, Jack’s Houseplant Special Fertilizer is great for long-term indoor plant care. This versatile fertilizer can be used both indoors and outdoors, working well with plants such as tradescantia, bird of paradise, hoya, schefflera, aglaonema and other foliage plants. For optimal results, use ½ teaspoon per gallon of water during the active growing seasons. Most plants desire fertilizer once a month during the spring and summer. No fertilizing is typically needed during the fall and winter months as this is your plant’s natural dormancy time. Always remember to apply fertilizer to damp soil.",
  price: 12.00,
  quantity: 10,
  seller_id: 14
  )
fert1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/fertizilzerA1.JPG'), filename: 'fertizilzerA1.JPG')
fert1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/fertizilzerA2.JPG'), filename: 'fertizilzerA2.JPG')
fert1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/fertizilzerA3.JPG'), filename: 'fertizilzerA3.JPG')

fert2 = Product.create!(
  title: "Time Release Fertilizer",
  category: 'Supplies',
  description: "This nutrient-rich fertilizer works wonders on both indoor and outdoor plants. Releasing nutrients slowly over 4 months, Jack’s ClassiCote Fertilizer is the ideal selection for forgetful plant parents and plants that resent being over-fertilized. With controlled release nutrients including phosphorus and magnesium, Jack’s ClassiCote Fertilizer with Crystal Green’s® crystalline compounds provides continuous nutrition for over four months, supporting stronger roots and vital green growth. Using a time-release formula, plants can feed on key nutrients in small increments, giving them more time for absorption instead of washing away during watering. Jack’s Classicote Fertilizer is great for outdoor potted plants, flowering plants, and is a beneficial addition to your potting soil when repotting.",
  price: 16.00,
  quantity: 10,
  seller_id: 14
  )
fert2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/fertizilzerB1.JPG'), filename: 'fertizilzerB1.JPG')
fert2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/fertizilzerB2.JPG'), filename: 'fertizilzerB2.JPG')
fert2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/fertizilzerB3.JPG'), filename: 'fertizilzerB3.JPG')

glove = Product.create!(
  title: "Pink Gardening Gloves",
  category: 'Supplies',
  description: "Durable and lightweight, the Pink Garden Gloves are form-fitting to provide you with nimble hand protection for indoor and outdoor gardening, weeding, and plant care. Sealed with latex foam on the palm and fingers, these gloves help keep moisture out without sacrificing flexibility. Designed by Womenswork with a custom fit for women in mind.",
  price: 25.00,
  quantity: 10,
  seller_id: 14
  )
glove.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/gloves1.JPG'), filename: 'gloves1.JPG')
glove.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/gloves2.JPG'), filename: 'gloves2.JPG')

neem = Product.create!(
  title: "Neem Oil",
  category: 'Supplies',
  description: "Bonide Neem Oil is an all-purpose insecticide, miticide, and fungicide for organic gardening. Neem oil is great for plant owners to have on hand to treat active pests and diseases and prevent future outbreaks. Bonide Neem Oil is highly recommended for plant parents who need a natural and all-purpose product to treat their plants. Derived from the Neem seed, Neem Oil kills pests, eggs, and larvae on contact. It’s effective to treat a variety of pests, including spider mites, scale, and gnats. It also treats many fungal diseases such as leaf spot and powdery mildew. Most commonly used on houseplants, roses, flowers, vegetables, herbs, spices, trees, turf and shrubs. Always follow the direction on the label.",
  price: 15.00,
  quantity: 10,
  seller_id: 14
  )
neem.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/neem1.JPG'), filename: 'neem1.JPG')
neem.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/neem2.JPG'), filename: 'neem2.JPG')

shovel1 = Product.create!(
  title: "Soil Scoop",
  category: 'Supplies',
  description: "This stainless steel Soil Scoop is an essential tool for repotting and planting both indoor and outdoor plants. This tool allows you to move generous amounts of soil at once and is helpful for mixing in slow-release fertilizer as you repot. Add this useful tool to your collection and repot your plants with ease.",
  price: 30.00,
  quantity: 12,
  seller_id: 14
  )
shovel1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/shovelA1.JPG'), filename: 'shovelA1.JPG')
shovel1.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/shovelA2.JPG'), filename: 'shovelA2.JPG')

shovel2 = Product.create!(
  title: "Hand Trowel",
  category: 'Supplies',
  description: "This versatile Hand Trowel is useful for repotting and planting both indoors and out. With a wide, deep dish and narrow tip, this tool will dig, transplant, and scoop soil with ease. Excellent for smaller plants and pots, as well as outdoor gardening, this high-quality, stainless steel tool is great to have on-hand for all your gardening needs.",
  price: 30.00,
  quantity: 11,
  seller_id: 14
  )
shovel2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/shovelB1.JPG'), filename: 'shovelB1.JPG')
shovel2.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/shovelB2.JPG'), filename: 'shovelB2.JPG')

watercan = Product.create!(
  title: "Watering Can",
  category: 'Supplies',
  description: "This steel white watering canister/bucket is a great addition to your indoor or outdoor plant needs. Water your plants in fashion with this sleek white leek-proof look.",
  price: 35.00,
  quantity: 5,
  seller_id: 14
  )
watercan.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/watercan1.JPG'), filename: 'watercan1.JPG')
watercan.photos.attach(io: open('https://plantsy-dev.s3.us-west-1.amazonaws.com/uploads/supplies/watercan2.JPG'), filename: 'watercan2.JPG')


