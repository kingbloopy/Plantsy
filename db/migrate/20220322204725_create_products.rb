class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.string :category, null: false
      t.text :description, null: false
      t.decimal :price, null: false
      t.integer :quantity, null: false
      t.integer :seller_id, null: false
      
      t.timestamps
    end
    add_index :products, :title
    add_index :products, :category
    add_index :products, :seller_id
  end
end
