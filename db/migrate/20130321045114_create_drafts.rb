class CreateDrafts < ActiveRecord::Migration
  def change
    create_table :drafts do |t|
      t.string :subject
      t.text :body
      t.string :to

      t.timestamps
    end
  end
end
