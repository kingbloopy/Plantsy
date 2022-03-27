class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.string :name, null: false, index: {unique: true}
      t.integer :owner_id, null: false
      t.timestamps
    end
  end
end
