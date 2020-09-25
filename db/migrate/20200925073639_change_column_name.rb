class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :cocktails, :birthplace, :country
  end
end
