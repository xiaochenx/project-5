class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :listing_id
  # belongs_to :listing
end
