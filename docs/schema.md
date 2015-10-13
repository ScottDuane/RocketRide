# Schema Information

## users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
username    | string    | not null

## rockets
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
captain_id  | integer   | not null, foreign key (references users), indexed
rocket_name | string    | not null
rocket_type | string    | not null, must be in set {"Galaxy class", "Firefly", ... }
avail_start | date      | not null
avail_end   | date      | not null, must be later than avail_start

## reservations  
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rocket_id   | integer   | not null, foreign key (references rockets), indexed
creator_id  | integer   | not null, foreign key (references users), indexed
start_date  | date      | not null
end_date    | date      | not null, must be later than start_date

## favorites  
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rocket_id   | integer   | not null, foreign key (references rockets), indexed
user_id     | integer   | not null, foreign key (references users), indexed
