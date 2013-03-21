class CreateMails < ActiveRecord::Migration
  def change
    create_table :mails do |t|
      t.text :description
      t.string :subject
      t.integer :receiver_id
      t.string :sender

      t.timestamps
    end
  end
end
