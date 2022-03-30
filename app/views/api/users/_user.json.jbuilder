json.user do 
json.extract! user, :id, :email, :name
end

cartitems = user.cartitems.includes(:product)
json.cart do
  user.cartitems.each do |cartitem|
    json.set! cartitem.id do
    json.extract! cartitem, :id, :product_id, :user_id, :quantity, :total_price, :shop, :available
    json.extract! cartitem.product, :title, :price
    json.photoUrl url_for(cartitem.product.photos[0])
    end
  end
end