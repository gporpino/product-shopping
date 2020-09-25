FactoryBot.define do
  
  factory :product, class: Product do
    name { Faker::Name.name }
    price { Faker::Number.between(from:10, to: 100) }
    
    trait :invalid do
      name { "" }
      price { nil }
    end
  end
end