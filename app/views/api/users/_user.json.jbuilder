json.user do 
json.extract! user, :id, :email, :name
end

cartitems = user.cartitems.includes(:product)
json.cart do
  user.cartitems.each do |cartitem|
    json.set! cartitem.id do
    json.extract! cartitem, :id, :product_id, :user_id, :quantity, :total_price
    json.extract! cartitem.product, :title, :seller_id
    json.photoUrl url_for(cartitem.product.photos[0])
    json.extract! cartitem.product.shop.name
    end
  end
end