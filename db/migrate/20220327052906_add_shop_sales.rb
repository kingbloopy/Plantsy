class AddShopSales < ActiveRecord::Migration[5.2]
  def change
    add_column :shops, :sales, :integer
  end
end
