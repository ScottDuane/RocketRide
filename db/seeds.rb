# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
rocket1 = Rocket.create({rocket_name: "USS Enterprise", rocket_type: "Galaxy class",
  captain_id: 7, avail_start: Date.new(2015, 3, 3), avail_end: Date.new(2016, 4,5), image_url: 'assets/USS_Enterprise-D.jpg'})
puts rocket1
Rocket.create({rocket_name: "Serenity", rocket_type: "Firefly", captain_id: 10,
  avail_start: Date.new(2015, 3, 5), avail_end: Date.new(2020, 7, 15), image_url: 'assets/serenity.jpg'})
