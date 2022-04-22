class ChangeShopName < ActiveRecord::Migration[5.2]
  def change
    remove_column :shops, :name, :string
    add_column :shops, :name, :string, null: false
    add_index :shops, :name
  end
end
