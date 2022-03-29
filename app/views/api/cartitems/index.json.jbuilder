@cart.each do |item|
  json.set! item.id do
    json.extract! item, :id, :product_id, :user_id, :quantity, :total_price
    json.extract! item.product, :title, :seller_id
    json.photoUrl url_for(item.product.photos[0])
    json.extract! item.product.shop.name
  end
end