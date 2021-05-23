class Cocktail < ApplicationRecord
  # after_initialize :default_values

  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses
  validates :name, presence: true, uniqueness: true
  # validates :photo, presence: true
  has_one_attached :photo

  # def default_values
  #   if self.photo.attached?
  #     self.photo.attach()
  #   end
  # end
end
