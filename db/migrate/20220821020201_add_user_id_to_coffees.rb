class AddUserIdToCoffees < ActiveRecord::Migration[7.0]
  def change
    add_column :coffees, :user_id, :integer 
  end
end
