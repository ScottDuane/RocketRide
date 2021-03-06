# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151027024312) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ratings", force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "rater_id",   null: false
    t.integer  "rocket_id",  null: false
    t.integer  "rating",     null: false
    t.string   "body"
  end

  create_table "reservations", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "creator_id", null: false
    t.integer  "rocket_id",  null: false
    t.date     "start_date", null: false
    t.date     "end_date",   null: false
    t.string   "status"
  end

  create_table "rockets", force: :cascade do |t|
    t.string   "rocket_name", null: false
    t.string   "rocket_type", null: false
    t.integer  "captain_id",  null: false
    t.date     "avail_start", null: false
    t.date     "avail_end",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "image_url"
    t.integer  "capacity"
    t.string   "description"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "session_token"
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "image_url"
  end

end
