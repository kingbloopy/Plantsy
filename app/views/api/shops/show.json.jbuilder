json.set! @shop.id do
  json.extract! @shop, :name, :sales
end