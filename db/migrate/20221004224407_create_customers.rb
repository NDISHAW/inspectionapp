class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :names
      t.string :email
      t.string :phone_no
      t.string :address
      t.string :licence_no

      t.timestamps
    end
  end
end
