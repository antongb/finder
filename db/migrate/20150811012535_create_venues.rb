class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.string :address
      t.string :city

      t.timestamps null: false
    end
    add_index :venues, :name, unique: true
  end
end
