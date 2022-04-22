json.extract! product, :id, :title, :category, :description, :price, :quantity

json.sellerId  product.seller_id
json.date product.created_at.strftime("Listed on %b %e, %Y")
if product.shop
  json.shop product.shop.name
  json.shopId product.shop.id
  json.sales product.shop.sales
end
json.photoURLs product.photos.map { |file| url_for(file) }
json.averageRating product.average_rating