class Mail < ActiveRecord::Base
  attr_accessible :created_at, :description, :receiver_id, :subject, :updated_at, :sender
end
