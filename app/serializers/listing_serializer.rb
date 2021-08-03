class ListingSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :user_id
  has_many :comments
end
