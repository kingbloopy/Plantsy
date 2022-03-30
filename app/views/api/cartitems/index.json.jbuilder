
@cart.each do |item|
  json.set! item.id do
    json.extract! item, :id, :product_id, :user_id, :quantity, :total_price, :shop, :available
    json.extract! item.product, :title, :price
    json.photoUrl url_for(item.product.photos[0])
  end
end