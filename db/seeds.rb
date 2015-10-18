# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
rocket1 = Rocket.create({rocket_name: "USS Enterprise", rocket_type: "Galaxy class",
  captain_id: 1, avail_start: Date.new(2015, 3, 3), avail_end: Date.new(2016, 4,5), image_url: 'assets/USS_Enterprise-D.jpg'})
puts rocket1
Rocket.create({rocket_name: "Serenity", rocket_type: "Firefly", captain_id: 2,
  avail_start: Date.new(2015, 3, 5), avail_end: Date.new(2020, 7, 15), image_url: 'assets/serenity.jpg'})
Rocket.create({rocket_name: "Death Star", rocket_type: "Star", captain_id: 3,
    avail_start: Date.new(2020, 1, 5), avail_end: Date.new(2040, 7, 15), image_url: 'assets/DeathStar.jpg'})

Rocket.create({rocket_name: "Shuttlecraft Curie", rocket_type: "Shuttlecraft", captain_id: 4,
    avail_start: Date.new(2030, 12, 5), avail_end: Date.new(2040, 7, 15), image_url: 'assets/DeathStar.jpg'})

Rocket.create({rocket_name: "Millenium Falcon", rocket_type: "Light Freightor", captain_id: 5,
    avail_start: Date.new(2030, 12, 5), avail_end: Date.new(2040, 7, 15), image_url: 'assets/DeathStar.jpg'})
