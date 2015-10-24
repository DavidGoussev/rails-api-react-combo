class CreateSpews < ActiveRecord::Migration
  def change
    create_table :spews do |t|
      t.string :content, null: false
      t.timestamps
    end
  end
end
