class Listing < ApplicationRecord
    validates :name, presence: :true
    validates :description, presence: :true
    validates :price, presence: :true

    belongs_to :user
    has_many :comments
end
